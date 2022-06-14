const Product = require('../models/products')
const fs = require('fs')


// exports.createProduct =  async(req, res) => {
//         try{
//         const newProduct = await Product.create({
//           name: req.body.name,
//           image:req.body.image,
//           category: req.body.category, 
//           price: req.body.price,
//           quantity: req.body.quantity,
//           description: req.body.description
//       });
      
//       res.status(201).json({
//         newProduct : newProduct
//       });
//       }catch (error) {
//       res.status(400).send(error);
//       console.log(error);
//       }
//       }

exports.createProduct = async (req, res) => {
  let image = './upload/' + Math.floor(Math.random() * 1000000000000000) + '.png';
  await fs.promises.writeFile(image, req.files.image[0].buffer)
  let data = req.body;

  const name = data.name
  const description = data.description
  const price = data.price
  const imageProduct = image
  const category = data.category
  const quantity = data.quantity

  Product.create({
      name: name, description: description, price: price, image: imageProduct, category: category, quantity: quantity
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


exports.searchProduct = async(req, res)=>{
  let data = await Product.find(
    {
        "$or":[
            {name:{$regex:req.params.key}},
        ]
      }
)
  
    res.send(data)
}


exports.putProduct = async (req, res) => {
  let data = req.body;
  const updateProduct = await Product.update({
          name: data.name,
          decsription: data.decsription,
          price: data.price,
          imageProduct: data.image,
          category: data.category,
          quantity: data.quantity

      }, {
      where: { id: req.params.productId }
  })
      .then((updateProduct) => {
          res.json({ status: 200, updateProduct });
      })
      .catch((err) => {
          res.send({ status: 400, message: err });
      });
};
  

  exports.searchMeal = async(req,res)=>{
    let regEx = new RegExp(req.query.name,'i');
   const serachedProducts = await Product.find({name:regEx})
   if(serachedProducts){
       res.send(serachedProducts)

   }else{
     res.status(402).send({message:'Opps No product found!!'})
   }
  }