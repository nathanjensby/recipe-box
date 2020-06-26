import { useReducer } from 'react';

export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const modalReducer = (state, { type, payload: { recipe } }) => {
    console.log('state: ', state);
    console.log('type: ', type);
    console.log('recipe: ', recipe);
    switch (type) {
        case TOGGLE_MODAL:
            return { isModalOpen: !state.isModalOpen, recipe, key: Date.now() };

        case HIDE_MODAL:
            return { isModalOpen: false };
        default:
            return {};
    }
};

export const useModal = (initialState = { isModalOpen: false }) => {
    const [state, dispatch] = useReducer(modalReducer, initialState);

    const toggleModal = (recipe = {}) => {
        dispatch({ type: TOGGLE_MODAL, payload: { recipe } });
    };

    const hideModal = () => {
        dispatch({ type: HIDE_MODAL, payload: {} });
    };

    return { state, toggleModal, hideModal };
};
