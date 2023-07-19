import React from "react";

const SuccessModal = ({message}) => {

    return(
        <dialog id="success_modal" className="modal modal-middle sm:modal-middle">
        <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg text-center">Success</h3>
            <p className="py-1 text-center center px-16 mb-4">
{message}
            </p>
            <div className="flex justify-center">
                <button className="btn btn-primary" onClick={() => window.success_modal.close()}>Close</button>
            </div>
        </form>
    </dialog>

    );

}

export default SuccessModal;