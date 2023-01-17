<template>
	<ul class="flex justify-between focus:none sm:justify-center space-x-4 sm:spce-x-6 md:space-x-8 lg:space-x-10 ">
	
			<router-link  to="/about" custom v-slot="{ navigate,isActive }">
				<button :class="isActive ? 'bg-cyan-600' : 'bg-white-100'" class="hover:bg-cyan-400 transition duration-500" @click="navigate">O mnie</button>
			</router-link>
		
			<router-link  to="/" custom v-slot="{ navigate,isActive }">
				<button  :class="isActive ? 'bg-cyan-600' : 'bg-white-100'" class="hover:bg-cyan-400 transition duration-500"  @click="navigate">Projekty</button>
			</router-link>
		
			<router-link  to="/contact" custom v-slot="{ navigate,isActive }">
				<button :class="isActive ? 'bg-cyan-600' : 'bg-white-100'" class="hover:bg-cyan-400 transition duration-500"  @click="navigate">Kontakt</button>
			</router-link>
	</ul>
</template>
<script setup>
import { RouterLink } from 'vue-router';

function test(nav){
console.log(nav);
}

</script>

<style scoped>
ul {
	padding: 1rem;
}
</style>
