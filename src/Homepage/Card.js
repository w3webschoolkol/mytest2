import React from 'react';

const Card = (props) => {
    return(

        <>
<div className='card'>
            <h3>{props.title.name}</h3>
            <p>{props.desc}</p>
            <a href="{props.link}"><button>Read More</button></a>
        </div>
        </>

    );

};

export default Card;