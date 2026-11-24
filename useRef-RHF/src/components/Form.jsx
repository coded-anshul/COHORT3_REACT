import React, { useRef, useState } from "react";

const Form = () => {

    const formRef = useRef({});
    console.log(formRef);

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formRef.current.productName.value);
        console.log(formRef.current.price.value);
        console.log(formRef.current.category.value);
        console.log(formRef.current.image.value);
        
    }
  return (
    <div className="w-80 h-screen">
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col gap-4 p-6 rounded bg-white">
        <input
        ref={(e)=>(formRef.current.productName=e)}
        //   onChange={(e) =>
        //     setFormData({ ...formData, productName: e.target.value })
        //   }
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Product name"
        />
        <input
        ref={(e)=>(formRef.current.price=e)}
        //   onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Price"
        />
        <span>Select category:</span>
        <select
        
          className="p-2 border border-gray-400 rounded"
        //   onChange={(e) =>
        //     setFormData({ ...formData, category: e.target.value })
        //   }
        >
          <option value="MEN">MEN</option>
          <option value="WOMEN">WOMEN</option>
          <option value="KIDS">KIDS</option>
        </select>
        <input
        

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

export default Form;
