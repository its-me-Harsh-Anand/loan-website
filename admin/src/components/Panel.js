import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generatePdf } from "../utils/generatePdf";


const sortByDate = (a, b) => {
  return new Date(b.createdAt) - new Date(a.createdAt);
};

function Panel() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  function handleUser(e, mobile) {
    e.preventDefault();
    navigate(`/user/${mobile}`);
  }
   
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/user/all`, {
        params: { auth_id: process.env.REACT_APP_ADMIN_AUTH_ID },
      })
      .then((res) => res.data)
      .then((data) => {
        const sortedData = data.sort(sortByDate);
        setUsers(sortedData);
      });
  }, []);

  return (
    <>
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Sr.</th>
          <th scope="col">Date</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Whatsapp</th>
          <th scope="col">Loan Type</th>
          <th scope="col">Loan Amount</th>
          <th scope="col">Approval Letter</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          let created = user.createdAt;
          const date = created.slice(0, 10);
          const time = created.slice(11, 19);
          return (
            <tr key={index} onClick={(e) => handleUser(e, user.user_mobile)}>
              <th scope="row">{index+1}</th>
              <td>{`${date} @ ${time}`}</td>
              <td>{user.user_fname}</td>
              <td>{user.user_mobile}</td>
              <td>{user.whatsapp_no}</td>
              <td>{user.loan_type}</td>
              <td>{user.loan_amount}</td>
              <td>
                <img
                  src="/img/pdf.svg"
                  alt="pdf"
                  style={{ height: "25px", cursor: "pointer" }}
                  onClick={(e) => generatePdf(e, user)}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
      <div className="print-div"></div>
      </>
  );
}

export default Panel;
