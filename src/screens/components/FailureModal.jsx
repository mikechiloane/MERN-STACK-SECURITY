import React from "react";

const FailureModal = ({ message, title }) => {
  return (
    <dialog id="failure_modal" className="modal modal-middle sm:modal-middle">
      <form method="dialog" className="modal-box">
        <h3 className="font-bold text-lg text-center">{title}</h3>
        <p className="py-1 text-center center px-16 mb-4">{message}</p>
        <div className="flex justify-center">
          <button
            className="btn btn-primary"
            onClick={() => window.failure_modal.close()}
          >
            Close
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default FailureModal;
