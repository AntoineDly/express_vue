import axios from "axios";

class ProductService {
	constructor() {
		this.axios = axios.create({
			baseURL: "http://localhost:3000"
		});
	}

	async getProductsById(subcategoryId) {
		let response = await this.axios.get('/products' + subcategoryId, {

		});
		return response.data;
	}

	async getProductById(productId) {
		let response = await this.axios.get('/product' + productId, {

		});
		return response.data;
	}

}

export default new ProductService();