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

const removeCategory = async(req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.categoryId)

        if(!category) res.status(404).send('No Item Found')
        res.status(200).send('Category Deleted !')
    }  catch(error) {
        res.status(500).send(error)
    }
}

const putCategory = async (req, res) => {
    const {
      name,
    } = req.body
  
    const category = await Category.findById(req.params.categoryId)
    // console.log(req.params.productId)
    if (category) {
      category.name = name
      
      const updateCategory = await category.save()
      res.json(updateCategory)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  }

module.exports = {
    createCategory,
    removeCategory,
    putCategory,
}