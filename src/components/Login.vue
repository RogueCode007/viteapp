<script>
import { ref } from 'vue'
export default {
    setup(){
        const myName = ref('')
        const myPassword = ref('')
        let showPassword = ref(false)
        const password = ref()
        const revealPassword = ()=>{
            showPassword.value = true
            password.value.type = 'text'
        }
        const hidePassword = ()=>{
            showPassword.value = false
            password.value.type = 'password'
        }
        return {
            myName, myPassword, showPassword, password, revealPassword, hidePassword
        }
    },
    methods:{
        login(){
            console.log(this.myName)
            this.$router.push('/app')
        }
    }
}
</script>

<template>
    <div class="px-4 mt-8 shadow-lg rounded w-4/5 mx-auto py-8 md:py-16 md:px-12">
        <form @submit.prevent="login" class="">
            <div>
                <input type="text" v-model="myName" placeholder="Email" class="border block focus:ring-blue-100 px-2 py-1 w-full rounded">
            </div>
            <div class="relative">
                <input type="password" v-model="myPassword" ref="password" placeholder="Password" class="border block mt-4 focus:ring-blue-200 px-2 pr-10 py-1 w-full rounded">
                <button @click="revealPassword" type="button" v-if="!showPassword" class="absolute text-xs text-gray-500">SHOW</button>
                <button @click="hidePassword" type="button" v-else class="absolute text-xs text-gray-500">HIDE</button>
            </div>
            <button class="px-4 py-1 text-sm focus:outline-none rounded mt-4 bg-emerald-300 text-white">Login</button>
        </form>
    </div>
</template>

<style scoped>
a {
  color: #42b983;
}
input + button{
    top: 50%;
    transform: translateY(-50%);
    right: 5px
}
</style>
