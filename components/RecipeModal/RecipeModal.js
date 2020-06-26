import React, { useContext } from 'react';
import styles from './RecipeModal.scss';
import { ModalContext } from '../../utils';

const IngredientString = ({ ingredient }) => <li>{ingredient}</li>;
const StepString = ({ step, stepNum }) => <p>{`Step ${stepNum}: ${step}`}</p>;

export const RecipeModal = () => {
    const { state, hideModal } = useContext(ModalContext);
    const { recipe, isModalOpen } = state;
    return (
        isModalOpen && (
            <div className={styles.root} role="dialog" aria-modal>
                <div className={styles.modalContent}>
                    <div className={styles.modalGuts}>
                        <p className={styles.modalHeader}>{recipe.title}</p>
                        <button className={styles.closeButton} type="button" onClick={hideModal}>
                            close
                        </button>
                        <ul className={styles.ingredientsContent}>
                            {recipe.ingredients.map((ingredient, index) => (
                                <IngredientString key={index} ingredient={ingredient} />
                            ))}
                        </ul>
                        <div className={styles.instructionsContent}>
                            {recipe.directions.map((step, index) => (
                                <StepString key={index} step={step} stepNum={index + 1} />
                            ))}
                        </div>
                    </div>
                </div>
                <button
                    onClick={hideModal}
                    className={styles.overlay}
                    tabIndex="-1"
                    aria-hidden
                    aria-label="close"
                />
            </div>
        )
    );
};
