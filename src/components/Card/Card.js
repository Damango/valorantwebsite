import React from 'react';
import "./Card.css";

const Card = (props) => {



    function renderArsenal() {
        props.changeView(1)
    }

    function renderAgents() {
        props.changeView(2)
    }


    if (props.cardID === 1) {
        return (
            < div className="card-container" onClick={renderArsenal}>
                <div className="card-overlay">
                    <div className="moving-bar-1"></div>
                    <div className="moving-bar-2"></div>
                    <div className="moving-bar-7"></div>
                    <div className="moving-bar-8"></div>
                    <div className="moving-bar-9"></div>
                    <div className="moving-bar-10"></div>
                </div>
                <div className="card-name">AGENTS
            </div>
                <div className="img1"></div>
                <div className="img2"></div>
                <div className="img3"></div>
            </div >
        );
    }

    else if (props.cardID === 2) {
        return (
            <div className="card-container" onClick={renderAgents} >

                <div className="card-overlay">
                    <div className="moving-bar-3"></div>
                    <div className="moving-bar-4"></div>
                    <div className="moving-bar-5"></div>
                    <div className="moving-bar-6"></div>
                </div>
                <div className="card-name right">ARSENAL
            </div>
                <div className="img4"></div>
                <div className="img5"></div>
                <div className="img6"></div>
            </div>
        );
    }

    else if (props.cardID === 3) {
        return (
            <div className="card-container">

                <div className="card-overlay">
                    <div className="moving-bar-1"></div>
                    <div className="moving-bar-2"></div>
                    <div className="moving-bar-7"></div>
                    <div className="moving-bar-8"></div>
                    <div className="moving-bar-9"></div>
                    <div className="moving-bar-10"></div>
                </div>
                <div className="card-name">RANKING
            </div>

                <div className="img7"></div>
                <div className="img8"></div>
                <div className="img9"></div>
            </div>
        );
    }




}

export default Card;