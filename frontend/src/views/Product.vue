<template>
  <div class="container">
		<div class="main">
			<h3> {{ product.name }} </h3>
			<img v-bind:src="product.image" v-bind:alt="product.name" width="100%">
		</div>
		<div class="product">
			<p> Description : {{ product.description }} </p>
			<p> Brand : {{ product.brand }} </p>
			<p> Model : {{ product.model }} </p>
			<p> Graphic Chipset : {{ product.graphic_chipset }} </p>
			<p> Overclocking : {{ product.overclocking }} </p>
			<p> Memory type : {{ product.memory_type }} </p>
			<p> Virtual link compatible : {{ product.virtual_link_compatbile }} </p>
			<p> Flux processor : {{ product.flux_processor }} </p>
			<p> HD Ready : {{ product.HD_Ready }} </p>
			<p> Resolution 4h UHD : {{ product.resolution_4k_UHD }} </p>
			<p> Watercooling type : {{ product.watercooling_type }} </p>
			<p> VR Ready : {{ product.VR_Ready }} </p>
			<p> Screens number : {{ product.screens_number }} </p>
			<p> Consommation : {{ product.consommation }} </p>
		</div>
  </div>
</template>

<script>
import ProductService from '../services/Product.service';
export default {
  name: 'Product',
  props: ['id'],
	data: function() {
    return {
      product: {},
		}
  },
	async mounted() {
    ProductService.getProductById(this.id).then((res) => {
			if(res) {
				this.product = res[0];
			}
		})
		.catch((err) => console.log(err));
  },
}
</script>

<style scoped>
.product {
	margin-top: 4%;
	margin-left: 5%;
	order:2;
	flex:3;
}

.container {
	margin-top: 5%;
	text-align: left;
	width: 70%;
	margin-left: 10%;
	display: flex;
	flex-flow: row wrap;
}

.main {
	order: 1;
	flex:3;
}
</style>