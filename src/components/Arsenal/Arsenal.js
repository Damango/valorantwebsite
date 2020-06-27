import React from 'react';
import "./Arsenal.css"
import NavBar from "../NavBar/NavBar"
import ArsenalItem from "./ArsenalItem/ArsenalItem"
import ItemView from "./ItemView/ItemView"
import data from "../../data.json"
import ImgHandler from "../imgHandler/ImgHandler"
import { useState } from 'react'
const Arsenal = (props) => {

    const [itemState, setItemState] = useState(-1)

    function handleClose() {
        props.closeWindow(0)
    }

    function handleItemView(childData) {
        let i;
        for (i = 0; i < data.weapons.length; i++) {
            if (data.weapons[i].key === childData) {
                setItemState(i)
            }
        }
    }

    function handleItemClose() {
        setItemState(-1)
    }

    function renderItemView() {
        if (itemState === -1) {
            return ('')
        }
        else { return (<ItemView data={data.weapons[itemState]} closeItem={handleItemClose} image={ImgHandler[itemState].img} />) }
    }

    return (<div className="arsenal-container">
        <NavBar />
        {renderItemView()}
        <button onClick={handleClose}>X</button>
        <div className="arsenal-display">
            {data.weapons.map((weapon) => <ArsenalItem name={weapon.name} img={weapon.img} key={weapon.key} id={weapon.key} viewHandler={handleItemView} />)}
        </div>
    </div>);
}

export default Arsenal;