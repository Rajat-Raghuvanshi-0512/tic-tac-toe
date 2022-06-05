import React, { useState } from 'react'
import { CalculateWinner } from '../../assets/CalculateWinner'
import Square from '../Square/Square'
import './Board.css'

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [isXnext, setIsXnext] = useState(false);
    const winnerName = CalculateWinner(squares);
    const handleClick = (index) => {
        if (squares[index] || winnerName) return;
        setSquares(prev => {
            return prev.map((item, i) => {
                if (i === index) {
                    return isXnext ? 'X' : 'O'
                }
                return item
            })
        })
        setIsXnext(!isXnext)
    }
    const render = (position) => {
        return <Square
            value={squares[position]}
            onClick={() => handleClick(position)} />

    }
    return (
        <div className='board_main'>
            {winnerName ?
                <h1 className='board_title'>{winnerName} is the winnner!</h1>
                :
                squares.every(square => square != null) ?
                    <h1 className='board_title'>Game Over!</h1>
                    :
                    <h1 className='board_title'>{isXnext ? 'X\'s turn' : '0\'s turn'}</h1>
            }
            <div className='board_row'>
                {render(0)}
                {render(1)}
                {render(2)}
            </div>
            <div className='board_row'>
                {render(3)}
                {render(4)}
                {render(5)}
            </div>
            <div className='board_row'>
                {render(6)}
                {render(7)}
                {render(8)}
            </div>
            {
                winnerName || squares.every(square => square != null) ?
                    <button className='board_button' onClick={() => setSquares(Array(9).fill(null))}>Play Again</button>
                    :
                    <button className='board_button' onClick={() => setSquares(Array(9).fill(null))}>Reset</button>
            }
        </div>
    )
}

export default Board