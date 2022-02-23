import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../../../actions/postActions'

function List(props) {
    const [fetching, setFetching] = useState(true)
    useEffect(() => {
        props.fetchPosts()
    }, [])

    return (
        <div>
            {props.posts.map((x) => (
                <div
                    key={x.id}
                    style={{
                        height: 20,
                        marginBottom: 2,
                        background: '#222'
                    }}
                >
                    {x.title}
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    posts: state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateToProps, { fetchPosts })(List)
