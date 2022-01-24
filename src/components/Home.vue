<template>
    <Suspense>
        <template #default>
            <Buses />
        </template>
        <template #fallback>
            <Loading />
        </template>
    </Suspense>
</template>


<script>
import Buses from "./Buses.vue"
import Loading from "./Loading.vue"
export default {
    components:{
        Buses, Loading
    }
}
</script>

<style>

</style>