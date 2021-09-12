const comment = require('../schema/comment')

class CommentRepository {
    constructor() {
        this.model = comment
    }
    async create(id, body) {
        const result = await this.model.create(id, body).populate({
            path: 'product',
            select: 'name count'
        })
        return result
    }

    async update(id, body) {
        const result = await this.model.findByIdAndUpdate(
            { _id: id },
            { ...body },
            { new: true }
        )
        return result
    }
    async remove(id) {
        const result = await this.model.findByIdAndDelete({ _id: id })
        return result
    }
}
module.exports = CommentRepository