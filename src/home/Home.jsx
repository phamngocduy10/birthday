import React from 'react'
import { useState, useEffect } from 'react';
import './styles.css'
import Typewriter from 'typewriter-effect';



export default function Home() {
    // const [text, setText] = useState("");
    const [showElement, setShowElement] = useState(false);
    useEffect(() => {
        setTimeout(function () {
            setShowElement(true);
        }, 11000);
    }, []);

    return (
        <div className='container' style={{}}>
            <div style={{ position: "absolute" }}>
                <h1 className='hello'>HELLO...</h1>
            </div>
            <div className='think'>
                <img className='thinking' src={require('../images/thinking.png')} />
                <div style={{ position: "relative", color: "hsl(0, 0%, 68%)", fontWeight: "bold", fontFamily: "Anonymous Pro", letterSpacing: "7px", overflow: "hidden", borderRight: "2px solid hsl(0, 0%, 80%)", whiteSpace: "nowrap", fontSize: "1.5vw" }} >Hôm nay là ngày gì nhỉ ?</div>
                {showElement &&
                    <Typewriter

                        onInit={(typewriter) => {

                            typewriter

                                .typeString('<span style={{ position: "relative", color: "hsl(0, 0%, 68%)", fontWeight: "bold", fontFamily: "Anonymous Pro", letterSpacing: "7px", overflow: "hidden", borderRight: "2px solid hsl(0, 0%, 80%)", whiteSpace: "nowrap", fontSize: "1.5vw" }} >Hôm nay là ngày gì nhỉ ?</span>')

                                .pauseFor(1000).pasteString()
                                .deleteAll()
                                .typeString("Welcomes You")
                                .start();
                        }}
                    />}
            </div>
        </div>
    )
}

