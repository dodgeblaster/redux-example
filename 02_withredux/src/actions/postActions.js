import { FETCH_POSTS } from './types'

/**
 * Mock Data
 */
const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique libero magna, id tempor neque tincidunt a. Ut sit amet gravida nisl, sed facilisis ligula. Cras non enim eget dolor semper dictum. Sed vestibulum dapibus odio, id volutpat tellus aliquam bibendum. Sed tristique consequat metus sit amet congue. Integer ullamcorper eros at aliquam hendrerit. Nam sit amet odio nisl. Morbi neque nibh, molestie a enim a, efficitur interdum ligula. Cras sed volutpat erat. Integer vitae enim sagittis purus accumsan venenatis lobortis et nisl. Suspendisse potenti.'
const mockList = [
    {
        id: '1',
        name: 'Article 1',
        content: lorem
    },
    {
        id: '2',
        name: 'Article 2',
        content: lorem
    },
    {
        id: '3',
        name: 'Article 3',
        content: lorem
    }
]

export const fetchPosts = () => {
    return {
        type: FETCH_POSTS,
        payload: mockList
    }
}
