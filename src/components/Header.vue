<template>
  <div>
    <van-nav-bar 
      :title="title"
      safe-area-inset-top
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #left>
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
    type: {
      type: String,
      default: '1'
    }
  },
  emits: ['rightCallBack'],
  setup(props,cxt) {
    const router = useRouter()
    const onClickLeft = () => {
      if(!props.type) {
        router.go(-1)
      }
      else{
        console.log('这可能需要与客户端交互')
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