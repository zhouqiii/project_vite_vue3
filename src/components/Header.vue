<template>
  <div>
    <van-nav-bar 
      :title="title"
      safe-area-inset-top
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #left>
        <div class="left_back"></div>
        <slot name="header-left"></slot>
      </template>
      <template #right>
        <slot name="header-right"></slot>
      </template>
    </van-nav-bar>
  </div>
</template>
<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
  props:{
    title: {
      type: String,
      default: '首页'
    },
    path: {
      type: String,
      default: '1'
    }
  },
  emits: ['rightCallBack'],
  setup(props, cxt) {
    const router = useRouter()
    const onClickLeft = () => {
      if ( props.path === '1' ) {
        router.go(-1)
      } else if ( props.path === '2' ) {
        console.log('这可能需要与客户端交互返回')
      }
      else {
        router.push({ path: props.path })
      }
    }
    const onClickRight = () => {
      cxt.emit('rightCallBack')
    }
    return {
      onClickLeft,
      onClickRight
    }
  },
}
</script>
<style lang="less" scoped>
.left_back {
  width: 22px;
  height: 22px;
  .bg-image('icon_back');
  display: inline-block;
  background-size: 22px 22px;
  background-repeat: no-repeat;
}
</style>