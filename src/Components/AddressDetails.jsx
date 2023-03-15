import React, { useContext } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { multistepContext } from "../StepContext";
import Styles from "../Styles/AddressDetails.module.css"

const states = [
  { value: "Andrapradesh", label: "Andrapradesh" },
  { value: "Telangana", label: "Telangana" },
  { value: "Mumbai", label: "Mumbai" },
  { value: "Bihar", label: "Bihar" },
];

const cities = [
  { value: "Vishakapatnam", label: "Vishakapatnam" },
  { value: "Hyderabad", label: "Hyderabad" },
  { value: "Srikakulam", label: "Srikakulam" },
  { value: "Veeraghattam", label: "Veeraghattam" },
];

const countries = [
  { value: "India", label: "India" },
  { value: "Newzland", label: "Newzland" },
  { value: "Australia", label: "Australia" },
  { value: "Japan", label: "Japan" },
];

const AddressDetails = () => {
  const { setStep, userData, setUserData, submitData } =
    useContext(multistepContext);

  function handleNext() {
    const { address1, address2, state, country, city, postcode } = userData;

    console.log(address1, address2, state, country, city, postcode);
    if (address1 && address2 && state && country && city && postcode) {
      submitData();
    }
    //  setStep(3)
  }

  return (
    <div className={Styles.maindiv}>
      <div>
        <TextField
         
          helperText="AddressLine1 is required field"
          label="Address Line 1"
          className={Styles.label}
          value={userData["address1"]}
          onChange={(e) =>
            setUserData({ ...userData, address1: e.target.value })
          }
          margin="normal"
          variant="outlined"
          color="secondary"
        />
        <span> </span>
        <TextField
          
          helperText="AddressLine2 is required field"
          label="Address Line 2"
          className={Styles.label}
          value={userData["address2"]}
          onChange={(e) =>
            setUserData({ ...userData, address2: e.target.value })
          }
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <span> </span>
      <div>
        <TextField
          
          select
          label="City"
          className={Styles.label}
          value={userData["city"]}
          onChange={(e) => setUserData({ ...userData, city: e.target.value })}
          margin="normal"
          variant="outlined"
          color="secondary"
          required
          helperText="City is required field"
        >
          {cities.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          
          select
          label="State"
          className={Styles.label}
          value={userData["state"]}
          onChange={(e) => setUserData({ ...userData, state: e.target.value })}
          margin="normal"
          variant="outlined"
          color="secondary"
          required
          helperText="State is required field"
        >
          {states.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <span> </span>

        <span> </span>
      </div>

      <div>
        <TextField
         
          select
          label="Country"
          className={Styles.label}
          value={userData["city"]}
          onChange={(e) =>
            setUserData({ ...userData, country: e.target.value })
          }
          margin="normal"
          variant="outlined"
          color="secondary"
          required
          helperText="Country is required field"
        >
          {countries.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <span> </span>

        <TextField
        
          label="Post Code"
          helperText="PostCode is required field"
          className={Styles.label}
          value={userData["postcode"]}
          onChange={(e) =>
            setUserData({ ...userData, postcode: e.target.value })
          }
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>

      <div id={Styles.btn}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setStep(1)}
        >
          BACK
        </Button>
        <span> </span>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleNext()}
        >
          SUBMIT
        </Button>
      </div>
    </div>
  );
};

export default AddressDetails;
