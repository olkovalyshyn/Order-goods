import { useState, useEffect } from "react";

import ErrorNameMessage from "../ErrorNameMessage/ErrorNameMessage";
import closeModalImg from "../../svg/close.svg";
import s from "./Modal.module.css";

function Modal({ goodSingle, onCloseModal }) {
  const [inputName, setInputName] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [errorNameField, setErrorNameField] = useState("");
  const [errorNumberField, seterrorNumberField] = useState("");
  const [isErrorGeneral, setIsErrorGeneral] = useState(false);

  useEffect(() => {
    if (!errorNameField & !errorNumberField) {
      setIsErrorGeneral(false);
    } else {
      setIsErrorGeneral(true);
    }
  }, [errorNameField, errorNumberField]);

  const isOnlyLetters = /^[a-zA-Zа-яА-Я]*$/.test(inputName);
  const isOnlyNumbers = /^[0-9]*$/.test(inputNumber);

  const hundleInputName = (event) => {
    setInputName(event.currentTarget.value);
  };

  const hundleInputNumber = (event) => {
    setInputNumber(event.currentTarget.value);
  };

  const validationName = () => {
    if (inputName.length === 0) {
      setErrorNameField("This field in required");
    } else if (!isOnlyLetters) {
      setErrorNameField("Only letters allowed");
    } else {
      setErrorNameField("");
    }
  };

  const validationNumber = () => {
    if (inputNumber.length === 0) {
      seterrorNumberField("This field in required");
    } else if (!isOnlyNumbers) {
      seterrorNumberField("Only numbers allowed");
    } else if (inputNumber.length !== 12) {
      seterrorNumberField("Should contain 12 characters");
    } else {
      seterrorNumberField("");
    }
  };

  const hundleOrder = () => {
    if (!errorNameField & !errorNumberField) {
      console.log("Name: ", inputName);
      console.log("Number: ", inputNumber);
    }

    validationName();
    setInputName("");

    validationNumber();
    setInputNumber("");
  };

  const hundleBlur = () => {
    validationName();
    validationNumber();
  };

  return (
    // console.log("!!!category", goodSingle.category),
    <div className={s.backdrop}>
      <div className={s.modal}>
        <li key={goodSingle.key}>
          <div className={s.cardGood}>
            <h2 className={s.cardGood__category}>{goodSingle.category}</h2>
            <h3 className={s.cardGood__name}>{goodSingle.name}</h3>
            <div className={s.flexContainer}>
              <h3 className={s.cardGood__price}>{goodSingle.price}</h3>

              <input
                className={errorNameField ? s.cardGood_inputError : s.cardGood_inputName}
                  type="text"
                  placeholder="Name"
                  value={inputName}
                  onChange={hundleInputName}
                  onBlur={hundleBlur}
                ></input>

                {errorNameField && <div className={s.cardGood_errorNameField}>{errorNameField}</div>}

              <input
                className={errorNumberField ? s.cardGood_inputError : s.cardGood_inputNumber}
                type="tel"
                placeholder="Number"
                value={inputNumber}
                onChange={hundleInputNumber}
                onBlur={hundleBlur}
              ></input>

              {errorNumberField && <div className={s.cardGood_errorNumberField}>{errorNumberField}</div>}

              <button
                type="submit"
                className={s.cardGood_BtnSubmit}
                onClick={hundleOrder}
              >
                ORDER
              </button>
            </div>
          </div>
        </li>

        <button className={s.closeModalBtn} onClick={onCloseModal}>
          <img src={closeModalImg} alt="closeModalImg"></img>
        </button>
      </div>
    </div>
  );
}

export default Modal;
