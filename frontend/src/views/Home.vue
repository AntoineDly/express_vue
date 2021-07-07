<template>
	<div>
		<h2 class="subtitle"> Les Catégories : </h2>
		<Card v-bind:items="category"></Card>
	</div>
</template>

<script>
//import JSON from '../assets/data.json';
import Card from './components/Card';
import CategorieService from '../services/Categorie.service';
export default {
  name: 'Home',
	components: {
    Card
  },
  data: function() {
    return {
      category: {
				data : {},
				redirection : "SubCategory"
			}
		}
  },
  async mounted() {
    CategorieService.getAll().then((res) => {
			if(res) {
				this.category.data = res;
			}
		})
		.catch((err) => console.log(err));
  }
}
</script>