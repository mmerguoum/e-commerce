const Category = require('../models/category')


const createCategory = (req, res) => {
    const category = new Category(req.body)
    category.save((err, data) => {
        if(err) {
            return res.status(400).json({
                error : 'Bad Request ...!'
            })
        }
        res.json({
            category : category
        })
    })
}


module.exports = {
    createCategory,
}