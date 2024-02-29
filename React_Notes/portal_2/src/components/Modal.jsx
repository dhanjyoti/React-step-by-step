import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from "@mui/icons-material/Download";
import { useRef } from "react";

const Modal = ({ onClose }) => {
  const modalRef = useRef();

  const closeModal = (event) => {
    if (modalRef.current === event.target) {
      onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="mt-10 flex flex-col gap-5 text-white">
        <button onClick={onClose} className="place-self-end">
          <CloseIcon size={30} />
        </button>
        <div className="bg-indigo-600 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4">
          <h1 className="text-3xl font-extrabold">DOWNLOAD FREE EBOOK</h1>
          <p className="text-3xl font-bold max-w-md text-center">
            Want to learn How to Crack Web Development Interviews
          </p>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 text-black border-gray-300 rounded-md"
            />
            <button className="mt-4 w-full items-center justify-center gap-2 px-5 py-3 font-medium rounded-md bg-black">
              <DownloadIcon />
              Download eBook
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
