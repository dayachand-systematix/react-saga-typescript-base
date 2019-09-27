import { IMAGES, CONTENTS } from '../constants';
import { IAction } from 'src/action';

/**
 * @name pageReducer
 * @param {state} initial_state_is_1
 * @param {action} action_which_is_dispatched_from_action_creator 
 * @description returns state (according to the dispatched type) to the store. 
 */
const pageReducer = (state = 1, action: IAction) => {
    switch (action.type) {
        case IMAGES.LOAD_SUCCESS:
            return state + 1;
        case CONTENTS.LOAD_SUCCESS:
            return state + 1;
        default:
            return state;
    }
};

export default pageReducer;
