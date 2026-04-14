const { Book } = require('../models')

const index = async (req, res) => {
    const data = await Book.findAll()

    if (data?.length > 0) {
        return res.json({
            message: "Books fetch success!",
            data: data
        })
    }

    res.status(404).json({
        'message': "data not found!",
        "error": data
    })
}

const detail = async (req, res) => {
    const id = req?.params.id
    const data = await Book.findByPk(id)

    if (data) {
        return res.json({
            message: "Books fetch success!",
            data: data
        })
    }

    res.status(404).json({
        'message': "data not found!",
        "error": data
    })
}

const store = async (req, res) => {
    try {
        const {
            book_name,
            category_name,
            qty,
            author,
            year
        } = req?.body
        const data = await Student.create({
            book_name: book_name,
            category_name: category_name,
            qty: qty,
            author: author,
            year: year
        })

        return res.json({
            message: "Student store success!",
            data: data
        })

    } catch (e) {
        res.status(500).json({
            'message': "DB ERROR",
            "error": e
        })
    }
}

module.exports = {
    index,
    store,
    detail
}