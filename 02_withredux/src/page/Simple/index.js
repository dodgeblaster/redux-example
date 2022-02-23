import { useState } from 'react'

function App() {
    // state or store
    const [count, setCount] = useState(0)

    // handlers or actions
    function add() {
        setCount(count + 1)
    }

    // render
    return <button onClick={add}>{count}</button>
}

export default App
