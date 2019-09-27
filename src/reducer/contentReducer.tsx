import { CONTENTS } from '../constants';
import { IAction } from 'src/action';

/**
 * @name contentReducer
 * @param {state} initial_state
 * @param {action} action_which_is_dispatched_from_action_creator 
 * @description returns state to the store. 
 */
const contentReducer = (state = [], action: IAction) => {
    if (action.type === CONTENTS.LOAD_SUCCESS) {
        return [...state, ...action.content];
    }
    return state;
};

export default contentReducer;
