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

</style>
