import { IMAGES, CONTENTS } from '../constants';
import { IAction } from 'src/action';

/**
 * @name loadingReducer
 * @param {state} initial_state_is_false
 * @param {action} action_which_is_dispatched_from_action_creator 
 * @description returns state (according to the dispatched type) to the store. 
 */
const loadingReducer = (state = false, action: IAction) => {
    switch (action.type) {
        case IMAGES.LOAD:
            return true;
        case IMAGES.LOAD_SUCCESS:
            return false;
        case IMAGES.LOAD_FAIL:
            return false;
        case CONTENTS.LOAD:
            return true;
        case CONTENTS.LOAD_SUCCESS:
            return false;
        case CONTENTS.LOAD_FAIL:
            return false;
        default:
            return state;
    }
};

export default loadingReducer;
