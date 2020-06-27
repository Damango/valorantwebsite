import React from 'react';
import "./ArsenalItem.css"
import ImgHandler from "../../imgHandler/ImgHandler";
import { animated, useSpring } from 'react-spring'

const ArsenalItem = (props) => {



    const moveDown = useSpring({ from: { marginTop: 0 }, to: { marginTop: 40 }, config: { duration: 100 } })
    const test = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 200 } })

    let number = "100%";
    let theTop = 80;




    if (props.id === 14) {
        number = "60%"
        theTop = 50
    }
    else if (props.id != 12) {
        number = "90%"
    }

    else if (props.id === 12) {
        number = "75%"
        theTop = 50;
    }

    else {
        number = "auto"
        theTop = 20
    }


    let arsenalClass = {
        position: "relative",
        backgroundColor: "white",
        height: 400,
        width: 500,
        boxShadow: " 0px 0px 25px gray"
    }




    let imgClass = {
        position: 'relative',
        top: theTop,
        left: '50%',
        transform: "translateX(-50%)",
        width: number
    }

    function displayProps() {
        props.viewHandler(props.id)
    }




    return (<animated.div onClick={displayProps} style={Object.assign(arsenalClass, test, moveDown)} className="arsenal-item-container">
        <img src={ImgHandler[props.id].img} style={imgClass} />

        <div className="item-name"><span>{props.name}</span> <div className="moving-1" ></div>
            <div className="moving-2" ></div></div>

    </animated.div>);
}

export default ArsenalItem;