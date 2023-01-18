<template>
	<h1 class="text-3xl m-5"
		>Tutaj znajdziesz projekty, przy których pracowałem lub samodzielnie
		wykonałem</h1
	>

	<button @click="addProject" class="bg-blue-500">Add</button>
	<button @click="removeProject(index)" class="bg-red-500">Delete</button>

	<ul
		:class="gridTemplate"
		class="m-5 gap-5 grid justify-items-center grid-cols-1 sm:grid-cols-2 place-items-stretch"
	>
		<li v-for="(project, index) in  projects" 
			><ProjectCard
				:name="project.name"
				:desc="project.description"
				:tags="project.tags"
				:image="project.img"
				:key="index"
			>
			
			</ProjectCard
		></li>
	</ul>
</template>

<!-- SCRIPT  SCRIPT  SCRIPT  SCRIPT  SCRIPT  SCRIPT  SCRIPT  SCRIPT  SCRIPT  SCRIPT  SCRIPT  SCRIPT  SCRIPT  SCRIPT  SCRIPT  SCRIPT  SCRIPT  SCRIPT  SCRIPT  SCRIPT     -->
<script>

import ProjectCard from '../components/ProjectCard.vue';
export default{
	components:{ProjectCard},
	data(){
	return{
	projects: [
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
	{
		name: 'Working Title 2',
		description: 'Zaprojektowana w Vue. Pierwszy większy projekt.',
		img: 'vite.svg',
		tags: ['working', 'title', 'vue'],
	},
	{
		name: 'Working Title 3',
		description: 'Zaprojektowana w Vue. Pierwszy większy projekt.',
		img: 'vite.svg',
		tags: ['working', 'title', 'vue'],
	},

	
],


	}
},
methods:{
	addProject() {
	this.projects.push({
		name: 'Working Title ',
		description: 'Zaprojektowana w Vue. Pierwszy większy projekt.',
		img: 'vite.svg',
		tags: ['working', 'title', 'vue'],
	})
	

},
removeProject(){
		this.projects.pop()
	}
},
computed:{
	
 gridTemplate(){

		if (this.projects.length === 1) {
			return 'sm:grid-cols-1 md:grid-cols-1';
		} else if (this.projects.length === 2) {
			return 'md:grid-cols-2';
		} else {
			return 'md:grid-cols-3';
		}

}
},

}

</script>



function 