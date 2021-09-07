const { BankRepository } = require('../repository')

class BanksService {
    constructor() {
        this.repositories = {
            banks: new BankRepository()
        }
    }

    async getAll(userId, query) {
        const data = await this.repositories.banks.getAll(userId, query)
        const { page, docs: banks, totalDocs: total, limit } = data
        return { banks, page, limit, total }
    }

    async getById(userId, { id }) {
        const data = await this.repositories.banks.getById(userId, id)
        return data
    }

    async create(userId, body) {
        const data = await this.repositories.banks.create(userId, body)
        return data
    }

    async update(userId, { id }, body) {
        const data = await this.repositories.banks.update(userId, id, body)
        return data
    }

    async remove(userId, { id }) {
        const data = await this.repositories.banks.remove(userId, id)
        return data
    }

}
module.exports = BanksService