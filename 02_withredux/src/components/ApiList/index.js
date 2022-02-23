import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../../actions/postActions'

/**
 * Styles
 */
const containerStyles =
    'mt-2 border border-gray-200 rounded overflow-hidden divide-y'
const articleStyles = 'px-4 py-4'
const articleTitle = 'font-bold text-xl'
const articleContent = 'text-sm text-gray-600'

class ApiList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        return (
            <div className={containerStyles}>
                {this.props.posts.map((x) => (
                    <div key={x.id} className={articleStyles}>
                        <p className={articleTitle}>{x.name}</p>
                        <p className={articleContent}>{x.content}</p>
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(ApiList)
