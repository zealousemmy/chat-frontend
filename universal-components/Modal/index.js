import React from "react";
import { BsCash } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { Form, FormRow, ModalWrapper } from "./styles";

const Modal = ({ showModal, setShowModal }) => {
  return (
    <ModalWrapper show={showModal}>
      <Form>
        <FaTimes
          className="modal__close"
          onClick={() => setShowModal(!showModal)}
        />
        <div className="modal__header">
          <h3>Cashout</h3>
          <p>Fill in the details to cashout your money in your account</p>
        </div>

        <div className="modal__content">
          <FormRow>
            <label>
              email
              <input type={"text"} placeholder="Enter your email" />
            </label>
            <label>
              Wallet ID
              <input type={"text"} placeholder="############" />
            </label>
          </FormRow>
          <FormRow>
            <label>
              amount
              <input type={"text"} placeholder="############(naira)" />
            </label>
            <label>
              bank name
              <select>
                <option>Select your bank here</option>
              </select>{" "}
            </label>
          </FormRow>
          <FormRow>
            <label>
              amount
              <input
                type={"text"}
                placeholder="Input your bank account number"
              />
            </label>
          </FormRow>
        </div>
        <div className="modal__footer">
          <button className="modal__footerButton">
            cashout <BsCash />
          </button>
        </div>
      </Form>
    </ModalWrapper>
  );
};

export default Modal;
