import {
    FETCH_POSTS_BEGIN,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE
} from '../actions/types'

import { call, put, takeEvery } from 'redux-saga/effects'

const wait = () => new Promise((r) => setTimeout(r, 1000))
const api = {
    getPosts: async () => {
        await wait()
        if (Math.random() > 0.5) {
            throw new Error('Mock Post Error')
        }
        return fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
            res.json()
        )
    }
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* postFetch(action) {
    try {
        const result = yield call(api.getPosts)
        yield put({ type: FETCH_POSTS_SUCCESS, payload: result.slice(0, 2) })
    } catch (e) {
        yield put({
            type: FETCH_POSTS_FAILURE,
            payload: { message: e.message }
        })
    }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
    yield takeEvery(FETCH_POSTS_BEGIN, postFetch)
}

// /*
//   Alternatively you may use takeLatest.

//   Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
//   dispatched while a fetch is already pending, that pending fetch is cancelled
//   and only the latest one will be run.
// */
// function* mySaga() {
//     yield takeLatest('USER_FETCH_REQUESTED', fetchUser)
// }

export default mySaga
