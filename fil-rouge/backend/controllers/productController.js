const Product = require('../models/products')
const fs = require('fs')


exports.createProduct = async (req, res) => {
  
  let data = req.body;

  const name = data.name
  const description = data.description
  const price = data.price
  const image = data.image
  const category = data.category
  const quantity = data.quantity

  Product.create({
      name: name, description: description, price: price, image: image, category: category, quantity: quantity
  })
      .then((product) => {

          res.json(product)
      })
      .catch((err) => {
          res.send({ status: 400, message: err });
      });
};


exports.showOneProduct = async(req, res) => {
    const product = await Product.findById(req.params.productId)
    if(product) {
        res.send(product)
    }else{
        res.status(404).send({message: 'Product Not Persist'})
    }
}


exports.getAllProducts = async (req, res) => {
  const products = await Product.find()

  try{
    res.json(products)
  }catch(error){
    res.status(500).send(error)
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


exports.productSearch = async(req, res)=>{
  let data = await Product.find(
    {
        "$or":[
            {name:{$regex:req.params.key.toLowerCase()}},
        ]
      }
)
  
    res.send(data)
}

exports.updateProduct = async(req, res) =>{
  try {
      const {name, price, description, quantity, image, category} = req.body;
      if(!image) return res.status(400).json({msg: "No image upload"})

      await Product.findOneAndUpdate({_id: req.params.productId}, {
          name, price, description, quantity, image, category
      })

      res.json({msg: "Updated a Product"})
  } catch (err) {
      return res.status(500).json({msg: err.message})
  }
}



  // exports.productSearch = async(req,res)=>{
  //   let regEx = new RegExp(req.query.name,'i');
  //  const searchedProducts = await Product.find(
  //   {
  //     "$or":[
  //         {name:{$regex:req.params.key}},
  //     ]
  //   }
  // )
  //  if(searchedProducts){
  //      res.send(searchedProducts)

  //  }else{
  //    res.status(402).send({message:'Opps No product found!!'})
  //  }
  // }