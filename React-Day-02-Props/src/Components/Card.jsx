import React from 'react'

const Card = (props) => {
    return (
            console.log(props.user),
            console.log(props.age),
            <div className='card'>
                <img src={props.link} alt="" />
                <h1>{props.user}</h1>
                <p>My age is {props.age}</p>
                <button>About me</button>
            </div>
    )
}

export default Card;
