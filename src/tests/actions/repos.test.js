import * as actions from '../../actions/repos';
import * as types from '../../constants/repos';

describe('repos actions', () => {
    it('should create an action to start fetching', () => {
        const userName = 'goeuro';
        const expectedAction = {
            type: types.FETCH_REPOS_START,
            userName
        };
        expect(actions.fetchReposStart(userName)).toEqual(expectedAction)
    });

    it('should create an action complete fetching', () => {
        const userName = 'goeuro';
        const data = [];
        const expectedAction = {
            type: types.FETCH_REPOS_SUCCESS,
            userName,
            payload: data
        };
        expect(actions.fetchReposSuccess(userName, data)).toEqual(expectedAction)
    });

    it('should create an action fetching error', () => {
        const userName = 'goeuro';
        const error = [];
        const expectedAction = {
            type: types.FETCH_REPOS_ERROR,
            userName,
            payload: error
        };
        expect(actions.fetchReposError(userName, error)).toEqual(expectedAction)
    })
});
