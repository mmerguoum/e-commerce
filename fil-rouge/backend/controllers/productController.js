const Product = require('../models/products')


exports.createProduct =  async(req, res) => {
        try{
        const newProduct = await Product.create({
          name: req.body.name,
          image:req.file.originalname,
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