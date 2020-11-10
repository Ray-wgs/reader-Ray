<template>
    <div>
        <div class="rmd">
            <div class="rmd_title">
                {{title}}
            </div>
            <div class="rmd_contain">
                <div class="book_box" v-for="(item,index) in list" :key="index">
                    <img :src="item.url" alt="" class="book_img">
                    <div class="book_title">
                        {{item.title}}
                    </div>
                </div>
                <div class="block">
                    {{book}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type:String
        },
        list:{
            type:Array,
            default:[{img:'http://192.168.0.223:8000/img/%E8%8B%8D%E9%9D%92%E4%B9%8B%E5%89%91.jpg',title:'苍青之剑'},{img:'123',title:'123'},{img:'123',title:'123'},{img:'123',title:'123'},{img:'123',title:'123'}]
        }
    },
    data() {
        return {
            book:'',
        }
    },
    mounted(){
        
    }
}
</script>
<style lang="scss" scoped>
.rmd{
    width: 95%;
    height: 1500px;
    margin:  0 auto;
    border-radius: 50px;
    background-color: #fff;
    .rmd_title{
       padding:20px 20px;
       font-size: 80px;
       font-weight: 600;
    }
    .rmd_contain{
        display: flex;
        flex-wrap: wrap;
        .book_box{
            width: 400px;
            height: 400px;
            margin:  0 60px;
            background-color: #ccc;
            margin-bottom: 20px;
            .book_img{
                width: 200px;
                height: 300px;
                margin: 0 100px;
            }
            .book_title{
                font-size: 40px;
                -webkit-line-clamp: 1;
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                white-space: normal;
                text-align: center;
            }
        }
        .block{
            flex-grow: 1;
        }
    }
}
</style>