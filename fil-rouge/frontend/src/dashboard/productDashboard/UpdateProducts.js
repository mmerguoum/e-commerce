import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import AdminDashboard from '../adminDashbord/AdminDashboard'

const UpdateProducts = () => {
    const navigate = useNavigate() 
    const {id} = useParams();
    const [values, setValues] = useState({
      name: "",
    //   image: "",
      category: "",
      price: "",
      quantity:"",
      description: "",
    });
    const [product , setProduct] = useState({});
    
    const getProductById = async(id)=>{
        let res = await axios.get(`http://localhost:2000/api/product/${id}`);
        
        return res;
    }
        const updateProduct = async(id,val) =>{
            await axios.put(`http://localhost:2000/api/product/${id}`, {
                  ...val
                 
          }).then((res) =>console.log("Data: ", res.data));
           }
           useEffect( () => {
             (async () => {
               await getProductById(id).then((product) => {
                 setProduct(product)
                 setValues({...values, name: product.data.name, category: product.data.category ,price: product.data.price, quantity: product.data.quantity, description: product.data.description})
               });
             })();
           }, []);

    const [errors, setErrors] = useState({});

 const [submitted, setSubmitted] = useState(false);


 const handleName = (e) => {
   setValues({ ...values, name: e.target.value });
 };
 const handleCategory = (e) => {
  setValues({ ...values, category: e.target.value });
};

 const handlePrice= (e) => {
   setValues({ ...values, price: e.target.value });
 };

 const handleQuantity = (e) => {
    setValues({ ...values, quantity: e.target.value });
  };

  const handleDescription = (e) => {
    setValues({ ...values, description: e.target.value });
  };

  const handleErrors = (errors) => {
    setErrors({ ...errors });
  };

  const getUpdatedValues = (values) => {
    let res = {};
    Object.keys(values).map(key => {
      if (values[key] !== "") {
        res[key] = values[key];
      }
    })
    return res;
}

const handleSubmit = async (e) => {
    e.preventDefault();
    getUpdatedValues(values);
    console.log(getUpdatedValues(values))
    await updateProduct(id, getUpdatedValues(values))
    navigate("/ProductsDashboard")
    setSubmitted(true);
   };
  
   if (product.status !== 200) {
     return (<div>loading...</div>)
   }else {
  return (
    <>
    <AdminDashboard/>
  <div className="flex items-center justify-center p-8  mb-12">
    <div className="mx-auto w-full max-w-[550px] border mt-16 border-yellow-600 p-8 rounded-md">
        <form  
        className="w-68 h-max" 
        method="POST"
        onSubmit={handleSubmit}>
        <div className="mb-3">
            <label
            for="name"
            className="mb-3 block text-base font-medium text-yellow-900"
            >
            Name Product
            </label>
            <input
            type="text"
            name="name"
            id="name"
            value={values.name}
            onChange={handleName}
            placeholder="Full Name"
            className="w-full h-10 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-sm text-gray-600 outline-none focus:border-yellow-400 focus:shadow-md"
            />
        </div>
        <div className="mb-3">
            <label
            for="price"
            className="mb-3 block text-base font-medium text-yellow-900"
            >
            Price
            </label>
            <input
            type="number"
            name="price"
            id="price"
            value={values.price}
            onChange={handlePrice}
            placeholder="example@domain.com"
            className="w-full rounded-md h-10 border border-[#e0e0e0] bg-white py-3 px-6 text-base font-sm text-gray-600 outline-none focus:border-yellow-400 focus:shadow-md"
            />
        </div>
        <div className="mb-3">
            <label
            for="subject"
            className="mb-3 block text-base font-medium text-yellow-900"
            >
            Category
            </label>
            <input
            type="text"
            name="subject"
            id="subject"
            value={values.category}
            onChange={handleCategory}
            placeholder="Enter your subject"
            className="w-full rounded-md h-10 border border-[#e0e0e0] bg-white py-3 px-6 text-base font-sm text-gray-600 outline-none focus:border-yellow-400 focus:shadow-md"
            />
        </div>
        <div className="mb-3">
            <label
            for="subject"
            className="mb-3 block text-base font-medium text-yellow-900"
            >
            quantity
            </label>
            <input
            type="number"
            name="subject"
            id="subject"
            value={values.quantity}
            onChange={handleQuantity}
            placeholder="Enter your subject"
            className="w-full rounded-md h-10 border border-[#e0e0e0] bg-white py-3 px-6 text-base font-sm text-gray-600 outline-none focus:border-yellow-400 focus:shadow-md"
            />
        </div>
        <div className="mb-3">
            <label
            for="message"
            className="mb-3 block text-base font-medium text-yellow-900"
            >
            Description
            </label>
            <textarea
            rows="4"
            name="message"
            id="message"
            value={values.description}
            onChange={handleDescription}
            placeholder="Type your message"
            className="w-full resize-none h-24 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-sm text-gray-600 outline-none focus:border-yellow-400 focus:shadow-md"
            ></textarea>
        </div>
        <div>
            <button
            className="hover:shadow-form rounded-md bg-yellow-700 py-2 px-8 text-base font-semibold text-white outline-none"
            >
            Submit
            </button>
        </div>
        </form>
    </div>
</div>  

</>
  )
}
}

export default UpdateProducts