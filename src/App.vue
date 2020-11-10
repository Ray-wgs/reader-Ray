<template>
  <div id="app">
    <router-view/>
    <ray-footer v-if="$route.path !== '/login'"/>
  </div>
</template>
<script>
import footer from '@/components/footer.vue'
import {mapState} from 'vuex'
export default {
 components:{
   rayFooter:footer
 },
 computed:{
       ...mapState(['tab'])
   },
   watch:{
       tab(path){
            this.$router.push(path)   
       }
   }
}
</script>
<style lang="scss">
body{
  background-color: rgb(238, 237, 237);
}
//小说移动端设置
//style="word-wrap: break-word; white-space: pre-wrap;"
</style>
