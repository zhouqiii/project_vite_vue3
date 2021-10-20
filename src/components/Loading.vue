<template>
    <div class="loading">
        <div class="loading_bg">
            <div class="loading_box">
                <img src="../assets/icons/icon_loading.png" alt="" class="loading_img" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    setup() {
        
    },
}
</script>
<style lang="less" scoped>
.loading{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    .loading_bg{
        width: 100%;
        height: 100%;
        display:flex;
        justify-content: center;
        //  background: rgba(0,0,0,.1);
        align-items: center;
        .loading_box{
          width: 36px;
          height: 36px;
          border-radius: 2px;
          background: rgba(0,0,0,.1);
          display: flex;
          align-items: center;
          img.loading_img{
            width: 18px;
            height: 18px;
            margin: auto;
            -webkit-animation: loading 2s steps(9,end) infinite;
            -moz-animation: loading 2s steps(9,end) infinite;
            -o-animation: loading 2s steps(9,end) infinite;
            animation: loading 2s steps(9,end) infinite;
          }
        }
    }
}
@keyframes loading {
    0%{
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
    }
    100%{
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
    }
}
</style>