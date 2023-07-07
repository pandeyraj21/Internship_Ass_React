import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useSelector, useDispatch } from "react-redux";

const Step1 = () => {
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [phonenumber, setPhoneNumber] = useState("");

  //----------------------------------------------------------------------
  // const namee = useSelector((state) => state.counter.userName);
  // const em = useSelector((state) => state.counter.email);
  const dispatch = useDispatch();

  const namee = useSelector((state) => state.counter.userName);
  const em = useSelector((state) => state.counter.email);
  const phone_number= useSelector((state)=>state.counter.phone);

  const reduxStepOne = () => {
    dispatch({ type: "STEPONE", name: formData.Name, email: formData.email, phone: phonenumber });
  };
  //----------------------------------------------------------------------

  //const [email, setEmail] = useState(" ");
  // const [name, setName] = useState(" ");

  //prfrnd

  const onInputChange = (val, name) => {
    setFormData({ ...formData, [name]: val });
  };
  // console.log(formData.Name);
  // console.log(formData.email)
  //const data =localStorage.setItem("name", JSON.stringify(formData.Name));
  // console.log(data)
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData?.Name?.trim()) {
      errors.Name = "First Name is required";
    }

    if (Object.keys(errors).length) {
      setFormErrors(errors);
      return;
    }
    reduxStepOne();
    // localStorage.setItem("name", JSON.stringify(formData.Name));
    // localStorage.setItem("email", JSON.stringify(formData.email));
  };

  return (
    <div className="mt-16">
      <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
        <h2
          className="text-4xl dark:text-white font-bold text-center"
          style={{ color: "white", fontSize: "1.75rem" }}
        >
          Basic Details{" "}
        </h2>
        <div className="flex flex-col text-gray-400 py-2">
          <label htmlFor="UserName">UserName{namee}</label>
          <input
            className="rounded-lg bg-gray-700 mt-2 p-2 focus\:border-blue-500:focus {
              --tw-border-opacity: 1;
              border-color: rgb(59 130 246 / var(--tw-border-opacity));
          } focus:outline-none"
            type="text"
            name="Name"
            placeholder="User FullName "
            onChange={(e) => onInputChange(e.target.value, e.target.name)}
            required
          />
          
          {/* pr<input
                            type="text"
                            name="Name"
                            placeholder="Student Full Name "
                            className="form-control"
                            onChange={(e) =>
                              onInputChange(e.target.value, e.target.name)
                            }
                          />
                           <input
                            type="text"
                            name="email"
                            placeholder="Student Full Name "
                            className="form-control"
                            onChange={(e) =>
                              onInputChange(e.target.value, e.target.name)
                            }
                          /> */}
        </div>
        {/* pr frnd {formErrors.Name && (
                            <span >
                              {formErrors.Name}
                            </span>
                          )} */}
        <div className="flex flex-col text-gray-400 py-2">
          <label htmlFor="Email">Email</label>
          <input
            className=" rounded-lg bg-gray-700 mt-2 p-2 focus\:border-blue-500:focus {
              --tw-border-opacity: 1;
              border-color: rgb(59 130 246 / var(--tw-border-opacity));
          } focus:outline-none"
            type="email"
            name="email"
            placeholder="Enter YourEmail "
            onChange={(e) => onInputChange(e.target.value, e.target.name)}
          />
        </div>
        <div className="flex flex-col text-gray-400 py-2">
          <label htmlFor="phone_number">Phone Number</label>
          <PhoneInput
            buttonStyle={{ backgroundColor: "#374151" }}
            dropdownStyle={{ backgroundColor: "#374151" }}
            inputStyle={{ backgroundColor: "#374151", border: "none" }}
            className="rounded-lg bg-gray-700 mt-2 p-2 focus\:border-blue-500:focus {
              --tw-border-opacity: 1;
              border-color: rgb(59 130 246 / var(--tw-border-opacity));
          } focus:outline-none"
            type="tel"
            country="in"
            name="phoneNumber"
            value={phonenumber}
            onChange={(value) => setPhoneNumber(value)}
            inputProps={{
              required: true,
            }}
          />
        </div>

        <button
          className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
          onClick={handleSubmit}
        >
          Submit{" "}
        </button>
      </form>
    </div>
  );
};

export default Step1;
