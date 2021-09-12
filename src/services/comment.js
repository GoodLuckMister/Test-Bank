const { CommentRepository } = require('../repository')

class CommentService {
    constructor() {
        this.repositories = {
            comment: new CommentRepository()
        }
    }
    async create(body) {
        const data = await this.repositories.comment.create(body)
        return data
    }
    async update({ id }, body) {
        const data = await this.repositories.comment.update(id, body)
        return data
    }
    async remove({ id }) {
        const data = await this.repositories.comment.remove(id)
        return data
    }

}
module.exports = CommentService