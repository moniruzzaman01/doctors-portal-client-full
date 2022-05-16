import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import { toast } from "react-toastify";

const Modal = ({ modalData, setModal }) => {
  const [authUser] = useAuthState(auth);
  const { name, slots } = modalData;

  //----------------------------------
  const handleModalForm = async (event) => {
    event.preventDefault();
    const date = event.target.date.value;
    const slot = event.target.slot.value;
    const patientName = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const appointment = {
      treatmentName: name,
      date,
      slot,
      patientName,
      patientEmail: email,
      phone,
    };
    await axios.post(`http://localhost:5000/appointment`, appointment);
    setModal(false);
    toast.success("Appointment added");
  };

  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="appointmentModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="appointmentModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-10">{name}</h3>
          <form onSubmit={handleModalForm}>
            <input
              value={"April 30,2020"}
              disabled
              type="text"
              name="date"
              className="input mb-5 input-bordered w-full max-w-lg"
            />
            <select
              name="slot"
              defaultValue={""}
              className="select select-bordered w-full max-w-lg mb-5"
            >
              {slots?.map((slot, index) => (
                <option value={slot} key={index}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={authUser?.displayName}
              disabled
              name="name"
              className="input mb-5 input-bordered w-full max-w-lg"
            />
            <input
              type="text"
              value={authUser?.email}
              disabled
              name="email"
              className="input mb-5 input-bordered w-full max-w-lg"
            />
            <input
              required
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input mb-5 input-bordered w-full max-w-lg"
            />
            <button type="submit" className="btn btn-accent w-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
