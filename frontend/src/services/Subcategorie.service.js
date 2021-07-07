import axios from "axios";

class SubcategorieService {
	constructor() {
		this.axios = axios.create({
			baseURL: "http://localhost:3000"
		});
	}

	async getById(id) {
		let response = await this.axios.get('/subcategories' + id, {

		});
		return response.data;
	}

}

export default new SubcategorieService();