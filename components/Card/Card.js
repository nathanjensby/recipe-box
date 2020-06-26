import React, { useContext } from 'react';
import styles from './Card.scss';
import { ModalContext } from '../../utils';

export const Card = ({ id, recipe }) => {
    const { toggleModal } = useContext(ModalContext);
    const handleButtonClick = () => {
        toggleModal(recipe);
    };
    return (
        <button className={styles.root} onClick={handleButtonClick}>
            {recipe.title}
        </button>
    );
};
