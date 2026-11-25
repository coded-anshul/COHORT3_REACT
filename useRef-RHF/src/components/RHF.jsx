import React from "react";
import { useForm } from "react-hook-form";
const RHF = () => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) =>{
    console.log(data);
    reset();
    
  }

  return (
    <div className="w-80 h-screen">
      REACT HOOK FORM
      <form action="" className="flex flex-col gap-4 p-6 rounded bg-white" onSubmit={handleSubmit((data)=>{
        console.log(data);
        
      })}>
        <input
          {...register("productName")}
          //   onChange={(e) =>
          //     setFormData({ ...formData, productName: e.target.value })
          //   }
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Product name"
        />
        <input
          {...register("price")}

          //   onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Price"
        />
        <input
          {...register("category")}

          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="category"
        />
        <input
          {...register("image")}

          //   onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="image"
        />
        <button className="p-2 bg-blue-600 text-white rounded">Create</button>
      </form>
    </div>
  );
};

export default RHF;
