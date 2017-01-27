import { API } from '../misc/APIService';
import { FETCH_REPOS_START, FETCH_REPOS_SUCCESS, FETCH_REPOS_ERROR } from '../constants/repos';

export const fetchReposStart = (userName) => {
    return {
        type: FETCH_REPOS_START,
        userName
    }
};

export const fetchReposSuccess = (userName, data) => {
    return {
        type: FETCH_REPOS_SUCCESS,
        userName,
        payload: data
    }
};

export const fetchReposError = (userName, error) => {
    return {
        type: FETCH_REPOS_ERROR,
        userName,
        payload: error
    }
};

export const getUserRepos = (userName) => dispatch => {
    dispatch(fetchReposStart(userName));
    API.get('/users/'+userName+'/repos').subscribe(
        data => {
            if (data.length > 0) {
                dispatch(fetchReposSuccess(userName, data));
            } else {
                dispatch(fetchReposError(userName, { status: 'NO_REPOS', data: { message: 'User has no public repos' }}))
            }

        },
        error => { dispatch(fetchReposError(userName, error));
        }
    )
};