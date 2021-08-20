<template>
  <h1 v-on:click="emitName">{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <div v-for="(item,index) in list" :key="index" @click="getRef" :ref="setItemRef">
    <span>{{item}}</span>
  </div>
  <input type="text" v-bind="$attrs">
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
    }
  }
}
</script>
