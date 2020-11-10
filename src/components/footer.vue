<template>
    <div>
        <div class="tab">
            <div class="tabBtn" v-for="(item,index) in list" :key="index" @click="handleClick(item,index)" :class="{active:index == activeNum}">
                <div class="box" :class="item.icon">

                </div>
                <div class="name">{{item.name}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
    data() {
        return {
            list:[{name:'首页',path:'/home',icon:'el-icon-s-home'},{name:'分类',path:'/categorize',icon:'el-icon-menu'},{name:'书架',path:'/books',icon:'el-icon-reading'},{name:'我的',path:'/user',icon:'el-icon-user'},],
            activeNum:0
        }
    },
    methods: {
        ...mapMutations(['getTab']),
       handleClick(val,num){
           this.activeNum=num
           this.getTab(val.path)
       }
    },
}
</script>
<style lang="scss" scoped>
.tab{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: space-between;
    border-top:1px solid #ccc;
    .tabBtn{
        width: 12%;
        height: 200px;
        text-align: center;
        margin: 5px 50px;
        display: flex;
        flex-direction: column;
        color: #ccc;
        .box{
            font-size: 140px;
        }
        .name{
            font-size: 20px;
        }
    }
}
.active{
    color: #000!important;
}
</style>