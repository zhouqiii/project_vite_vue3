<template>
  <s-header></s-header>
  <img alt="Vue logo" src="../assets/logo.png" />
  <HelloWorld 
    msg="Hello Vue 3.0 + Vite" 
    class="attrsClass" 
    :attr='list' 
    style="border:1px solid red"
    @getName="getEmits"
  />
  <div class="home"></div>
  <van-button color="#7232dd">单色按钮</van-button>
</template>

<script>
import { defineAsyncComponent, defineComponent, nextTick } from 'vue'

const HelloWorld = defineAsyncComponent({
  loader: () => import('../components/HelloWorld.vue')
})

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return{
      list:[{name:'张三'},{name:'李四'}]
    }
  },
  methods: {
    getEmits(val) {
      alert(val)
    }
  },
  mounted() {
      nextTick(() => {
          console.log(11)
      })
  }
})
</script>
<style lang="less" scoped>
.home{
  height: 100px;
  width: 100px;
  background: @Cred;
}
</style>
