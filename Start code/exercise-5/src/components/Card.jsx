import React from 'react';

const Card = ({item}) => {
    console.log(item)
    const {image, name, description, hobbies, classi } = item;
    return (
        <div className="card" style={{border :"2px solid", width: "200px", height:"auto" }}>
            <div className="card-body">
                <img src={image} alt="" />
                <h5 className="card-title">{
                    name
                }</h5>
                <p className="card-text">{
                    description
                }</p>
                <p className="card-text">{
                    classi
                }</p>
                <p className="card-text">{
                    hobbies
                }</p>
            </div>
        </div>
    );
}

export default Card;