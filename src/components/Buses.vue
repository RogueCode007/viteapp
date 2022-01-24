<template>
  <div class="px-4 mt-8">
      <div class="flex gap-8 mb-8">
        <div>
            <label class="block text-sm font-bold">Filter by Model:</label>
            <select v-model="model" class="focus:outline-none border">
                <option value="" disabled>Select Model</option>
                <option value="m1">M1</option>
                <option value="m2">M2</option>
                <option value="m3">M3</option>
                <option value="">Clear filters</option>
            </select>
        </div>
        <div>
            <label class="block text-sm font-bold">Filter by Type:</label>
            <select v-model="isElectric" class="focus:outline-none border">
                <option :value="null" disabled>Select option</option>
                <option :value="true">Electric</option>
                <option :value="false">Non-electric</option>
                <option :value="null">Clear filters</option>
            </select>
        </div>
      </div>
      <div class="md:grid md:grid-cols-2 md:gap-x-4 lg:grid-cols-3">
        <div v-for="(bus, index) in filteredBuses" :key="index" class="item shadow mb-4 p-3 md:px-6 rounded" :class="[ bus.isActive ? '' : 'hidden']">
                <p class="flex items-center gap-4">
                    <span class="font-bold text-xl">{{bus.manufacturer}}</span>
                    <span v-if="bus.isElectric">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                        <polygon style="fill:#FFD500;" points="382.395,228.568 291.215,228.568 330.762,10.199 129.603,283.43 220.785,283.43 
                            181.238,501.799 "/>
                        <g>
                            <path style="fill:#3D3D3D;" d="M181.234,512c-1.355,0-2.726-0.271-4.033-0.833c-4.357-1.878-6.845-6.514-5.999-11.184
                                l37.371-206.353h-78.969c-3.846,0-7.367-2.164-9.103-5.597c-1.735-3.433-1.391-7.55,0.889-10.648L322.548,4.153
                                c2.814-3.822,7.891-5.196,12.25-3.32c4.357,1.878,6.845,6.514,5.999,11.184L303.427,218.37h78.969c3.846,0,7.367,2.164,9.103,5.597
                                c1.735,3.433,1.391,7.55-0.889,10.648L189.451,507.846C187.481,510.523,184.399,512,181.234,512z M149.777,273.231h71.007
                                c3.023,0,5.89,1.341,7.828,3.662c1.938,2.32,2.747,5.38,2.208,8.355l-31.704,175.065l163.105-221.545h-71.007
                                c-3.023,0-5.89-1.341-7.828-3.661c-1.938-2.32-2.747-5.38-2.208-8.355l31.704-175.065L149.777,273.231z"/>
                            <path style="fill:#3D3D3D;" d="M267.666,171.348c-0.604,0-1.215-0.054-1.829-0.165c-5.543-1.004-9.223-6.31-8.22-11.853l0.923-5.1
                                c1.003-5.543,6.323-9.225,11.852-8.219c5.543,1.004,9.223,6.31,8.22,11.853l-0.923,5.1
                                C276.797,167.892,272.503,171.348,267.666,171.348z"/>
                            <path style="fill:#3D3D3D;" d="M255.455,238.77c-0.604,0-1.215-0.054-1.83-0.165c-5.543-1.004-9.222-6.31-8.218-11.853
                                l7.037-38.864c1.004-5.543,6.317-9.225,11.854-8.219c5.543,1.004,9.222,6.31,8.219,11.853l-7.037,38.864
                                C264.587,235.314,260.293,238.77,255.455,238.77z"/>
                        </g>
                        </svg>
                    </span>
                </p>
                <p class="text-base mt-4">Model: {{bus.model}}</p>
                <button @click="view(bus)" class="mt-4 rounded px-4 py-1 text-white bg-emerald-300">View</button>
        </div>
      </div>
  </div>
</template>

<script>
import { ref, onMounted, computed} from 'vue'
// import {useStore} from "vuex";
const getBusList = async ()=> {
    await new Promise(resolve => setTimeout(resolve, 2000))
    const list =  [
                {
                    id: 20,
                    year: 2022,
                    manufacturer: "JAC",
                    model: "m1",
                    isElectric: false,
                    isActive: true
                },
                {
                    id: 21,
                    year: 2019,
                    manufacturer: "Mac",
                    model: "m2",
                    isElectric: false,
                    isActive: true
                },
                {
                    id: 22,
                    year: 2022,
                    manufacturer: "Tailer",
                    model: "m1",
                    isElectric: true,
                    isActive: true
                },
                {
                    id: 23,
                    year: 2022,
                    manufacturer: "NUM",
                    model: "m2",
                    isElectric: true,
                    isActive: true
                },
                {
                    id: 24,
                    year: 2022,
                    manufacturer: "BigMac",
                    model: "m3",
                    isElectric: false,
                    isActive: true
                },
                {
                    id: 24,
                    year: 2022,
                    manufacturer: "BigTerf",
                    model: "m3",
                    isElectric: false,
                    isActive: false
                },
            ]
    return list
}
export default {
    async setup(){
        const buslist = await getBusList()
        const myName = ref('')
        const isElectric = ref(null)
        const model = ref('')
        const filterBusesByElectric = (buses) => {
            if(typeof isElectric.value === 'boolean'){ 
                return buses.filter((bus)=> bus.isElectric === isElectric.value)
            }
            else{
                return buses
            }
        }
        const filterBusesByModel = (buses) => {
            return buses.filter((bus) => !bus.model.indexOf(model.value))
        }
        const filteredBuses = computed(()=> {
            return filterBusesByModel(filterBusesByElectric(buslist))
        })
        return {
            model, myName, buslist, filterBusesByElectric, isElectric, filterBusesByModel, filteredBuses
        }
    },
    methods:{
        view(obj){
            this.$store.commit('setBus', obj)
            this.$router.push('/app/about')
        }
    }

}
</script>

<style>
svg{
    width: 15px;
}
@media only screen and (min-width: 768px){

}
</style>