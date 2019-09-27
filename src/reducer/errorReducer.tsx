import { IMAGES } from '../constants';
import { IAction } from 'src/action';

/**
 * @name errorReducer
 * @param {state} initial_state
 * @param {action} action_which_is_dispatched_from_action_creator 
 * @description returns state (according to the dispatched type) to the store. 
 */
const errorReducer = (state = null, action: IAction) => {
    switch (action.type) {
        case IMAGES.LOAD_FAIL:
            return action.error;
        case IMAGES.LOAD:
        case IMAGES.LOAD_SUCCESS:
            return null;
        default:
            return state;
    }
};

export default errorReducer;
