import React from "react";

const AvailableAppointment = ({ service, setModalData, setModal }) => {
  const { name, slots } = service;

  //---------------------------

  return (
    <div className="card lg:max-w-lg bg-slate-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title mx-auto text-primary font-bold">{name}</h2>
        <p className=" text-center uppercase">{slots[0]}</p>
        <p className=" text-center uppercase">{slots.length} Slots Available</p>
        <div className="flex justify-center">
          <label
            onClick={() => {
              setModalData(service);
              setModal(true);
            }}
            htmlFor="appointmentModal"
            className="btn btn-primary text-white my-3 modal-button"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AvailableAppointment;
