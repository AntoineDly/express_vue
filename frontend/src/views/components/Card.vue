<template>
	<div class="container">
			<div class="card" v-for="item in items.data" :key="item.name">
				<div v-on:click="goNewItem(item)">
					<img class="image" v-bind:src="item.image" v-bind:alt="item.name">
					<h4><b>{{ item.name }}</b></h4>
				</div>
			</div>
	</div>
</template>

<script>
export default {
  name: 'Card',
  props: ['items'],
	methods: {
		goNewItem: function(item) {
			this.$router.push({ name: this.items.redirection, params: { id: item.id } })
		}
  },
}
</script>
<style scoped>
.image {
	width: 220px;
	height: 200px;
	margin: 5%;
}
</style>