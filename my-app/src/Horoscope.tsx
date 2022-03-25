import React from 'react';
import TextBox from "./TextBox";
import './App.css';
import {useState} from "react";

// @ts-ignore
import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import axios from "axios";



function Horoscope() {

    //TODO: Fill in the ? with appropriate names/values for a horoscope.
//HINT: Look at the HoroscopeHandler's response in Main.java to choose a default useState value.

    const defaultValues : Matches = {
        'horoscope': ['apple', 'banana', 'coconut', 'orange', 'pineapple']
    }

    const [sun, setSun] = useState('Virgo');
    const [moon, setMoon] = useState('Cancer');
    const [rising, setRising] = useState('Libra');
    const [horoscope, setHoroscope] = useState(defaultValues['horoscope']);


    const requestHoroscope = () => {
        const toSend = {
                //TODO: Pass in the values for the data. Follow the format the route expects!
            sun : sun,
            moon : moon,
            rising : rising
    };

        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }

        //Install and import axios!
        //TODO: Fill in 1) location for request 2) your data 3) configuration
        axios.post('http://localhost:4567/horoscope', toSend, config)
            .then(response => {
                console.log(response.data);
                //TODO: Go to the Main.java in the server from the stencil, and find what field name you should put here.
                //Note: It is very important that you understand how this is set up and why it works!
                setHoroscope(response.data['horoscope']);
            })
            .catch(error => {
                console.log(error);
            });
    }

    interface Matches {
        [key: string]: string[];
    }


    return (
        <div className="Horoscope">
            <TextBox label={"Sun Sign"} change = {setSun}/>
            <TextBox label={"Moon Sign"} change = {setMoon}/>
            <TextBox label={"Rising Sign"} change = {setRising}/>
            <AwesomeButton onPress={requestHoroscope} type={"primary"}>
                Press
            </AwesomeButton>
            {horoscope.map(element => <div>{element}</div>)}
        </div>
    );
}

export default Horoscope;