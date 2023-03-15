import { Table, TableCell, TableRow } from "@material-ui/core";
import React, { useContext } from "react";
import { multistepContext } from "../StepContext";
import Styles from "../Styles/DisplayData.module.css";

const SubmissionData = () => {
  const { finalData } = useContext(multistepContext);

  return (
    <div div className={Styles.maindiv}>
      <h1 id={Styles.heading}>Data Added Successfully</h1>
      <div>
        {finalData.map((e) => {
          return (
            <div className={Styles.box}>
              <Table>
              <TableRow>
                <TableCell>Name</TableCell>
                  <TableCell>
                    {e.firstname}
                    {e.lastname}
                  </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>Firstname</TableCell>
                  <TableCell>{e.firstname}</TableCell>
                </TableRow>
                <TableRow>
                <TableCell>LastName</TableCell>
                  <TableCell>{e.lastname}</TableCell>
                </TableRow>
                <TableRow>
                <TableCell> MobileNo</TableCell>
                  <TableCell>{e.contact}</TableCell>
                </TableRow>
                <TableRow>
                <TableCell> Email</TableCell>
                  <TableCell> {e.email}</TableCell>
                </TableRow>
                <TableRow>
                <TableCell> Birthday</TableCell>
                  <TableCell>{e.birthday}</TableCell>
                </TableRow>
                <TableRow>
                <TableCell> Age</TableCell>
                  <TableCell>{e.age}</TableCell>
                </TableRow>
                <TableRow>
                <TableCell> BloodGroup</TableCell>
                  <TableCell>{e.blood}</TableCell>
                </TableRow>
                <TableRow>
                <TableCell>Height</TableCell>
                  <TableCell>{e.height}</TableCell>
                </TableRow>
                <TableRow>
                <TableCell>Weight</TableCell>
                  <TableCell>{e.weight}</TableCell>
                </TableRow>
                <TableRow>
                <TableCell>Gender</TableCell>
                  <TableCell>{e.gender}</TableCell>
                </TableRow>
                <TableRow>
                <TableCell>MaritalStatus</TableCell>
                <TableCell>{e.weight}</TableCell>
                </TableRow>
                <TableRow>
                <TableCell> AddressLine1</TableCell>
                  <TableCell>{e.address1}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>AddressLine2</TableCell>
                  <TableCell>{e.address2}</TableCell>
                </TableRow>
                <TableRow>
                 <TableCell> City </TableCell>
                  <TableCell>{e.city}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>State</TableCell>
                  <TableCell>{e.state}</TableCell>
                </TableRow>
                <TableRow>
                 <TableCell> Country</TableCell>
                  <TableCell>{e.country}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>  Pincode</TableCell>
                  <TableCell>{e.postcode}</TableCell>
                </TableRow>
              </Table>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubmissionData;
