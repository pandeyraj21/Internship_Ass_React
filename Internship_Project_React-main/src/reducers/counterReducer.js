const initialState = {
  userName: "",
  email: "",
  phone: "",
  add1: "",
  add2: "",
  city: "",
  state: "",
  pincode: "",
  country: "",
  file: {},
  files: [],
  longi: null,
  lati: null,
};

const counterReducer = (state = initialState, action) => {
  console.log(action.add1,state,action);
  switch (action.type) {
    case "STEPONE":
      return { ...state, userName: action.name, email: action.email, phone: action.phone };
    case "STEPTWO":
      return {
        ...state,
        add1: action.add1,
        add2: action.add2,
        city: action.city,
        state: action.state,
        pincode: action.pincode,
        country: action.country,
      };
    case "STEPTHREE":
      return { ...state, file: action.file };
    case "STEPFOUR":
      return { ...state, longi: action.longi, lati: action.lati };
    case "STEPFOURFILES":
      return { ...state, files: action.files };
    default:
      return state;
  }
};

export default counterReducer;
