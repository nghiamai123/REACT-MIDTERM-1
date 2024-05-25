import React from 'react';

const Card = ({teacher}) => {
    console.log(teacher)
    return (
        <div className="card" style={{border :"2px solid", width: "200px", height:"auto" }}>
            <div className="card-body">
                <img src={teacher.image} alt="" />
                <h5 className="card-title">{
                    teacher.name
                }</h5>
                <p className="card-text">{
                    teacher.description
                }</p>
                <p className="card-text">{
                    teacher.class
                }</p>
                <p className="card-text">{
                    teacher.hobbies
                }</p>
            </div>
        </div>
    );
}

export default Card;