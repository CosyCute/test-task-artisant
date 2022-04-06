import React from 'react';
import "./Switch.scss"

interface SwitchProps{
    toggle: boolean,
    setToggle: Function
}

const Switch = (props: SwitchProps) => {
    return (
        <label onChange={() => {props.setToggle(!props.toggle)}} className="switch">
            <input type="checkbox" checked={props.toggle}/>
            <span className={props.toggle ? `slider green ` : `slider dark`}/>
        </label>
    );
};

export default Switch;