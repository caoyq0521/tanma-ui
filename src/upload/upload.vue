<template>
  <div class="tm-upload">
    <!-- 图片上传 -->
    <div v-if="model === 'image'" class="image-container">
      <!-- <transition-group v-if="imageUrlList.length && showList" tag="div" name="list" class="image-container-left">
      </transition-group> -->
      <template v-if="showList">
        <div class="image-container-left">
          <div
            v-for="(item, index) in imageUrlList"
            :key="item.name+index"
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
              <i class="tm-icon-fangda fangda-cls" @click="handlePreview(item.url)"></i>
              <i class="tm-icon-lajitong0" @click="removeImg(index)"></i>
            </div>
          </div>
        </div>
      </template>
      <el-upload
        v-if="!isCut&&showUpload"
        ref="tmUpload"
        :headers="headers"
        :action="action"
        :accept="uploadAccept"
        :multiple="multiple"
        :show-file-list="false"
        :data="data"
        :before-upload="handleBeforeUpload"
        :on-progress="handleProgress"
        :on-success="handleSuccess"
        :on-error="handleError"
      >
        <template v-if="isCustomUpload">
          <slot name="custom-upload" />
        </template>
        <div v-else>
          <!-- 图片单张上传 图片不剪切 -->
          <div class="image-single">
            <div
              class="image-single-uplaod"
              @mouseenter="isHover = true"
              @mouseleave="isHover = false"
              :class="{'image-single-empty': !imageUrl, 'image-single-solid': imageUrl, 'image-hover': hover && imageUrl}"
            >
              <img
                v-if="imageUrl"
                :src="imageUrl"
                alt
              />
              <div class="image-single-uplaod_title" v-show="(hover || !imageUrl) && (isHover || !imageUrl)">
                <i class="tm-icon-zhaopian"></i>
                <p>{{ imgTitle }}</p>
              </div>
            </div>
          </div>
        </div>
      </el-upload>
      <ImgCutter
          v-if="isCut"
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
                :class="{'image-single-empty': !imageUrl, 'image-single-solid': imageUrl, 'image-hover': hover && imageUrl}"
                >
                <img
                  v-if="imageUrl"
                  :src="imageUrl"
                  alt
                />
                <div class="image-single-uplaod_title" v-show="(hover || !imageUrl) && (isHover || !imageUrl)">
                  <i class="tm-icon-zhaopian"></i>
                  <p>{{ imgTitle }}</p>
                </div>
              </div>
            </div>
          </template>
      </ImgCutter>
    </div>
    <!-- 文件上传 -->
    <div v-else class="local-upload-drag-component">
      <div
        ref="tm-upload-dragger"
        :class="['drag-content', { 'drag-actived': dragEnter }]"
      >
        <div class="file-list" v-if="fileList.length && showList">
          <div
            class="file-item"
            v-for="(file, index) in fileList"
            :key="index"
            @mouseenter="hoverIndex = index"
            @mouseleave="hoverIndex = ''"
            @click="previewFile(file)"
          >
            <file-type :type="file.name" />
            <span class="file-name">
              {{ file.name }}
            </span>
            <i v-if="limit > 1 && hoverIndex === index" class="tm-icon-lajitong0 close-file" @click="removeFile(index)"></i>
          </div>
        </div>
        <div class="drag-text">
          <div class="drag-icon">
            <i class="tm-icon-wenjian3"></i>
          </div>
          将{{ fileTitle }}文件拖到此处，或
          <!-- 单个文件上传 -->
          <label v-if="fileList.length && limit === 1" :for="id" class="download-btn">点击重新上传</label>
          <!-- 多个文件上传 -->
          <label v-else :for="id" class="download-btn">点击上传</label>
        </div>
      </div>

      <input
        @change="onFileChange"
        v-if="multiple"
        multiple="multiple"
        v-show="false"
        name="file"
        type="file"
        :id="id"
        :accept="uploadAccept"
      />
      <input
        v-else
        @change="onFileChange"
        v-show="false"
        name="file"
        type="file"
        :id="id"
        :accept="uploadAccept"
      />
    </div>
    <!-- 上传进度 -->
    <tm-dialog
      v-if="showProgress"
      title="上传"
      width="30%"
      append-to-body
      v-model="progressDialog"
      @close="handleDialogClose"
      @closed="handleDialogClosed"
    >
      <div class="progress-info">
        <el-progress :percentage="uploadPercent"></el-progress>
      </div>
    </tm-dialog>
    <!-- 预览 -->
    <tm-dialog
      footer-hide
      append-to-body
      v-model="previewShow"
      custom-class="upload-preview-dialog"
    >
      <div class="img-container">
        <img :src="previewUrl" alt="">
      </div>
    </tm-dialog>
  </div>
</template>

<script>
  import Vue from 'vue';
  import ImgCutter from 'vue-img-cutter';
  import fileType from './fileTypeIcon.vue'
  import { Upload, Progress, Message } from 'element-ui';
  import { compress } from 'image-conversion';

  Vue.use(Upload);
  Vue.use(Progress);
  Vue.prototype.$message = Message;
  import { dataURLtoBlob, fileToDataURL } from "../util";
  import { v4 as $uuid } from 'uuid';
  const IMAGE_WIDTH = 1080;
  let cancel;

  export default {
    name: "tmUpload",
    props: {
      // 上传的文件类型
      accept: {
        type: String,
        default: ""
      },
      // 上传地址
      action: {
        type: String,
        default: ''
      },
      // 上传前限制条件
      beforeUpload: {
        type: Function,
        default: () => true
      },
      // 删除前钩子
      beforeRemove: {
        type: Function,
        default: () => true
      },
      // 自定义上传
      isCustomUpload: {
        type: Boolean,
        default: false
      },
      // 上传时附带的额外参数
      data: {
        type: Object,
        default: () => ({})
      },
      // 设置的请求头
      headers: {
        type: Object,
        default: () => ({})
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
      // 开启多选
      multiple: {
        type: Boolean,
        default: false
      },
      // 单张图片开启hover
      hover: {
        type: Boolean,
        default: false
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
      // 是否显示上传列表
      showList: {
        type: Boolean,
        default: true
      },
      // 是否显示上传进度
      showProgress: {
        type: Boolean,
        default: true
      },
      // 上传的文件大小: 单位MB
      size: {
        type: Number,
        default: 50
      },
      // 回显的文件列表
      uploadList: {
        type: Array,
        default: () => []
      }
    },
    components: {
      ImgCutter,
      fileType
    },
    data () {
      return {
        imageUrl: '',
        // 预览的地址
        previewUrl: '',
        // 多个图片上传
        imageUrlList: [],
        progressDialog: false,
        // 上传进度
        uploadPercent: 0,
        uploadAccept: "",
        // 是否显示预览弹框
        previewShow: false,
        // 文件上传列表
        fileList: [],
        dragEnter: false,
        // 是否hover
        isHover: false,
        target: '',
        id: 'fileInput',
        hoverIndex: '',
        // 显示上传
        showUpload: true
      }
    },
    watch: {
      model: {
        handler (newValue) {
          this.uploadAccept = this.accept
          // 上传图片
          if (newValue === 'image') {
            this.uploadAccept = 'image/png, image/jpg, image/jpeg'
          }
        },
        immediate: true
      },
      uploadList: {
        handler (newValue) {
          // 单张图片
          if (this.limit === 1 && this.model === 'image') {
            if (!this.showList) return
            this.imageUrl = newValue[0]?.url || ""
          }

          // 多张图片
          if (this.limit !== 1 && this.model === 'image') {
            this.imageUrlList = [...newValue]
          }

          // 文件上传
          if (this.model === 'file') {
            this.fileList = [...newValue]
          }

          // 超过数量限制隐藏上传
          this.showUpload = this.limit > 1 ? newValue.length < this.limit : true;
        },
        immediate: true,
        deep: true
      },
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
        this.$emit('preview-file', file)
      },
      // 上传成功后触发
      onSuccess (files) {
        this.$emit('success', files)
      },
      imageHover(item, index) {
        this.isHover = true
        this.target = index
      },
      unImageHover() {
        this.isHover = false
        this.target = ''
      },
      // 移除多个图片
      removeImg (index) {
        this.$emit('remove', this.imageUrlList[index])
      },
      // 移除多个文件
      removeFile(index) {
        this.$emit('remove', this.fileList[index])
      },
      // 剪切图片的上传
      handleCutDown (file) {
        const imgGs = file.dataURL.split(";")[0].split("/")[1];
        const newFile = dataURLtoBlob(file.dataURL, "裁剪图片." + imgGs);
        this.customUpload(newFile)
      },
      // 预览接口, 暴露给外部
      handlePreview (url) {
        if (!url) return this.$message({ message: '请先上传图片!', type: 'error' });
        this.previewUrl = url
        this.previewShow = true
      },
      // 剪切格式错误触发
      handleTypeError () {
        this.$message({ message: '该文件格式不支持!', type: 'error' });
      },
      // 上传前的钩子函数: 做文件类型校验
      handleBeforeUpload (file) {
        // 多张图片上传
        if (this.model === 'image' && this.imageUrlList.length >= this.limit) {
          this.$message({ message: `最多上传${this.limit}张图片!`, type: 'error' });
          return false
        }
        const includesAccept = this.uploadAccept ? this.uploadAccept.includes(file.type) : true

        // 文件格式校验
        if (!includesAccept) {
          this.$message({ message: "上传文件格式不对!", type: 'error' });
          return false
        }

        // 文件大小校验
        const limit = file.size / 1024 / 1024 < this.size;
        if (!limit) {
          this.$message({ message: `上传的文件大小不能超过 ${this.size}MB!`, type: 'error' });
          return false
        }

        // 多个文件上传
        if (this.fileList.length >= this.limit && this.limit !== 1) {
          this.$message({ message: `最多上传${this.limit}个文件!`, type: 'error' });
          return false
        }

        const result = this.beforeUpload(file)
        // Promise对象
        if (result?.then) {
          if (this.model === 'image' && this.limit > 1) {
            result.then(res => {
              this.handleMoreImg(file)
            })
            // 阻止el-upload上传
            return false
          }

          result.then(res => {
            this.progressDialog = true;
          })

          return result
        } else { // 正常布尔值
          if (result) {
            if (this.model === 'image' && this.limit > 1) {
              this.handleMoreImg(file)
              // 阻止el-upload上传
              return false
            }

            this.progressDialog = true;
            return true
          }
          return false
        }
      },
      // el-upload 上传进度触发
      handleProgress (event, file, fileList) {
        this.uploadPercent = parseInt(file.percentage.toFixed(0), 10);

        const progress = {
          percentage: file.percentage,
          size: file.size
        }
        this.$emit('progress', progress)
      },
      // el-upload 上传成功触发
      handleSuccess (res, file, fileList) {
        this.progressDialog = false;
        if (res.code !== 0) {
          this.$emit('error', res)
          return;
        }

        if (this.showList) {
          this.imageUrl = res.data.url;
        }
        const fileType = {
          name: file.name,
          type: file.raw.type,
          url: this.imageUrl
        }
        this.onSuccess([fileType])
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
        this.progressDialog = false;
        this.uploadPercent = 0;
      },
      // 关闭上传进度前触发: 停止上传
      handleDialogClose () {
        if (this.$refs.tmUpload) {
          this.$refs.tmUpload.abort()
        }
        if (cancel) {
          cancel.abort()
        }
      },
      // 关闭上传进度后触发: 重置上传进度
      handleDialogClosed () {
        this.uploadPercent = 0;
      },
      // 自定义方式上传
      customUpload (file) {
        // 多个文件上传
        if (this.fileList.length >= this.limit && this.limit !== 1) {
          this.$message({ message: `最多上传${this.limit}个文件!`, type: 'error' });
          return false
        }

        const fileType = {
          name: file.name,
          type: file.type,
          url: ''
        }

        this.progressDialog = true;
        let data = new FormData()
        data.append('file', file)

        for(let key in this.data) {
          data.append(key, this.data[key])
        }

        // 上传请求
        const xhr = new XMLHttpRequest()
        cancel = xhr
        xhr.open('post', this.action, true)
        for(let key in this.headers) {
          xhr.setRequestHeader(key, this.headers[key])
        }

        // 上传文件进度
        xhr.upload.onprogress = e => {
          this.uploadPercent = parseInt((e.loaded / e.total) * 100, 10)
          
          const progress = {
            percentage: (e.loaded / e.total) * 100,
            size: e.total
          }
          this.$emit('progress', progress)
        }

        xhr.send(data)

        // 请求成功
        xhr.onload = res => {
          const result = JSON.parse(res.target.response);
          if (result.code !== 0) {
            this.$emit('error', res)
            return;
          }

          fileType.url = result.data.url;
          // 多个图片上传
          if (this.limit > 1 && this.model === 'image') {
            this.imageUrlList.push(fileType);
            this.onSuccess([...this.imageUrlList]);
            return
          }

          // 单个文件上传
          if (this.model === 'file' && this.limit === 1) {
            this.fileList = [];
            this.fileList.push(fileType);
            this.onSuccess([fileType]);
            return
          }

          // 多个文件上传
          if (this.model === 'file') {
            this.fileList.push(fileType);
            this.onSuccess([...this.fileList]);
            return
          }
          if (this.showList) {
            this.imageUrl = res.data.url;
          }
        }

        // 请求结束
        xhr.onloadend = e => {
          this.progressDialog = false;
        }
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
        const fileList = event.target.files || []
        for (let i = 0; i < fileList.length; i++) {
          const file = fileList[i]
          if (!file) return false
          event.target.value = ''
          const beforeRes = this.handleBeforeUpload(file)
          if (beforeRes?.then) {
            beforeRes.then(res => {
              this.customUpload(file)
            })
          } else {
            if (beforeRes) {
              this.customUpload(file)
            }
          }
        }
        // const file = event.target.files[0]
        // if (!file) return false
        // event.target.value = ''
        // const beforeRes = this.handleBeforeUpload(file)
        // if (beforeRes?.then) {
        //   beforeRes.then(res => {
        //     this.customUpload(file)
        //   })
        // } else {
        //   if (beforeRes) {
        //     this.customUpload(file)
        //   }
        // }
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