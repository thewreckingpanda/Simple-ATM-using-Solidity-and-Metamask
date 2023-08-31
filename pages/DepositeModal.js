import React, { useState } from 'react';
import styles from "./Modal.module.css";

export default function DepositModal(props) {
   //const [showModal, setShowModal] = useState(true);
  // const toggleModal = () => {
  //   setShowModal(!showModal);
  // };
  function handleChange() {
    props.change(false);
 }

    return (
        <>
        {
            props.showDepositModal && <div className={styles.modal} >
                <div
                className={styles.overlay}></div>
                <div className={styles.modalContent}>
                    <h2>1 ETH has been Diposited</h2>
                    <button
                    className={styles.closeModal}
                    onClick={handleChange}
                    >
                    CLOSE</button>
                </div>
            </div>
        }
        </>
    )
}
