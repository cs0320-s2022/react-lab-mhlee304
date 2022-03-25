

import React from 'react';
import logo from './logo.svg';
import './App.css';

function TextBox(props: any) {

    // @ts-ignore
    return (
        <div className="TextBox">
            <header className={'TextBox-header'}>
                <label htmlFor={props.label}>Enter {props.label}: </label>
                <input type={"text"} onChange={event => props.change(event.target.value)}/>
            </header>
        </div>
    );
}

export default TextBox;