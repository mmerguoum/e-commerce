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

const getAllCategories = async(req, res) => {
    const categories = await Category.find({})

    try{
      res.json(categories)
    }catch(error){
      res.status(500).send(error)
    }
  }


const removeCategory = async(req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.categoryId)

        if(!category) res.status(404).send('No Item Found')
        res.status(200).send('Category Deleted !')
    }  catch(error) {
        res.status(500).send(error)
    }
}


module.exports = {
    createCategory,
    removeCategory,
    getAllCategories
}