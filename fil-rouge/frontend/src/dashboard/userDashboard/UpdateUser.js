import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import AdminDashboard from '../adminDashbord/AdminDashboard'

const UpdateUser = () => {
    const navigate = useNavigate() 
    const {id} = useParams();
    const [values, setValues] = useState({
      fullName: "",
      email: "",
      phone: "",
      adress: "",
    });

    const [user , setUser] = useState({});
    
    const getUserById = async(id)=>{
        let res = await axios.get(`http://localhost:2000/api/users/${id}`);
        
        return res;
    }
        const updateUser = async(userId,val) =>{
            await axios.put(`http://localhost:2000/api/users/${id}`, {
                  ...val
                 
          }).then((res) =>console.log("Data: ", res.data));
           }
           useEffect( () => {
             (async () => {
               await getUserById(id).then((user) => {
                 setUser(user)
                 setValues({...values, fullName: user.data.fullName, email: user.data.email ,phone: user.data.phone, adress: user.data.adress})
               });
             })();
           }, []);

    const [errors, setErrors] = useState({});

 const [submitted, setSubmitted] = useState(false);


 const handleFullName = (e) => {
   setValues({ ...values, fullName: e.target.value });
 };
 const handleEmail = (e) => {
  setValues({ ...values, email: e.target.value });
};

 const handlePhone= (e) => {
   setValues({ ...values, phone: e.target.value });
 };

 const handleAdress = (e) => {
    setValues({ ...values, adress: e.target.value });
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
    await updateUser(id, getUpdatedValues(values))
    navigate("/UsersDashboard")
    setSubmitted(true);
   };
  
   if (user.status !== 200) {
     return (<div>loading...</div>)
   }else {
  return (
    <>
    <AdminDashboard/>
  <div className="flex items-center justify-center p-8 mb-12">
    <div className="mx-auto w-full max-w-[550px] border mt-36 border-yellow-600 p-8 rounded-md">
      
        <form  
        className="w-68 h-max" 
        method="POST"
        onSubmit={handleSubmit}>

        <div className="mb-3">
            <label
            for="name"
            className="mb-3 block text-base font-medium text-yellow-900"
            >
            Full Name
            </label>
            <input
            type="text"
            name="name"
            id="name"
            value={values.fullName}
            onChange={handleFullName}
            placeholder="Full Name"
            className="w-full h-10 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-sm text-gray-600 outline-none focus:border-yellow-400 focus:shadow-md"
            />
        </div>
        <div className="mb-3">
            <label
            for="email"
            className="mb-3 block text-base font-medium text-yellow-900"
            >
            Email Address
            </label>
            <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={handleEmail}
            placeholder="example@domain.com"
            className="w-full rounded-md h-10 border border-[#e0e0e0] bg-white py-3 px-6 text-base font-sm text-gray-600 outline-none focus:border-yellow-400 focus:shadow-md"
            />
        </div>
        <div className="mb-3">
            <label
            for="email"
            className="mb-3 block text-base font-medium text-yellow-900"
            >
            phone
            </label>
            <input
            type="phone"
            name="phone"
            id="phone"
            value={values.phone}
            onChange={handlePhone}
            placeholder="example@domain.com"
            className="w-full rounded-md h-10 border border-[#e0e0e0] bg-white py-3 px-6 text-base font-sm text-gray-600 outline-none focus:border-yellow-400 focus:shadow-md"
            />
        </div>
        <div className="mb-6">
            <label
            for="subject"
            className="mb-3 block text-base font-medium text-yellow-900"
            >
            Adress
            </label>
            <input
            type="text"
            name="adress"
            id="adress"
            value={values.adress}
            onChange={handleAdress}
            placeholder="Enter your subject"
            className="w-full rounded-md h-10 border border-[#e0e0e0] bg-white py-3 px-6 text-base font-sm text-gray-600 outline-none focus:border-yellow-400 focus:shadow-md"
            />
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

export default UpdateUser