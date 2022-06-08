const joi = require('joi');



const registerValidation = (data) => {
  const schema = joi.object().keys({
    fullName: joi.string().min(3).max(30).required(),
    email: joi.string().email({ minDomainSegments: 2 }),   
    phone: joi.number().integer(),
    adress: joi.string().min(3).max(30),
    password: joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    role: joi.string().alphanum().min(3).max(30),
    
  })
  return schema.validate(data);
}

const loginValidation = data => {
  const schema = joi.object().keys({
    password: joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    email: joi.string().email({ minDomainSegments: 2 })
  })
  return schema.validate(data);
}

module.exports = {
  registerValidation,
  loginValidation
}