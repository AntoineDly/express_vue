import axios from "axios";

class CategorieService {
	constructor() {
		this.axios = axios.create({
			baseURL: "http://localhost:3000"
		});
	}

	async getAll() {
		let response = await this.axios.get('/categories', {

		});
		return response.data;
	}

	async getById(id) {
		let response = await this.axios.get('/categories' + id, {

		});
		return response.data;
	}

}

export default new CategorieService();