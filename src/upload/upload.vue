<template>
  <div class="tm-upload">
    <el-upload
      v-if="!isCut"
      ref="elUpload"
      class="upload-cover-image"
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
        <div class="image-single" v-if="model === 'image' && single">
          <div
            class="image-single-uplaod"
            :class="{'image-single-empty': !imageUrl, 'image-single-solid': imageUrl}"
            >
            <img
              v-if="imageUrl"
              :src="imageUrl"
              alt
            />
            <div v-else>
              <i class="iconfont icon-zhaopian"></i>
              <p>上传图片</p>
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
              :class="{'image-single-empty': !imageUrl, 'image-single-solid': imageUrl}"
              >
              <img
                v-if="imageUrl"
                :src="imageUrl"
                alt
              />
              <div v-else>
                <i class="iconfont icon-zhaopian"></i>
                <p>上传图片</p>
              </div>
            </div>
          </div>
        </template>
    </ImgCutter>
    <div v-if="isPreview" class="preview-button" @click="handlePreview(imageUrl)">预览</div>
    <!-- 上传进度 -->
    <el-dialog
      title="上传"
      :visible.sync="showProgress"
      width="30%"
      @close="handleDialogClose"
      @closed="handleDialogClosed"
    >
      <div class="progress-info">
        <el-progress :percentage="imgUploadPercent"></el-progress>
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
  import ImgCutter from 'vue-img-cutter';
  import { Upload, Progress, Dialog, Message } from 'element-ui';

  Vue.use(Upload);
  Vue.use(Progress);
  Vue.use(Dialog);
  Vue.use(Message);
  Vue.prototype.$message = Message;

  export default {
    name: "tmUpload",
    props: {
      // 上传模式: file(文件上传)、image(图片上传)
      model: {
        type: String,
        default: "file",
      },
      // 是否单个上传
      single: {
        type: Boolean,
        default: true
      },
      // 是否开启预览
      isPreview: {
        type: Boolean,
        default: false
      },
      // 上传的文件大小: 单位MB
      size: {
        type: Number,
        default: 5
      },
      // 上传前限制条件
      beforeUpload: {
        type: Function,
        default: () => true
      },
      isCut: {
        type: Boolean,
        default: false
      },
      rate: {
        type: String,
        default: '4:3'
      },
      data: {
        type: Object,
        default: () => (
          {
            corpid: 'ww9c5530210a0d5116'
          }
        )
      },
      headers: {
        type: Object,
        default: () => (
          {
            Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDY4MDc4NDksInBheWxvYWQiOiJ7XCJjb3JwaWRcIjpcInd3OWM1NTMwMjEwYTBkNTExNlwiLFwiaWRcIjozODkzOTQxNjEzNTI3NjgsXCJ1c2VySWRcIjpcImFkbWluX3RtcWYwMTA5XCIsXCJpc0FkbWluXCI6MSxcImRlcGFydG1lbnRJZHNcIjpudWxsLFwibWFuYWdlRGVwdHNcIjpudWxsLFwiZGV2aWNlXCI6XCJ3ZWJcIixcIm5hbWVcIjpcImFkbWluXCIsXCJ2YWd1ZVwiOjAsXCJfbGVhZGVyXCI6dHJ1ZX0iLCJleHAiOjE2NDY5ODA2NDl9.lZGczX-PwbpfJmPmR9MHhh_mG0WbKaJHPHKcSuPCyvs'
          }
        )
      },
      action: {
        type: String,
        default: '/resourceServer/file/commonUpload'
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
        imgFile: {},
        showProgress: false,
        imgUploadPercent: 0,
        accept: "",
        // 是否显示预览弹框
        previewShow: false
      }
    },
    // computed: {
    //   checkModeIsSingle () {
    //     return this.mode === "single";
    //   },
    //   setSingleTipsStyle () {
    //     let style = {};
    //     if (!this.imageUrl) {
    //       style = {
    //         opacity: 1,
    //         zIndex: 1
    //       };
    //     }
    //     return style;
    //   }
    // },
    watch: {
      model: {
        handler (newValue) {
          // 上传图片
          if (newValue === 'image') {
            this.accept = 'image/png, image/jpg, image/jpeg'
          }
          console.log('newValue', newValue)
        },
        immediate: true
      }
      // rate: {
      //   deep: true,
      //   handler (newValue) {
      //     this.imageRate = newValue;
      //   },
      //   immediate: true
      // }
    },
    methods: {
      handleCutDown (file) {
        const imgGs = file.dataURL.split(";")[0].split("/")[1];
        const newFile = this.$tool.dataURLtoBlob(file.dataURL, "裁剪图片." + imgGs);
        const formData = new FormData();
        formData.append("corpid", this.$store.getters.corpid);
        formData.append("file", newFile);
        this.$axios.post(this.$serve.commonUpload, formData).then(res => {
          const { code, message, data } = res.data;
          if (code) this.$message(message, 'error');
          else {
            this.imageUrl = data.url;
            // if (this.checkModeIsSingle) this.$emit("input", this.imageUrl);
            // else this.$emit("change", this.imageUrl);
            // this.$emit('rate-change', this.rate || this.handleRate(rate));
          }
        });
      },
      // 预览接口, 暴露给外部
      handlePreview (url) {
        if (!this.isPreview) return this.$message("暂不支持预览!", "error");
        if (!url) return this.$message("请先上传图片!", "error");
        this.previewUrl = url
        this.previewShow = true
      },
      handleTypeError () {
        this.$message('该文件格式不支持！', 'error');
      },
      // 上传前的钩子函数: 做文件类型校验
      handleBeforeUpload (file) {
        console.log('handleBeforeUpload')
        // 没有文件类型限制
        if (!this.accept) {
          this.showProgress = true;
          return true
        }
        const includesAccept = this.accept.includes(file.type);
        const flag = this.beforeUpload(file);

        // 文件格式校验
        if (!includesAccept) {
          this.$message("上传文件格式不对!", "error");
        }

        // 文件大小校验
        const limit = file.size / 1024 / 1024 < this.size;
        if (!limit) {
          this.$message.error(`上传的文件大小不能超过 ${this.size}MB!`);
        }
        if (includesAccept && flag) this.showProgress = true;
        return includesAccept && flag;
      },
      handleProgress (event, file, fileList) {
        console.log('handleProgress')
        this.imgFile = file;
        this.imgUploadPercent = parseInt(file.percentage.toFixed(0), 10);
      },
      handleSuccess (res, file, fileList) {
        this.showProgress = false;
        if (res.code !== 0) {
          this.$message(res.message, "error");
          return;
        }
        this.imageUrl = res.data.url;
      },
      // 上传失败的钩子
      handleError () {
        console.log('handleError')
        this.showProgress = false;
      },
      handleDialogClose () {
        console.log('handleDialogClose')
        // this.$refs.elUpload.abort(this.imgFile);
      },
      handleDialogClosed () {
        console.log('handleDialogClosed')
        // this.imgUploadPercent = 0;
      },
      // handleRate (rate) {
      //   console.log('handleRate')
      //   const [cWidth, cHeight] = rate.split(':');
      //   const divisor = this.commonDivisor(cWidth, cHeight);
      //   return `${cWidth / divisor}:${cHeight / divisor}`;
      // },
      // commonDivisor (num1, num2) {
      //   console.log('commonDivisor')
      //   if ((num1 - num2) < 0) {
      //     [num1, num2] = [num2, num1];
      //   }
      //   while (num2) {
      //     [num1, num2] = [num2, num1 % num2];
      //   }
      //   return num1;
      // }
    }
  }
</script>