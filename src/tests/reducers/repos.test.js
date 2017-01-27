import * as types from '../../constants/repos';
import reducer from '../../reducers/repos';

const initialState = {
    fetching: false,
    userName: null,
    items: [],
    error: null
};

describe('repos reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual(
            initialState
        )
    })

    it('should handle FETCH_REPOS_START', () => {
        expect(
            reducer(initialState, {
                type: types.FETCH_REPOS_START,
                userName: 'goeuro'
            })
        ).toEqual(

                {
                    userName: 'goeuro',
                    fetching: true,
                    error: null,
                    items: []
                }
        )
    })

    it('should handle FETCH_REPOS_SUCCESS', () => {
        expect(
            reducer(initialState, {
                type: types.FETCH_REPOS_SUCCESS,
                payload: []
            })
        ).toEqual(

            {
                fetching: false,
                userName: null,
                items: [],
                error: null
            }
        )
    })

    it('should handle FETCH_REPOS_ERROR', () => {
        expect(
            reducer(initialState, {
                type: types.FETCH_REPOS_ERROR,
                payload: {
                    status: '404',
                    data: {
                        message: 'Not found'
                    }
                }
            })
        ).toEqual(

            {
                userName: null,
                fetching: false,
                error: {"message": "Not found", "status": "404"},
                items: []
            }
        )
    })
})