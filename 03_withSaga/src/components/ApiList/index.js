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

const loadingContainer =
    'border border-gray-200 rounded px-4 py-4 text-gray-600'
const errorContainer =
    'border border-gray-200 rounded px-4 py-4 text-gray-600 shadow text-sm'
const errorTitle = 'font-bold text-red-600 flex items-center'

/**
 * Icon
 */
const AlertIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 mr-1 text-red-600"
        viewBox="0 0 20 20"
        fill="currentColor"
    >
        <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
        />
    </svg>
)

/**
 * Component
 */
class ApiList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        if (this.props.loading) {
            return (
                <div className={loadingContainer}>
                    <p>Loading...</p>
                </div>
            )
        }

        if (this.props.error) {
            return (
                <div className={errorContainer}>
                    <p className={errorTitle}>
                        <AlertIcon /> Error
                    </p>
                    <p>{this.props.error}</p>
                </div>
            )
        }
        return (
            <div className={containerStyles}>
                {this.props.posts.map((x) => (
                    <div key={x.id} className={articleStyles}>
                        <p className={articleTitle}>{x.title}</p>
                        <p className={articleContent}>{x.body}</p>
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    posts: state.posts.items,
    loading: state.posts.loading,
    error: state.posts.error
})

export default connect(mapStateToProps, { fetchPosts })(ApiList)
