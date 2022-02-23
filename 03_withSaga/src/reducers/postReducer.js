import {
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_BEGIN,
    FETCH_POSTS_FAILURE
} from '../actions/types'

const initialState = {
    items: [],
    loading: false,
    error: false
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS_BEGIN:
            return {
                ...state,
                loading: true,
                error: false,
                items: []
            }
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                items: action.payload
            }
        case FETCH_POSTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.message,
                items: []
            }
        default:
            return state
    }
}

export default reducer
