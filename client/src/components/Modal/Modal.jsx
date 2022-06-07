import React from 'react';
import { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import { GlobalContext } from '../../GlobalContext/GlobalContext';

function Modal({ children, setLocalModal, cancel }) {
  const { setDetails } = useContext(GlobalContext);

  const onCancel = () => {
    setLocalModal((prev) => !prev);
  };
  useEffect(() => {
    return () => {
      // setLocalModal(false);
      setDetails({});
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div
        className={styles.modalBackground}
        onClick={(e) => e.stopPropagation()}
      >
        {cancel!=="one" &&
          <button className={styles.cancel} onClick={onCancel}>
          Close
        </button>
        }
        {children}
        <button className={styles.cancel} onClick={onCancel}>
          Close
        </button> 
        
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };
