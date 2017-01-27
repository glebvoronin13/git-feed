import { FETCH_REPOS_START, FETCH_REPOS_SUCCESS, FETCH_REPOS_ERROR } from '../constants/repos';

const initialState = {
    fetching: false,
    userName: null,
    items: [],
    error: null
};

export default function repos(state = initialState, action) {
    switch (action.type) {
        case FETCH_REPOS_START:
            return { ...state, fetching: true, userName: action.userName };
        case FETCH_REPOS_SUCCESS:
            return { ...state, fetching: false, items: action.payload, error: null };
        case FETCH_REPOS_ERROR:
            return { ...state, fetching: false, items: [], error: { status: action.payload.status, message: action.payload.data.message } };
        default:
            return state;
    }
}