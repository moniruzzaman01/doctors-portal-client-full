import React, { useEffect, useState } from "react";
import chair from "../../assets/images/chair.png";
import Footer from "../Shared/Footer";
import AvailableAppointment from "./AvailableAppointment";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import axios from "axios";
import Modal from "../Shared/Modal";
import { format } from "date-fns";
import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner";

const Appoinment = () => {
  // const [services, setServices] = useState([]);
  const [modal, setModal] = useState(null);
  const [modalData, setModalData] = useState({});
  const [date, setDate] = useState(new Date());
  const formattedDate = format(date, "PP");

  //------------------------------

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["services", formattedDate], () =>
    fetch(`http://localhost:5000/services/?date=${formattedDate}`).then((res) =>
      res.json()
    )
  );

  // useEffect(() => {
  //   axios(`http://localhost:5000/services/?date=${formattedDate}`).then(
  //     ({ data }) => setServices(data)
  //   );
  // }, [date]);

  return (
    <section>
      {isLoading && <Spinner />}
      <div className="hero lg:my-20">
        <div className="hero-content flex-col md:flex-row-reverse lg:flex-row-reverse">
          <img
            src={chair}
            className="max-w-sm rounded-lg shadow-2xl lg:ml-10"
            alt=""
          />
          <div className=" lg:mr-10">
            <DayPicker mode="single" selected={date} onSelect={setDate} />
          </div>
        </div>
      </div>
      <div className="my-10">
        <h4 className="text-primary text-center text-3xl mb-10 lg:mb-20">
          Available Appointments on {format(date, "PP")}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-20 mx-5">
          {services?.map((service, index) => (
            <AvailableAppointment
              key={index}
              service={service}
              setModalData={setModalData}
              setModal={setModal}
            ></AvailableAppointment>
          ))}
        </div>
        {modal && (
          <Modal
            setModal={setModal}
            modalData={modalData}
            date={date}
            refetch={refetch}
          ></Modal>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default Appoinment;
