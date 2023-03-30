import React from 'react';
import { useState } from 'react';
import Card from './Card';


const Index = () => {

    const [color,setColor]=useState();
    
    return (
        <>
        <div>
            <h1>Welcome To Homepage {color}</h1>
            <button type="button" onClick={() => setColor("blue")}>Blue</button>
            <button type="button" onClick={() => setColor("Red")}>Red</button>
            <button type="button" onClick={() => setColor("Green")}>Green</button>
            <button type="button" onClick={() => setColor("Pink")}>Pink</button>
        </div>

        <Card title={{name:'Shaheel'}} desc="i am lonly bro" link="https://www.google.com"/>
        <input type="text" value="shaheel"/>
        <input type="email" value="abc@gmail.com"/>
        </>
    );
};

export default Index;