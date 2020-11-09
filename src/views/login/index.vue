<template>
    <div class="body">
        <div class="c">
            <div class="animation" >
            <div class="img"  >
               
            </div>
        </div>
        </div>
        <div class="contain">
          <div class="user">
            <span class="el-icon-user-solid"></span> 
            <input type="text" v-model="username" placeholder="请输入用户名">
            <i>x</i>
          </div>
          <div class="psd">
            <span class="el-icon-key"></span>
             <input type="password" v-model="password" placeholder="请输入密码">
          </div>
          <button @click="submit()">提交</button>
        </div>
    </div>
</template>
<script>
import {getAxios} from '@/api'
import $ from 'jquery'
export default {
    data() {
        return {
            username:'',
            password:'',
        }
    },
    methods: {
        submit(){
            getAxios('http://localhost:5200/login',{username:this.username,password:this.password})
            .then(res=>{
               if(res.data != 'err'){
                   window.sessionStorage.setItem('user',this.username)
                   this.$router.push('/')
               }else{
                   const h = this.$createElement;
                   this.$message({
                    message: h('p', null, [
                        h('span', null, '账号或密码错误'),
                        h('p', { style: 'color: red' }, '请联系管理员Ray')
                    ])
                    });
               }
            })
        },
    },
}
</script>
<style lang="scss" scoped>
@import './login.scss';
</style>