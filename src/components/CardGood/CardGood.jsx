
import { useState } from "react";
import Modal from "../Modal/Modal"
import s from "./CardGood.module.css";

function CardGood({ goodSingle }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => { setShowModal(true) }
  
  const closeModal =()=>{setShowModal(false)}

  return (
    <>
    <li key={goodSingle.key}>
      <div className={s.cardGood}>
        <h2 className={s.cardGood__category}>{goodSingle.category}</h2>
        <h3 className={s.cardGood__name}>{goodSingle.name}</h3>
        <div className={s.flexContainer}>
          <h3 className={s.cardGood__price}>{goodSingle.price}</h3>
          <button className={s.cardGood_button} onClick={openModal}>BUY</button>
        </div>
      </div>
    </li>
      {showModal && <Modal onCloseModal={closeModal} goodSingle={ goodSingle}/>}
      </>
  );
}

export default CardGood;
