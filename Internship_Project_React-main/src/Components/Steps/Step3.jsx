import React, { useState } from "react";
import swal from "sweetalert";
import { useSelector, useDispatch } from "react-redux";

const Step3 = () => {
  const [file, setFile] = useState(null);

  //----------------------------------------------------------------------
  // const namee = useSelector((state) => state.counter.userName);
  // const em = useSelector((state) => state.counter.email);
  const dispatch = useDispatch();
  const File= useSelector((state)=>state.counter.file);

  const reduxStepThree = (selectedFile) => {
    dispatch({
      type: "STEPTHREE",
      file: selectedFile,
    });
  };
  //----------------------------------------------------------------------

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && validateFileType(selectedFile.type)) {
      setFile(selectedFile);
      console.log(selectedFile);
      reduxStepThree(selectedFile);
    } else {
      setFile(null);
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
  return (
    <div className="mt-16">
      <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
        <h2
          className="text-4xl dark:text-white font-bold text-center"
          style={{ color: "white", fontSize: "1.75rem" }}
        >
          File Upload{" "}
        </h2>
        <div className="flex flex-col text-gray-400 py-2">
          <label htmlFor="file">File Upload (PNG or PDF):</label>
          <input
            className="rounded-lg bg-gray-700 mt-2 p-2 .focus\:border-blue-500:focus {
                --tw-border-opacity: 1;
                border-color: rgb(59 130 246 / var(--tw-border-opacity));
            }"
            type="file"
            accept=".png,.pdf"
            onChange={handleFileChange}
          />
        </div>
        <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
          Submit{" "}
        </button>
      </form>
    </div>
  );
};

export default Step3;
