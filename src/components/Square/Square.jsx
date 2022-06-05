import React from 'react'
import './Square.css'

const Square = ({ value, onClick, isWinningSquare }) => {
    return (
        <button
            className='square_button'
            onClick={onClick}
            style={{ backgroundColor: isWinningSquare && '#ff0000', color: isWinningSquare && '#fff' }}
        >
            {value}
        </button>
    )
}

export default Square