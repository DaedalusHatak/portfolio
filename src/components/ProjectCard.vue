<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-amber-400">
  
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{{name}}</div>
    <img class="m-auto 	w-60 aspect-square"  :src="image" alt="">
    <p class="text-gray-700 text-base">
      {{desc}}
    </p>
    <div class="flex mt-3 gap-3 justify-center content-center	items-center	 inline-block" ><BaseTags :tags="tag" v-for="tag in tags" :key="tag"> </BaseTags></div>
  </div>
  <div class="px-6 pt-4 pb-2">
<slot></slot>
  </div>
</div>
</template>

<style scoped>

</style>

<script setup>
import BaseTags from './BaseTags.vue'
const props = defineProps(['name','desc','image', 'tags'])
 

</script>