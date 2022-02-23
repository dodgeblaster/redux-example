import { connect } from 'react-redux'
import { createPost } from '../../../../actions/postActions'

function SectionOne(props) {
    return <button onClick={props.createPost}>Create Post</button>
}

export default connect(null, { createPost })(SectionOne)
