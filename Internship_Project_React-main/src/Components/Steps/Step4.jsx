import React, { useState,useEffect } from "react";
import swal from "sweetalert";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
//import swal from "sweetalert";

const Step4 = () => {
  const [files, setFiles] = useState([]);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const Navigate = useNavigate();

  //----------------------------------------------------------------------
  const longi = useSelector((state) => state.counter.longi);
  const lati = useSelector((state) => state.counter.lati);
  const Files = useSelector((state) => state.counter.files);
  const namee = useSelector((state) => state.counter.userName);
  const em = useSelector((state) => state.counter.email);
  const phone_number = useSelector((state) => state.counter.phone);
  const address1 = useSelector((state) => state.counter.add1);
  const address2 = useSelector((state) => state.counter.add2);
  const City = useSelector((state) => state.counter.city);
  const State = useSelector((state) => state.counter.state);
  const Pincode = useSelector((state) => state.counter.pincode);
  const Country = useSelector((state) => state.counter.country);
  const File = useSelector((state) => state.counter.file);

  console.log({ namee });
  console.log({ Files });

  const dispatch = useDispatch();

  const reduxStepFourFiles = (validFiles) => {
    dispatch({
      type: "STEPFOURFILES",
      files: validFiles,
    });
  };
  const reduxStepFour = (longi, lati) => {
    dispatch({
      type: "STEPFOUR",
      longi,
      lati,
    });
  };
  //......................................................................

  const ProceedLogin = (e) => {
    e.preventDefault();

    console.log("submit");
    const FormData = require("form-data");
    let data = new FormData();

    data.append("name", namee);
    data.append("email", em.trim());
    data.append("phone_number", phone_number);
    data.append("address_1", address1);
    data.append("address_2", address2);
    data.append("city", City);
    data.append("state", State);
    data.append("pincode", Pincode);
    data.append("country", Country);
    data.append("geolocation", longi + "," + lati);
    data.append("single_file", File);
    // data.append("multi_ups1", Files);
    for (const key in Files) {
      data.append("multi_ups" + (parseInt(key) + 1), Files[key]);
    }
    let authToken = JSON.parse(localStorage.getItem("authToken")).authToken;
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/form",
      headers: {
        ...(data.getHeaders
          ? data.getHeaders()
          : {
              "Content-Type": "multipart/form-data",
              Authorization: "Bearer " + authToken,
            }),
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        localStorage.setItem("code", JSON.stringify(response.data));
        console.log(JSON.stringify(response.data));
        Navigate("/Step5",{state:{isSuccess:true,error:""}});
      })
      .catch((error) => {
        console.log(error);
        Navigate("/Step5",{state:{isSuccess:false,error:"error"}});
      });
  };

  // const validate = () => {
  //   let result = true;
  //   if (em === "" || em === null) {

  //     result = false;
  //     toast.warning("Warning Notification !", {
  //       //position: toast.POSITION.TOP_LEFT
  //     });
  //   }
  //   // if (password === "" || password === null) {
  //   //   result = false;
  //   //   toast.warning("Warning Notification !", {
  //   //     // position: toast.POSITION.TOP_LEFT
  //   //   });
  //   // }

  //   return result;
  // };

  //---------------------------------------------------------------------------
  //----------------------------------------------------------------------

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const validFiles = selectedFiles.filter((file) =>
      validateFileType(file.type)
    );

    if (validFiles.length > 0) {
      //setFiles(validFiles.slice(0, 5)); // Limit the number of files to 5
      reduxStepFourFiles(validFiles.slice(0, 5));
    } else {
      //setFiles([]);
      swal({
        title: "Wrong Format!",
        text: "Please Select .png or .pdf file",
        icon: "warning",
      });
    }
  };

  const validateFileType = (fileType) => {
    const allowedTypes = ["image/png", "application/pdf"];
    return allowedTypes.includes(fileType);
  };
  useEffect(() => {
    // Function to capture geolocation coordinates
    const captureGeolocation = () => {
      setStatus('Initializing Geolocation');

      // Using browser's geolocation API to get coordinates
      navigator.geolocation.getCurrentPosition(
        (position) => {
          reduxStepFour(position.coords.longitude, position.coords.latitude);
        },
        (error) => {
          console.error(error);
        }
      );
    };

    // Call the function to capture geolocation when the component mounts
    captureGeolocation();
  }, []);
  // const getLocation = () => {
  //   if (!navigator.geolocation) {
  //     setStatus("Geolocation is not supported by your browser");
  //   } else {
  //     setStatus("Locating...");
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         //setStatus("Geolocation captured ");
  //         // setLat(position.coords.latitude);
  //         // setLng(position.coords.longitude);
  //         reduxStepFour(position.coords.longitude, position.coords.latitude);
  //       },
  //       () => {
  //         // setStatus("Unable to retrieve your location");
  //         console.log("Unable to fetch your data");
  //       }
  //     );
  //   }
  // };
  return (
    <div className="mt-16">
      <form onSubmit={ProceedLogin} className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
        <h2
          className="text-4xl dark:text-white font-bold text-center"
          style={{ color: "white", fontSize: "1.75rem" }}
        >
          Get Location{" "}
        </h2>
        <div className="flex flex-col text-gray-400 py-2">
          <label htmlFor="files">
            File Upload (PNG or PDF, up to 5 files):
          </label>
          <input
            className="rounded-lg bg-gray-700 mt-2 p-2 .focus\:border-blue-500:focus {
              --tw-border-opacity: 1;
              border-color: rgb(59 130 246 / var(--tw-border-opacity));
          }"
            type="file"
            accept=".png,.pdf"
            multiple
            onChange={handleFileChange}
            required
          />
        </div>

        {/* <div className="flex flex-col text-gray-400 py-2">
          <label htmlFor="Geolocation Status Field">
            Geolocation Status Field{" "}
          </label>
          <div></div>
          <button
            onClick={getLocation}
            className="w-40 my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
          >
            Get Location
          </button>
          {/* <h1 style={{ fontWeight: "bold", fontSize: "20px" }}>Coordinates</h1>
          <p>{status}</p>
          {lat && <p>Latitude: {lat}</p>}
          {lng && <p>Longitude: {lng}</p>} 
        </div> */}

        <button
          className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
        >
          Submit{" "}
        </button>
      </form>
    </div>
  );
};
//onClick={validate}
export default Step4;
