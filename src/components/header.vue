<template>
    <div>
      <div class="tab">
        <div class="center">
            <slot name='center'>
            <div class="middle" v-for="(item,index) in middleList" :key="index" @click ='handleAct(item,index)' :class="{active:index == activeNum}">
                {{item}}
            </div>
        </slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    props:{
        middleList:{
            type:Array,
            default:['','','',''],
        },
    },
    data() {
        return {
            activeNum:0
        }
    },
    methods: {
        handleAct(item,index){
            this.activeNum=index
           this.$emit('changeTab',item)
        }
    },
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
    .right{
        flex:0 0 200px;
        height: 100%;
    }
    .center{
        flex:1;
        display: flex;
        height: 100%;
        overflow: hidden;
        color: #ccc;
        .middle{
            margin: 0 20px;
        }
    }
    
}
.active{
    font-size: 100px;
    color: #000;
    font-weight: 600;
}
</style>