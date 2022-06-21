import react from "react"
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notify = (value)=> {
        toast(value, {
            className: "custom-toast",
            draggable: true,
            position: toast.POSITION.TOP_RIGHT,
        });
    }


export default Notify