<template>
  <div id="app">
		<router-link style="text-decoration: none; color: inherit;" to="/">
			<div class="title">
				<img src="./assets/logo.png" width="5%">
				<h1> TechWare </h1>
			</div>
		</router-link>
		<router-link style="text-decoration: none; color: inherit;" to="/register">
			<h2> Register </h2>
		</router-link>
		<router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.title {
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	text-decoration: 'none';
}

.subtitle {
	text-align: left;
	margin-left: 5%;
}

.productsubtitle {
	text-align: left;
	margin-left: 10%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.container {
	width:100%;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
}

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: calc(20% - 3%);
  margin: 1.5%;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
</style>
