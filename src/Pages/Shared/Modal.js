import React from "react";

const Modal = ({ children }) => {
  return (
    <div>
      {children}
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-10">Modal heading</h3>
          <form action="">
            <input
              value={"April 30,2020"}
              disabled
              type="text"
              name=""
              className="input mb-5 input-bordered w-full max-w-lg"
            />
            <input
              value={"10:05 am - 11:30 am"}
              disabled
              type="text"
              name=""
              className="input mb-5 input-bordered w-full max-w-lg"
            />
            <input
              type="text"
              name=""
              placeholder="Full Name"
              className="input mb-5 input-bordered w-full max-w-lg"
            />
            <input
              type="text"
              name=""
              placeholder="Phone Number"
              className="input mb-5 input-bordered w-full max-w-lg"
            />
            <input
              type="text"
              name=""
              placeholder="Email"
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
