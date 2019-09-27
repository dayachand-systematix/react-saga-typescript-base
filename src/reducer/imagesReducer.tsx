import { IMAGES } from '../constants';
import { IAction } from 'src/action';

/**
 * @name imagesReducer
 * @param {state} initial_state
 * @param {action} action_which_is_dispatched_from_action_creator 
 * @description returns state to the store. 
 */
const imagesReducer = (state = [], action: IAction) => {
    if (action.type === IMAGES.LOAD_SUCCESS) {
        return [...state, ...action.images];
    }
    return state;
};

export default imagesReducer;
