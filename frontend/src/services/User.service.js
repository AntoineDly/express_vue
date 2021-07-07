import axios from "axios";

class UserService {
	constructor() {
		this.axios = axios.create({
			baseURL: "http://localhost:3000"
		});
	}

	async getAll() {
		let response = await this.axios.get('/users', {

		});
		return response.data;
	}

	async post(email, mdp, nom, prenom) {
		let response = await this.axios.post('/user', {
			email: email,
			mdp:  mdp,
			nom: nom,
			prenom: prenom
		});
		return response.data;
	}

}

export default new UserService();