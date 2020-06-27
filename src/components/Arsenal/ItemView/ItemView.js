import React from 'react';
import "./ItemView.css"

import { animated, useSpring } from 'react-spring';

const ItemView = (props) => {


    const test1 = useSpring({ from: { opacity: 0, top: -20 }, to: { opacity: 1, top: 0 } });
    const test2 = useSpring({ from: { width: '0%' }, to: { width: '24%' } });
    const test3 = useSpring({ from: { marginLeft: -200 }, to: { marginLeft: 0 } });
    const test4 = useSpring({ from: { width: '0%' }, to: { width: '100%' } });
    const test5 = useSpring({ from: { marginLeft: -200, opacity: 0 }, to: { marginLeft: 50, opacity: 1 } })
    const test6 = useSpring({ from: { marginLeft: 200, opacity: 0 }, to: { marginLeft: 50, opacity: 1 } })




    return (<div className="item-view-container">


        <div className="left-side">

            <div className="name-and-price">
                <animated.div style={test3} className="view-name">{props.data.name}</animated.div>
                <animated.div style={test2} className="view-price">{props.data.cost}</animated.div>
                <animated.img style={test1} className="view-image" src={props.image} />
            </div>
            <div className="damage-info-container">
                <animated.div style={test1} className="damage-info-item"><div className="info-item-icon"></div> {props.data.damage_info.head.map((head) => <div className="info-item-wrapper"> <div className="info-damage">{head.damage} DMG</div><div className="info-distance">{head.distance}</div></div>)}</animated.div>
                <animated.div style={test1} className="damage-info-item"><div className="info-item-icon"></div> {props.data.damage_info.body.map((body) => <div className="info-item-wrapper"> <div className="info-damage">{body.damage} DMG</div><div className="info-distance">{body.distance}</div></div>)}</animated.div>
                <animated.div style={test1} className="damage-info-item"><div className="info-item-icon"></div> {props.data.damage_info.legs.map((legs) => <div className="info-item-wrapper"> <div className="info-damage">{legs.damage} DMG</div><div className="info-distance">{legs.distance}</div></div>)}</animated.div>

            </div>
        </div>
        <div className="right-side">
            <button className="item-view-close-button" onClick={props.closeItem}>X</button>
            <animated.div style={test4} className="skins-button">SKINS</animated.div>
            <animated.div style={test5} className="primary-fire"><p className="primary-title">Primary Fire</p>
                <p>
                    <span>Fire Mode: </span>
                    <span>{props.data.primary_fire.fire_mode}</span>
                </p>
                <p>
                    <span>Rate of Fire: </span>
                    <span>{props.data.primary_fire.rate_of_fire}</span>
                </p>
            </animated.div>
            <animated.div style={test6} className="secondary-fire"><p className="primary-title">Secondary Fire</p>

                <p>
                    <span>Fire Mode: </span>
                    <span>{props.data.secondary_fire.fire_mode}</span>
                </p>
                <p>
                    <span>Rate of Fire: </span>
                    <span>{props.data.secondary_fire.rate_of_fire}</span>
                </p>
            </animated.div>
            <animated.div style={test5} className="ammo-info"><p className="primary-title">Ammo Info</p>

                <p>
                    <span>Magazine Capacity: </span>
                    <span>{props.data.ammo_info.magazine}</span>
                </p>
                <p>
                    <span>Wall Penetration: </span>
                    <span>{props.data.ammo_info.wall_pen}</span>
                </p>
            </animated.div>
        </div>


    </div>);
}

export default ItemView;