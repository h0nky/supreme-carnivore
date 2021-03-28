import { ActionType } from '../action-types';
import { Action } from '../actions';

interface IRepositoriesState {
    loading: boolean;
    error: null|string|string[],
    data: string|string[]
}

const reducer = (state: IRepositoriesState, action: Action): IRepositoriesState => {
    const { type, payload } = action;
    switch(type) {
        case ActionType.SEARCH_REPOSITORIES:
            return { loading: true, error: null, data: [] };
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return { loading: false, error: null, data: payload };
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return { loading: false, error: payload, data: [] };
        default:
            return state; 
    }
};  

export default reducer;  