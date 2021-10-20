<template>
  <svg :class="svgClass" v-bind="$attrs" :style="{color: color}">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
import { defineComponent, computed } from 'vue'
  export default defineComponent({
    name:'SvgIcon',
    props:{
      iconClass:{
        type:String,
        required:true
      },
      className:{
        type:String,
        default:""
      },
      color: {
        type: String,
        default: '#333'
      }
    },
    setup(props) {
      const iconName = computed(() => `#icon-${props.iconClass}`)
      const svgClass = computed(() => {
        if(props.className) {
          return `svg-icon${props.className}`
        }
        return `svg-icon`
      })
      return { iconName, svgClass }
    },
  })
</script>

<style lang="less" scoped>
.svg-icon{
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>