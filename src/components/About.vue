<script>
import { mapState } from "vuex"
export default {
    computed:{
        ...mapState({
            bus : state => state.selectedBus
        })
    },
    mounted(){
        console.log(this.bus)
    }
}
</script>
<template>
    <div class="px-4">
        <div class="mt-8  shadow-lg rounded p-4">
            <h1 class="font-bold text-2xl">Bus Details</h1>
            <p class="text-lg mt-4"><span class="font-bold">Manufacturer:</span>  {{bus.manufacturer}}</p>
            <p class="text-lg mt-4"><span class="font-bold">Model:</span>  {{bus.model}}</p>
            <p class="text-lg mt-4"><span class="font-bold">Year of Make:</span>  {{bus.year}}</p>
            <p class="text-lg mt-4" v-if="bus.isElectric"><span class="font-bold">Type:</span> Electric</p>
            <p class="text-lg mt-4" v-else><span class="font-bold">Type:</span> Non-Electric</p>
        </div>
        <router-link to="/app" class="block underline mt-6 text-emerald-300">Back to list</router-link>
    </div>
</template>