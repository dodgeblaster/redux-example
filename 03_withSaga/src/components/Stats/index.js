import React from 'react'
const buttonStyles = 'px-4 py-2 rounded bg-gray-800 text-white text-xs mb-4'

class Stats extends React.Component {
    state = {
        count: 0
    }

    handleButtonClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <button onClick={this.handleButtonClick} className={buttonStyles}>
                Count:{this.state.count}
            </button>
        )
    }
}

export default Stats
