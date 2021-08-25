<template>
  <s-header path="2" @rightCallBack="rightFunc">
    <template v-slot:header-right>
      <img
        alt="share"
        src="../assets/icons/share.png"
        class="header_right"
      />
    </template>
  </s-header>
  <img alt="Vue logo" src="../assets/logo.png" />
  <HelloWorld 
    msg="Hello Vue 3.0 + Vite" 
    class="attrsClass" 
    :attr='list' 
    style="border:1px solid red"
    @getName="getEmits"
  />
  <div class="home"></div>
  <van-button color="#7232dd" @click="hideLoading">单色按钮</van-button>
</template>

<script>
import { defineAsyncComponent, defineComponent, nextTick } from 'vue'
import install from '../utils/createDom'
import Loading from "../components/Loading.vue";

const HelloWorld = defineAsyncComponent({
  loader: () => import('../components/HelloWorld.vue')
})
let ld = null

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
    },
    rightFunc() {
      ld = install(Loading);
      setTimeout(() => {
        const e = document.getElementsByClassName('custom-root');
        document.body.removeChild(e[0]);
        ld = null
        console.log(ld)
      },5000)
    },
    hideLoading() {
      ld = null
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
.header_right {
  width: 22px;
  height: 22px;
}
</style>
