const { ProductRepository } = require('../repository')

class ProductService {
    constructor() {
        this.repositories = {
            products: new ProductRepository()
        }
    }
    async getAll() {
        const data = await this.repositories.products.getAll()
        return data
    }
    async getById({ id }) {
        const data = await this.repositories.products.getById(id)
        return data
    }
    async create(body) {
        const data = await this.repositories.products.create(body)
        return data
    }
    async update({ id }, body) {
        const data = await this.repositories.products.update(id, body)
        return data
    }
    async remove({ id }) {
        const data = await this.repositories.products.remove(id)
        return data
    }

}
module.exports = ProductService