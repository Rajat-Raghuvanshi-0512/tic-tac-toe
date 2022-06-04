import React from 'react'
import './Square.css'

const Square = ({ value }) => {
    return (
        <button className='square_button'>{value}</button>
    )
}

export default Square