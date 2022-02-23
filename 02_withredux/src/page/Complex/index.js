import { useState } from 'react'
import Form from './Form'

import List from './List'

function App() {
    // state or store
    const [count, setCount] = useState(0)

    // handlers or actions
    function add() {
        setCount(count + 1)
    }

    // render
    return (
        <div>
            <h3>Form</h3>
            <Form addToList={add} listLength={count} />
            <h3>List</h3>
            <List listLength={count} />
        </div>
    )
}

export default App
