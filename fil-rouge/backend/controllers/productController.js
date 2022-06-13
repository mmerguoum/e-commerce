const Product = require('../models/products')
const asyncHandler = require('express-async-handler')


exports.createProduct =  async(req, res) => {
        try{
        const newProduct = await Product.create({
          name: req.body.name,
          image:req.body.image,
          category: req.body.category,
          price: req.body.price,
          quantity: req.body.quantity,
          description: req.body.description
      });
      
      res.status(201).json({
        newProduct : newProduct
      });
      }catch (error) {
      res.status(400).send(error);
      console.log(error);
      }
      }


exports.showOneProduct = async(req, res) => {
    const product = await Product.findById(req.params.productId)
    if(product) {
        res.send(product)
    }else{
        res.status(404).send({message: 'Product Not Persist'})
    }
}

exports.removeProduct = async(req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.productId)

        if(!product) res.status(404).send('No Item Found')
        res.status(200).send('Product Deleted !')
    }  catch(error) {
        res.status(500).send(error)
    }
}




// exports.putProduct = async(req, res) => {
//     console.log('body' , req.body);
//     const {name, category, price, quantity, description,image} = req.body
//     const product = await Product.findByIdAndUpdate({_id:req.params.productId}, {
//         name: name,
//         category: category,
//         price: price,
//         quantity: quantity,
//         description: description,
//         image:image
//     }, {new: true})
//     if(product) {
//         res.send(product)
//     }
//     else{
//         res.status(404).send({message: 'Product Not Persist'})
//     }
// }
// exports.putProduct = async(req, res) =>{
// try {
//   const {name, price, description, image, category, quantity} = req.body;
//   if(!images) return res.status(400).json({msg: "No image upload"})

//   await Products.findOneAndUpdate({_id: req.params.id}, {
//       name, price, description, image, category, quantity
//   })

//   res.json({msg: "Updated a Product"})
// } catch (err) {
//   return res.status(500).json({msg: err.message})
// }
// }
exports.putProduct = asyncHandler(async (req, res) => {
    const {
      name,
      price,
      description,
      image,
      category,
      quantity,
    } = req.body
  
    const product = await Product.findById(req.params.productId)
    // console.log(req.params.productId)
    if (product) {
      product.name = name
      product.price = price
      product.description = description
      product.image = image
      product.quantity = quantity
      product.category = category
     
  
      const updateProduct = await product.save()
      res.json(updateProduct)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })

  exports.searchMeal = async(req,res)=>{
    let regEx = new RegExp(req.query.name,'i');
   const serachedProducts = await Product.find({name:regEx})
   if(serachedProducts){
       res.send(serachedProducts)

   }else{
     res.status(402).send({message:'Opps No product found!!'})
   }
  }