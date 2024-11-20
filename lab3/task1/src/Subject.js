import React from 'react';

function Subject(props){
    return(
        <div>
            <h3>{props.subjectName}</h3>
            <p>{props.description}</p>
        </div>
    )
}
function Card(props){
    return(
        <div>{props.description}</div>
    )
}
export {Subject, Card};