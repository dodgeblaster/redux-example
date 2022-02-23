import React from 'react'

/**
 * Styles
 */
const containerStyles =
    'mt-2 border border-gray-200 rounded overflow-hidden divide-y'
const articleStyles = 'px-4 py-4'
const articleTitle = 'font-bold text-xl'
const articleContent = 'text-sm text-gray-600'

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

class ApiList extends React.Component {
    state = {
        list: mockList
    }

    render() {
        return (
            <div className={containerStyles}>
                {this.state.list.map((x) => (
                    <div key={x.id} className={articleStyles}>
                        <p className={articleTitle}>{x.name}</p>
                        <p className={articleContent}>{x.content}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default ApiList
