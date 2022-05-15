import React from "react";
import Modal from "../Shared/Modal";

const AvailableAppointment = ({ service }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-slate-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title mx-auto text-primary font-bold mb-5">
          {name}
        </h2>
        <select
          defaultValue={""}
          className="select select-bordered w-full max-w-xs"
        >
          {slots.map((slot, index) => (
            <option className=" text-center" key={index}>
              {slot}
            </option>
          ))}
        </select>
        <div className="flex justify-center">
          <Modal>
            <label
              htmlFor="my-modal-3"
              className="btn btn-primary text-white my-5 modal-button"
            >
              Book Appointment
            </label>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default AvailableAppointment;
