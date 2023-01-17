<template>
	<h1 class="text-3xl m-5"
		>Tutaj znajdziesz projekty, przy których pracowałem lub samodzielnie
		wykonałem</h1
	>
	<ul
		:class="gridTemplate"
		class="m-5 gap-5 grid justify-items-center grid-cols-1 sm:grid-cols-2 place-items-stretch"
	>
		<li v-for="project in projects"
			><ProjectCard
				:name="project.name"
				:desc="project.description"
				:tags="project.tags"
				:image="project.img"
			>
			</ProjectCard
		></li>
	</ul>
</template>






<!-- SCRIPT  SCRIPT  SCRIPT  SCRIPT  SCRIPT  SCRIPT  SCRIPT  SCRIPT  SCRIPT  SCRIPT  SCRIPT  SCRIPT  SCRIPT  SCRIPT  SCRIPT  SCRIPT  SCRIPT  SCRIPT  SCRIPT  SCRIPT     -->
<script setup>
import { computed } from '@vue/reactivity';
import ProjectCard from '../components/ProjectCard.vue';

const projects = [
	{
		name: 'Cięcie wodą 3D',
		description: 'Zaprojektowana w Vue. Pierwszy większy projekt.',
		img: 'logocontact.png',
		tags: ['cieciewoda', 'vue'],
	},
	{
		name: 'Working Title ',
		description: 'Zaprojektowana w Vue. Pierwszy większy projekt.',
		img: 'vite.svg',
		tags: ['working', 'title', 'vue'],
	},
];


const gridTemplate = computed({
	get() {
		console.log(projects.length);
		if (projects.length === 1) {
			return 'sm:grid-cols-1 md:grid-cols-1';
		} else if (projects.length === 2) {
			return 'md:grid-cols-2';
		} else {
			return 'md:grid-cols-3';
		}
	},
});
</script>
