import { FETCH_POSTS_BEGIN } from './types'

export const fetchPosts = () => {
    return {
        type: FETCH_POSTS_BEGIN,
        payload: {}
    }
}
