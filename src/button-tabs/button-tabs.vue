<template>
  <div class="tm-button-tabs">
    <div class="tm-button-tabs__step">
      <div class="tm-button-tabs__step-prve" @click="handlePrev">
        上一步
      </div>
      <div class="tm-button-tabs__step-next" @click="handleNext">
        下一步
      </div>
    </div>
    <div class="tm-button-tabs__module">

    </div>
    <div class="tm-button-tabs__date">

    </div>
    <div class="tm-button-tabs__certainty">
      <div class="tm-button-tabs__certainty-cancel" @click="handleCancel">取消</div>
      <div class="tm-button-tabs__certainty-confirm" @click="handleConfirm">确定</div>
    </div>
    <div class="tm-button-tabs__save">

    </div>
  </div>
</template>

<script>
  export default {
    name: "TmButtonTabs",
    methods: {
      handlePrev(){
        this.$emit('changeType', 'prev')
      },
      handleNext(){
        this.$emit('changeType', 'next')
      }
    }
  }
</script>