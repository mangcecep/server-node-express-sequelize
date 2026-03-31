const { Student } = require('../models')

const generate = async (req, res) => {
    res.json({
        message: "generate data success!",
        data: []
    })
}

const index = async (req, res) => {
    const data = await Student.findAll()

    if (data?.length > 0) {
        return res.json({
            message: "Students fetch success!",
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
    const data = await Student.findByPk(id)

    if (data) {
        return res.json({
            message: "Students fetch success!",
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
        const { name, class_room, major } = req?.body
        const data = await Student.create({
            name: name,
            class_room: class_room,
            major: major
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
    detail,
    generate
}