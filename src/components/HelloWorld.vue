<template>
  <h1 v-on:click="emitName">{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <div v-for="(item,index) in list" :key="index" @click="getRef" :ref="setItemRef">
    <span>{{item}}</span>
  </div>
  <input type="text" v-bind="$attrs">
  <button @click="testVuex(1)">测试Vuex</button>
  <div>{{ collectionName }}: {{ readersNumber }} {{ book.title }}</div>
</template>

<script>
import { ref, reactive, toRefs} from 'vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    collectionName: String
  },
  //执行组件实例之前执行setup，所以在setup里无法访问this和data，methods等组件实例创建过后的属性
  setup(props, context) {//// context的Attribute (非响应式对象)，{ attr, slots, emit } 所以可以es6解构setup(props, { attr, slots, emit })
    let { collectionName } = toRefs(props)//props是响应式的，要使用toRefs来解构
    collectionName='hello'
    const readersNumber = ref('vite')//ref或者reactive包裹起来可以让其成为响应式数据，ref包裹的数据需要.value获取到值
    const book = reactive({ title: 'Vue 3 Guide' })
    console.log(collectionName)
    console.log(readersNumber,'readersNumber',readersNumber.value)
    console.log(book)
   
    // 暴露给 template//一旦return就可以使用//在这里把vue在生命周期需要使用的属性或者方法或者数据等暴露出去
    return {
      readersNumber,
      book,
      collectionName
    }
  },
  emits: ['getName'],
  data() {
    return {
      count: 0,
      list: ['1','2','3'],
      listItemRefs: [],
      people: {
        sex: null,
        age: '12'
      }
    }
  },
  methods: {
    setItemRef(el) {
      this.listItemRefs.push(el)
    },
    getRef() {
      console.log(this.listItemRefs,this.listItemRefs[0])
    },
    emitName() {
      this.$emit('getName','小明')
    },
    testVuex(val) {
      //this.$store.state.count += val//state获取状态仓库内的数据
      //console.log(this.$store.state.count)//2

      // this.$store.commit('getCount',10)//用commit提交mutations方法
      //console.log(this.$store.state.count)//11

      this.$store.dispatch('setCount',100)//dispatch与actions配合使用
      console.log(this.$store.state.count)//101
      this.readersNumber='viteChange'
      this.book.title='Vue 3 Guide Change'
      this.collectionName='hello Change'
      // console.log(this.readersNumber,
      // this.book,
      // this.collectionName)
    }
  }
}
</script>
