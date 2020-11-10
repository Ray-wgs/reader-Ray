<template>
    <div>
        <div class="books_header">
            <div class="books_tab">
              <ray-header :middleList='list' @changeTab="handleTab">
                <!-- <template v-slot:left>
                    推荐
                </template> -->
                <template v-slot:right>
                    <div class="el-icon-search">

                    </div>
                </template>
              </ray-header>
            </div>
        </div>
        <div class="book">
            <rmd title="推荐" :list="bookImg"/>
        </div>
        <div style="word-wrap: break-word; white-space: pre-wrap;">
            {{book}}
        </div>
    </div>
</template>
<script>
import header from '@/components/header.vue'
import recommend from './components/recommend.vue'
import {getBooksData,getImgUrl} from './getDatas.js'
export default {
    data() {
        return {
            list:['推荐','男频','女频','玄幻','灵异'],
            book:'',
            bookImg:[]
        }
    },
   components:{
       rayHeader:header,
       rmd:recommend
   },
   mounted(){
       getBooksData(1)
       .then(res=>{
           console.log(res);
       }),
       this.handleImg()
   },
   methods: {
       handleTab(item){
           console.log(item);
       },
        handleImg(){
            for (let index = 0; index < 9; index++) {
                getImgUrl(index)
                .then(res=>{
                    this.bookImg.push(res.data)
                })
            }
        }
   },
   
}
</script>
<style lang="scss" scoped>
@import './index.scss'
</style>