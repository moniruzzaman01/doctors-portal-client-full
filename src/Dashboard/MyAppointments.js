import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const MyAppointments = () => {
  const [authUser] = useAuthState(auth);
  const [appointments, setAppointments] = useState([]);

  //----------------------
  useEffect(() => {
    const email = authUser?.email;
    if (email) {
      axios(`http://localhost:5000/appointmentByEmail/${email}`).then((res) =>
        setAppointments(res.data)
      );
    }
  }, [authUser]);

  return (
    <div>
      <h2 className=" text-5xl mb-10">My appointments</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Treatment</th>
              <th>Time</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a, key) => (
              <tr key={key}>
                <th>{key + 1}</th>
                <td>{a.treatmentName}</td>
                <td>{a.slot}</td>
                <td>{a.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
