import React, { useEffect } from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ onModalClose, children }) => {
    useEffect(() => {
        const handleKeyDown = event => {
            if (event.code === 'Escape') {
                onModalClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onModalClose]);

    const handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            onModalClose();
        }
    };
    return (
        <div className={styles.overlay} onClick={handleBackdropClick}>
            <button type="button" className={styles.close} onClick={onModalClose}></button>
            <div className={styles.modal}>
              <div className={styles.modal}>{children}</div>
            </div>
        </div>
    );
};
Modal.propTypes = {
  onModalClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;