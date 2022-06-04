import React from 'react'
import Square from '../Square/Square'
import './Board.css'

const Board = () => {
    return (
        <div className='board_main'>
            <div className='board_row'>
                <Square value={1} />
                <Square value={1} />
                <Square value={1} />
            </div>
            <div className='board_row'>
                <Square value={1} />
                <Square value={1} />
                <Square value={1} />
            </div>
            <div className='board_row'>
                <Square value={1} />
                <Square value={1} />
                <Square value={1} />
            </div>
        </div>
    )
}

export default Board