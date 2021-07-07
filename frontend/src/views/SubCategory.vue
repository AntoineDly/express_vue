<template>
	<div>
		<h2 class="subtitle" v-on:click="goBackCategory()"> Les Sous Catégories : {{ this.subcategory.data[0].categoryName }}</h2>
		<Card v-bind:items="subcategory"></Card>
	</div>
</template>

<script>
import Card from './components/Card';
import SubcategorieService from '../services/Subcategorie.service';
export default {
  name: 'SubCategory',
	components: {
		Card
	},
  props: ['id'],
	data: function() {
    return {
      subcategory: {
				data : {},
				redirection : "Products"
			},
			category: {}
		}
  },
	async mounted() {
    SubcategorieService.getById(this.id).then((res) => {
			if(res) {
				this.subcategory.data = res;
			}
		})
		.catch((err) => console.log(err));
  },
	methods: {
		goBackCategory: function() {
			this.$router.push({ name: "Home"})
		}
  },
}
</script>