<template>
  <div class="tm-upload">
    <!-- 图片上传 -->
    <div v-if="model === 'image'" class="image-container">
      <transition-group v-if="imageUrlList.length" tag="div" name="list" class="image-container-left">
        <div
          v-for="(item, index) in imageUrlList"
          :key="item + index"
          @mouseenter="imageHover(item, index)"
          @mouseleave="unImageHover"
          class="image__item"
        >
          <img
            :src="item.url"
            alt=""
            class="image__item-img"
          >
          <div class="image__item-icon" v-show="isHover && target === index">
            <i class="iconfont icon-jiahao2" @click="handlePreview(item.url)"></i>
            <i class="iconfont icon-guanbi" @click="removeFile(index)"></i>
          </div>
        </div>
      </transition-group>
      <el-upload
        v-if="!isCut"
        ref="tmUpload"
        :headers="headers"
        :action="action"
        :accept="accept"
        :show-file-list="false"
        :data="data"
        :before-upload="handleBeforeUpload"
        :on-progress="handleProgress"
        :on-success="handleSuccess"
        :on-error="handleError"
      >
        <template v-if="1 < 0">
          <slot name="test" />
        </template>
        <div v-else>
          <!-- 图片单张上传 图片不剪切 -->
          <div class="image-single">
            <div
              class="image-single-uplaod"
              @mouseenter="isHover = true"
              @mouseleave="isHover = false"
              :class="{'image-single-empty': !imageUrl, 'image-single-solid': imageUrl}"
            >
              <img
                v-if="imageUrl"
                :src="imageUrl"
                alt
              />
              <div style="position: absolute" v-show="isHover || !imageUrl">
                <i class="iconfont icon-zhaopian"></i>
                <p>{{ imgTitle }}</p>
              </div>
            </div>
          </div>
        </div>
      </el-upload>
      <ImgCutter
          v-else
          label="裁剪本地图片"
          isModal
          :rate="rate"
          :boxWidth="500"
          :boxHeight="500"
          originalGraph
          tool
          @cutDown="handleCutDown"
          @type-error="handleTypeError"
        >
          <template #open>
            <div class="image-single">
              <div
                class="image-single-uplaod"
                @mouseenter="isHover = true"
                @mouseleave="isHover = false"
                :class="{'image-single-empty': !imageUrl, 'image-single-solid': imageUrl}"
                >
                <img
                  v-if="imageUrl"
                  :src="imageUrl"
                  alt
                />
                <div style="position: absolute" v-show="isHover || !imageUrl">
                  <i class="iconfont icon-zhaopian"></i>
                  <p>{{ imgTitle }}</p>
                </div>
              </div>
            </div>
          </template>
      </ImgCutter>
      <!-- <div v-if="isPreview && limit === 1" class="preview-button" @click="handlePreview(imageUrl)">预览</div> -->
    </div>
    <!-- 文件上传 -->
    <div v-else class="local-upload-drag-component">
      <div
        ref="tm-upload-dragger"
        :class="['drag-content', { 'drag-actived': dragEnter }]"
      >
        <div class="file-list" v-if="fileList.length">
          <div
            class="file-item"
            v-for="(file, index) in fileList"
            :key="index"
            @click="previewFile(file)"
          >
            <!-- <hj-patter-file fileType="csv"></hj-patter-file> -->
            <span class="file-name">
              {{ file.name }}
            </span>
          </div>
        </div>
        <i v-else class="icon iconfont iconwenjian3"></i>
        <div class="drag-text">
          将{{ fileTitle }}文件拖到此处，或
          <label :for="id" class="download-btn">点击上传</label>
        </div>
      </div>

      <input
        @change="onFileChange"
        v-show="false"
        name="file"
        type="file"
        :id="id"
        :accept="accept"
      />
    </div>
    <!-- 上传进度 -->
    <el-dialog
      title="上传"
      :visible.sync="showProgress"
      width="30%"
      @close="handleDialogClose"
      @closed="handleDialogClosed"
    >
      <div class="progress-info">
        <el-progress :percentage="uploadPercent"></el-progress>
      </div>
    </el-dialog>
    <!-- 预览 -->
    <el-dialog :visible.sync="previewShow" :append-to-body="true" custom-class="upload-preview-dialog">
      <div class="img-container">
        <img :src="previewUrl" alt="">
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import ImgCutter from 'vue-img-cutter';
  import { Upload, Progress, Dialog, Message } from 'element-ui';
  import { compress } from 'image-conversion';

  Vue.use(Upload);
  Vue.use(Progress);
  Vue.use(Dialog);
  Vue.use(Message);
  Vue.prototype.$message = Message;
  import { dataURLtoBlob, fileToDataURL, base64ToBlob } from "../util/tools";
  import { v4 as $uuid } from 'uuid';
  const IMAGE_WIDTH = 1080;

  export default {
    name: "tmUpload",
    props: {
      // 上传地址
      action: {
        type: String,
        default: '/resourceServer/file/commonUpload'
      },
      // 上传前限制条件
      beforeUpload: {
        type: Function,
        default: () => true
      },
      // 上传时附带的额外参数
      data: {
        type: Object,
        default: () => (
          {
            corpid: 'ww9c5530210a0d5116'
          }
        )
      },
      // 设置的请求头
      headers: {
        type: Object,
        default: () => (
          {
            Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDczNDMzNzMsInBheWxvYWQiOiJ7XCJjb3JwaWRcIjpcInd3OWM1NTMwMjEwYTBkNTExNlwiLFwiaWRcIjozODkzOTQxNjEzNTI3NjgsXCJ1c2VySWRcIjpcImFkbWluX3RtcWYwMTA5XCIsXCJpc0FkbWluXCI6MSxcImRlcGFydG1lbnRJZHNcIjpudWxsLFwibWFuYWdlRGVwdHNcIjpudWxsLFwiZGV2aWNlXCI6XCJ3ZWJcIixcIm5hbWVcIjpcImFkbWluXCIsXCJ2YWd1ZVwiOjAsXCJfbGVhZGVyXCI6dHJ1ZX0iLCJleHAiOjE2NDc1MTYxNzN9.SnE2BQIzDM668rKsOLWDr-8X9CkKk_qZbgHesFbApJk'
          }
        )
      },
      // 上传文件的数量，默认单个文件
      limit: {
        type: Number,
        default: 1
      },
      // 上传模式: file(文件上传)、image(图片上传)
      model: {
        type: String,
        default: "image",
      },
      // 是否剪切
      isCut: {
        type: Boolean,
        default: false
      },
      // 上传图片提示信息
      imgTitle: {
        type: String,
        default: "上传图片",
      },
      // 是否开启预览
      isPreview: {
        type: Boolean,
        default: false
      },
      // 上传文件的提示信息
      fileTitle: {
        type: String,
        default: "",
      },
      // 剪切比例
      rate: {
        type: String,
        default: '4:3'
      },
      // 上传的文件大小: 单位MB
      size: {
        type: Number,
        default: 5
      }
    },
    components: {
      ImgCutter 
    },
    data () {
      return {
        imageUrl: '',
        // 预览的地址
        previewUrl: '',
        // 多个文件上传
        imageUrlList: [],
        imgFile: {},
        showProgress: false,
        // 上传进度
        uploadPercent: 0,
        accept: "",
        // 是否显示预览弹框
        previewShow: false,
        // 文件上传列表
        fileList: [],
        dragEnter: false,
        // 是否hover
        isHover: false,
        target: '',
        id: 'fileInput',
      }
    },
    watch: {
      model: {
        handler (newValue) {
          // 上传图片
          if (newValue === 'image') {
            this.accept = 'image/png, image/jpg, image/jpeg'
          }
        },
        immediate: true
      }
    },
    created () {
      // fix: 多个上传
      const uuid = $uuid()
      this.id += uuid
    },
    mounted () {
      if (!this.$refs['tm-upload-dragger']) return
      const dragger = this.$refs['tm-upload-dragger']
      dragger.addEventListener('dragenter', this.onFileDragEnter, false)
      dragger.addEventListener('dragleave', this.onFileDragLeave, false)
      dragger.addEventListener('dragover', this.onFileDragover, false)
      dragger.addEventListener('drop', this.onFileDrag, false)
    },
    beforeDestroy () {
      if (!this.$refs['tm-upload-dragger']) return
      const dragger = this.$refs['tm-upload-dragger']
      dragger.removeEventListener('dragenter', this.onFileDragEnter, false)
      dragger.removeEventListener('dragleave', this.onFileDragLeave, false)
      dragger.removeEventListener('dragover', this.onFileDragover, false)
      dragger.removeEventListener('drop', this.onFileDrag, false)
    },
    methods: {
      // 点击文件
      previewFile (file) {
        console.log(file)
        this.$emit('previewFile', file)
      },
      imageHover(item, index) {
        this.isHover = true
        this.target = index
      },
      unImageHover() {
        this.isHover = false
        this.target = ''
      },
      removeFile (index) {
        this.imageUrlList.splice(index, 1)
      },
      // 剪切图片的上传
      handleCutDown (file) {
        const imgGs = file.dataURL.split(";")[0].split("/")[1];
        const newFile = dataURLtoBlob(file.dataURL, "裁剪图片." + imgGs);
        this.customUpload(newFile)
      },
      // 预览接口, 暴露给外部
      handlePreview (url) {
        if (!this.isPreview) return this.$message("暂不支持预览!", "error");
        if (!url) return this.$message("请先上传图片!", "error");
        this.previewUrl = url
        this.previewShow = true
      },
      // 剪切格式错误触发
      handleTypeError () {
        this.$message('该文件格式不支持！', 'error');
      },
      // 上传前的钩子函数: 做文件类型校验
      handleBeforeUpload (file) {
        // 多张图片上传
        if (this.model === 'image' && this.imageUrlList.length >= this.limit) {
          this.$message(`最多上传${this.limit}张图片!`, "error");
          return false
        }
        const includesAccept = this.accept ? this.accept.includes(file.type) : true
        const flag = this.beforeUpload(file);

        // 文件格式校验
        if (!includesAccept) {
          this.$message("上传文件格式不对!", "error");
          return false
        }

        // 文件大小校验
        const limit = file.size / 1024 / 1024 < this.size;
        if (!limit) {
          this.$message.error(`上传的文件大小不能超过 ${this.size}MB!`);
        }

        // 多张图片上传
        if (this.limit > 1 && flag) {
          this.handleMoreImg(file)
          return false
        }
        if (includesAccept && flag) this.showProgress = true;
        return includesAccept && flag;
      },
      // el-upload 上传进度触发
      handleProgress (event, file, fileList) {
        this.imgFile = file;
        this.uploadPercent = parseInt(file.percentage.toFixed(0), 10);
      },
      // el-upload 上传成功触发
      handleSuccess (res, file, fileList) {
        this.showProgress = false;
        if (res.code !== 0) {
          this.$message(res.message, "error");
          return;
        }
        this.imageUrl = res.data.url;
      },
      // 多张图片的上传，图片会被压缩
      async handleMoreImg(file) {
        const dataURL = await fileToDataURL(file);
        const { type, name } = file;
        const img = new Image();
        img.src = dataURL;
        // 拿到图片的宽度
        const { width } = await this.handleImageOnLoad(img);
        // 如果 > 1080p
        if (width > IMAGE_WIDTH) {
          // 压缩图片
          const info = await compress(file, {
            quality: 0.8,
            type,
            width: IMAGE_WIDTH
          })
          // blob转file
          file = new File([info], name, { type, lastModified: Date.now() });
        }
        this.customUpload(file)
      },
      // 上传失败的钩子
      handleError () {
        this.showProgress = false;
        this.uploadPercent = 0;
      },
      // 关闭上传进度前触发: 停止上传
      handleDialogClose () {
        console.log('handleDialogClose')
        // to do: 中止上传
        // this.$refs.elUpload.abort(this.imgFile);
      },
      // 关闭上传进度后触发: 重置上传进度
      handleDialogClosed () {
        this.uploadPercent = 0;
      },
      // 自定义方式上传
      customUpload (file) {
        // 多个文件上传
        if (this.fileList.length >= this.limit && this.limit !== 1) {
          this.$message(`最多上传${this.limit}个文件!`, "error");
          return false
        }

        const fileType = {
          name: file.name,
          type: file.type,
          url: ''
        }
        this.showProgress = true;
        let data = new FormData()
        data.append('file', file)
        data.append('corpid', 'ww9c5530210a0d5116')
        axios({
          method: 'post',
          url: this.action,
          headers: this.headers,
          data
        }).then(res => {
          this.showProgress = false;
          if (res.data.code !== 0) {
            this.$message(res.message, "error");
            return;
          }

          fileType.url = res.data.data.url
          // 多个图片上传
          if (this.limit > 1 && this.model === 'image') {
            this.imageUrlList.push(fileType)
            return
          }

          // 单个文件上传
          if (this.model === 'file' && this.limit === 1) {
            this.fileList = []
            this.fileList.push(fileType)
            return
          }

          // 多个文件上传
          if (this.model === 'file') {
            this.fileList.push(fileType)
            return
          }
          this.imageUrl = res.data.data.url;
        }).finally(() => {
          this.showProgress = false;
        })
      },
      /**
       * 处理图片下载拿到图片的宽高
       * @param {Element} img 图片元素信息
       * @param {Promise} resolve图片的宽和高
       */
      handleImageOnLoad (img) {
        return new Promise((resolve, reject) => {
          img.onload = () => {
            resolve({
              width: img.width,
              height: img.height
            });
          }
        });
      },
      // 文件上传
      onFileChange (event) {
        const file = event.target.files[0]
        if (!file) return false
        event.target.value = ''
        if (this.handleBeforeUpload(file)) {
          this.customUpload(file)
        }
      },
      onFileDragEnter (e) {
        e.preventDefault()
        this.dragEnter = true
      },
      onFileDragLeave (e) {
        this.dragEnter = false
      },
      onFileDragover (e) {
        e.preventDefault()
      },
      // 文件拖拽进去触发
      onFileDrag (e) {
        e.preventDefault()
        const file = e.dataTransfer.files[0]
        this.dragEnter = false
        if (!file) return
        if (this.handleBeforeUpload(file)) {
          this.customUpload(file)
        }
      }
    }
  }
</script>