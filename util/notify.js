import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notify = (value)=> {
        toast(value, {
            className: "custom-toast",
            draggable: true,
            position: toast.POSITION.TOP_RIGHT,
            delay:3000
        });
    }


export default Notify