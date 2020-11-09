<template>
    <div>
      <div class="tab">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
        <div class="center">
            <slot name='center'>
            <div class="middle" v-for="(item,index) in middleList" :key="index">
                {{item}}
            </div>
        </slot>
        </div>
        
      </div> 
    </div>
</template>
<script>
export default {
    props:{
        middleList:{
            type:Array,
            default:['','','','']
        },
    }
}
</script>
<style lang="scss" scoped>
.tab{
    width: 100%;
    height: 200px;
    line-height: 200px;
    font-size: 80px;
    display: flex;
    text-align: center;
    vertical-align: middle;
    .left{
        float: left;
        width: 200px;
        height: 100%;
        margin: 0 20px;
    }
    .right{
        float: right;
        width: 200px;
        height: 100%;
    }
    .center{
        display: flex;
        height: 100%;
     .middle{
        
        margin: 0 20px;
     }
    }
    
}
</style>