<template>
    <div>
        <div class="books_header">
            <div class="books_tab">
              <ray-header :middleList='list'>
                <template v-slot:left>
                    推荐
                </template>
                <template v-slot:right>
                    <div class="el-icon-search">

                    </div>
                </template>
              </ray-header>
            </div>
        </div>
        <div class="book">
            {{book}}
        </div>
    </div>
</template>
<script>
import header from '@/components/header.vue'
import {getBooksData} from './getDatas.js'
export default {
    data() {
        return {
            list:['男频','女频','玄幻','灵异'],
            book:''
        }
    },
   components:{
       rayHeader:header
   },
   mounted(){
       getBooksData(1)
       .then(res=>{
           this.book = res.data
       })
   },
   
}
</script>
<style lang="scss" scoped>
@import './index.scss'
</style>