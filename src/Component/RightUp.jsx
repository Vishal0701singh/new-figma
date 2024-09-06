import React, { useState } from 'react';
import { CiCircleQuestion } from "react-icons/ci";
import { BiGridVertical } from "react-icons/bi";
import './RightUp.css';

export default function RightUp() {
    const aboutMe=`Hello! I'm Vishal Singh. I'm a student of Ujjain Engineering College, Ujjain (4th year  computer science and engineering).

    I have good knowledge  in React.js, and java. I have a problem solving attitude, which make me different from other. Now I'm looking for an
    frontend internship like this.
    `;
    const experience=`I am a fresher. I have no experience.`;
    const [content, setContent]=useState(aboutMe);
    const [count, setCount]=useState(0);


    const handleAbout=()=>{
        setContent(aboutMe);
        setCount(0);
    }

    const handleExp=()=>{
        setContent(experience);
        setCount(1);
    }

    const handleRec=()=>{
        setContent(' ');
        setCount(2);
    }

    return (
        <>

            <div className="RightUp" >
                <CiCircleQuestion className='ques' />
                <BiGridVertical className='grid' />

            </div>
            <div className='bottom'>
                <nav className='navbar'>
                    <ul>
                        <li className={`${count==0?'btn':"jjk"}`} onClick={handleAbout} >About Me</li>
                        <li className={`${count==1?'btn':"jjk"}`} onClick={handleExp}>Experience</li>
                        <li className={`${count==2?'btn':"jjk"}`} onClick={handleRec}>Recommended</li>
                    </ul>
                </nav>
                <div className='content'>
                    <p> {content}</p>

                </div>

            </div>


        </>
    );
}
