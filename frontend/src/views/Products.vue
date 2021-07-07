<template>
	<div>
		<h2 class="productsubtitle" v-on:click="goBackSubategory()"> Les Produits : {{ this.products[0].categoryName }} / {{ this.products[0].subcategoryName }} </h2>
		<div class="container">
			<div class="products" v-for="product in products" :key="product.name">
				<div class="product" v-on:click="goProduct(product)">
					<img class="product-image" src="../assets/logo.png" alt="Avatar">
					<div class="product-information">
						<h4 class="product-title"><b>{{ product.name }}</b></h4>
						<p class="product-description"> {{ product.description }} </p>
					</div>
					<div class="product-price">
						{{ product.price }}
					</div>
					<div class ="product-basket">
							<img v-bind:src="product.image" v-bind:alt="product.name">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ProductService from '../services/Product.service';
export default {
  name: 'Products',
  props: ['id'],
	data: function() {
    return {
      products: {}
		}
  },
	methods: {
		goProduct: function(product) {
			this.$router.push({ name: 'Product', params: { id: product.id } })
		},
		goBackSubategory: function() {
			this.$router.push({ name: 'SubCategory', params: { id: this.products[0].categoryId } })
		}
  },
	async mounted() {
    ProductService.getProductsById(this.id).then((res) => {
			if(res) {
				this.products = res;
			}
		})
		.catch((err) => console.log(err));
  }
}
</script>

<style scoped>
.products {
	width: 100%
}
.product:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.product {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 70%;
  margin-left: 10%;
	margin-bottom: 1.5%;
	display: flex;
	flex-flow: row wrap;
}
.product-image {
	flex: 3;
	width: 10%;
	order: 1;
}
.product-information {
	flex: 7;
	order: 2;
	margin-left: 1%;
	text-align: left;
}
.product-price {
	flex: 2;
	order: 3;
}
.product-basket {
	flex: 2;
	order: 4;
}
</style>