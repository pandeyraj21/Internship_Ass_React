import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
const Step2 = () => {
  // const [addressLine1, setAddressLine1] = useState('');
  // const [addressLine2, setAddressLine2] = useState('');
  // const [city, setCity] = useState('');
  // const [state, setState] = useState('');
  // const [pincode, setPincode] = useState('');
  // const [country, setCountry] = useState('');
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});

  //----------------------------------------------------------------------
  // const namee = useSelector((state) => state.counter.userName);
  // const em = useSelector((state) => state.counter.email);
  const dispatch = useDispatch();
  const address1= useSelector((state)=>state.counter.add1);
  const address2= useSelector((state)=>state.counter.add2);
  const City= useSelector((state)=>state.counter.city);
  const State= useSelector((state)=>state.counter.state);
  const Pincode= useSelector((state)=>state.counter.pincode);
  const Country= useSelector((state)=>state.counter.country);


  const reduxStepTwo = () => {
    dispatch({
      
      type: "STEPTWO",
      add1: formData.AddressLine1,
      add2: formData.AddressLine2,
      city: formData.city,
      state: formData.state,
      pincode: formData.pin,
      country: formData.country,
      
    });
  };
  //----------------------------------------------------------------------

  const onInputChange = (val, name) => {
    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData?.Name?.trim()) {
      errors.Name = "First Name is required";
    }

    // if (Object.keys(errors).length) {
    //   setFormErrors(errors);
    //   return;
    // }
    //console.log("run");
    reduxStepTwo();
    // localStorage.setItem("AddressLine1", JSON.stringify(formData.AddressLine1));
    // localStorage.setItem("AddressLine2", JSON.stringify(formData.AddressLine2));
    // localStorage.setItem("city", JSON.stringify(formData.city));
    // localStorage.setItem("state", JSON.stringify(formData.state));
    // localStorage.setItem("pin", JSON.stringify(formData.pin));
    // localStorage.setItem("country", JSON.stringify(formData.country));
  };

  return (
    <div className="mt-16">
      <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
        <h2
          className="text-4xl dark:text-white font-bold text-center"
          style={{ color: "white", fontSize: "1.75rem" }}
        >
          Address
        </h2>
        <div className="flex flex-col text-gray-400 py-2">
          <label htmlFor="addressLine1">Address Line 1:</label>
          <input
            className="rounded-lg bg-gray-700 mt-2 p-2 focus\:border-blue-500:focus {
    --tw-border-opacity: 1;
    border-color: rgb(59 130 246 / var(--tw-border-opacity));
}"
            type="text"
            name="AddressLine1"
            placeholder="Enter YourAddress "
            onChange={(e) => onInputChange(e.target.value, e.target.name)}
            //onChange={(e) => setAddressLine1(e.target.value)}

            required
          />
        </div>
        <div className="flex flex-col text-gray-400 py-2">
          <label htmlFor="addressLine2">Address Line 2:</label>
          <input
            className=" rounded-lg bg-gray-700 mt-2 p-2 focus\:border-blue-500:focus {
    --tw-border-opacity: 1;
    border-color: rgb(59 130 246 / var(--tw-border-opacity));
} focus:outline-none"
            type="text"
            name="AddressLine2"
            placeholder="Enter YourAddress "
            onChange={(e) => onInputChange(e.target.value, e.target.name)}
            required
          />
        </div>
        <div className="flex flex-col text-gray-400 py-2">
          <label htmlFor="city">City:</label>
          <input
            className="rounded-lg bg-gray-700 mt-2 p-2 focus\:border-blue-500:focus {
    --tw-border-opacity: 1;
    border-color: rgb(59 130 246 / var(--tw-border-opacity));
} focus:outline-none"
            type="text"
            name="city"
            placeholder="Enter Yourcity "
            onChange={(e) => onInputChange(e.target.value, e.target.name)}
            required
          />
        </div>
        <div className="flex flex-col text-gray-400 py-2">
          <label htmlFor="state">State:</label>
          <input
            className="rounded-lg bg-gray-700 mt-2 p-2 focus\:border-blue-500:focus {
    --tw-border-opacity: 1;
    border-color: rgb(59 130 246 / var(--tw-border-opacity));
} focus:outline-none"
            type="text"
            name="state"
            placeholder="Enter Yourstate "
            onChange={(e) => onInputChange(e.target.value, e.target.name)}
          />
        </div>
        <div className="flex flex-col text-gray-400 py-2">
          <label htmlFor="pincode">Pincode:</label>
          <input
            className="rounded-lg bg-gray-700 mt-2 p-2 focus\:border-blue-500:focus {
    --tw-border-opacity: 1;
    border-color: rgb(59 130 246 / var(--tw-border-opacity));
} focus:outline-none"
            type="text"
            name="pin"
            pattern="[0-9]{6}"
            placeholder="Enter Yourpin "
            onChange={(e) => onInputChange(e.target.value, e.target.name)}
          />
        </div>
        <div className="flex flex-col text-gray-400 py-2">
          <label htmlFor="country">Country:</label>
          <input
            className="rounded-lg bg-gray-700 mt-2 p-2 focus\:border-blue-500:focus {
    --tw-border-opacity: 1;
    border-color: rgb(59 130 246 / var(--tw-border-opacity));
} focus:outline-none"
            type="text"
            name="country"
            placeholder="Enter Yourcountry "
            onChange={(e) => onInputChange(e.target.value, e.target.name)}
            required
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
        >
          Submit{" "}
        </button>
      </form>
    </div>
  );
};

export default Step2;
