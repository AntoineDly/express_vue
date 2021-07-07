<template>
	<div>

		<p v-if="errors.length">
			<b>Corrigez les errors s'il vous plait:</b>
			<ul class="list">
				<li v-for="error in errors" :key="error">
					{{ error }}
				</li>
			</ul>
		</p>

		<h2 class="subtitle"> Inscrivez vous : </h2>

		<form @submit.prevent="checkForm" method="post" class="form">
				<label for="email">Email :</label>
				<input v-model="email" placeholder="email">
				<label for="mdp">Mot de passe :</label>
				<input v-model="mdp" placeholder="mot de passe">
				<label for="nom">Nom :</label>
				<input v-model="nom" placeholder="nom">
				<label for="prenom">Prénom :</label>
				<input v-model="prenom" placeholder="prenom">
			<button type="submit"> Inscrivez vous !</button>
		</form>
	</div>
</template>

<script>
import UserService from '../services/User.service';
export default {
	name: 'Register',
	data: function() {
		return {
			errors: [],
			email: "",
			mdp: "",
			nom: "",
			prenom: ""
		}
	},
	methods:{
    checkForm: function (e) {

      this.errors = [];

      if (!this.email) {
        this.errors.push('Email requis.');
      }
      if (this.mdp.length < 8) {
        this.errors.push('Le mot de passe doit faire plus de 8 caractère.');
      }
			if (!this.nom) {
        this.errors.push('Nom requis.');
      }
      if (!this.prenom) {
        this.errors.push('Prénom requis.');
      }


			if (this.email.length > 250) {
        this.errors.push('L\'email doit faire moins de 250 caractère.');
      }
      if (this.mdp.length > 20) {
        this.errors.push('Le mot de passe doit faire moins de 20 caractère.');
      }
			if (this.nom.length > 20) {
        this.errors.push('Le nom doit faire moins de 20 caractère.');
      }
      if (this.prenom.length > 20) {
        this.errors.push('Le prénom doit faire moins de 20 caractère.');
      }

			if(!this.errors) {
				UserService.post(this.email, this.mdp, this.nom, this.prenom);
			}

			e.preventDefault();
    }
  }
}
</script>
<style scoped>
.form {
	display:flex;
	flex-flow: column wrap;
	width: 80%;
	margin-left: 5%;
	text-align: left;
}
.list {
	list-style: none;
}

</style>