import '../assets/css/home.css'
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import VanillaTilt from 'vanilla-tilt';

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);

    return <div ref={tilt} {...rest} >
        {props.card}
    </div>;
}


function Card({ img, head, subText, price, herf }) {
    const options = {
        scale: 1.0,
        speed: 10,
        max: 5
    };

    return (
        <Tilt className="box" options={options} card={
            <div className="card">
                <div className="img">
                    <img src={img} alt="" />
                </div>
                <div className="card-head">{head}</div>
                <div className="card-txt">{subText}</div>
                <div className="card-price">{price}</div>
                <div className="card-btn">
                    <button>
                        <a href={herf}>Carregue mais</a>
                    </button>
                </div>
            </div>
        } />
    );
}


export default Card;