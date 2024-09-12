import '../styles/Skills.css'
// import { useState, useEffect } from 'react';
import SkillBar from './SkillBar';

export default function Skills(){
    const skillList = [
        {
            lang : "Flutter/Dart - 90%",
            perc : '90%',
        },
        {
            lang : "C/C++ - 95%",
            perc : '95%',
        },
        {
            lang : "Kotlin - 60%",
            perc : '60%'
        },
        {
            lang : "Database : MySQL / PostgresQL - 70%",
            perc : "70%",
        },
        {
            lang : "Python - 80%",
            perc : "80%"
        },
        {
            lang : "HTML / CSS - 75%",
            perc : "75%",
        },
        {
            lang : "Javascript - 55%",
            perc : "55%"
        },
        {
            lang : "Data Structures and Algorithms - 95%",
            perc : "95%"
        }
    ];

    // const SkillBar = 

    return (
        <div id="skills">
            <div className='skill-container'>
                {skillList.map((skill,idx)=>{
                    return <SkillBar key = {idx} lang = {skill.lang} perc = {skill.perc} />
                })}
            </div>

        </div>
    );
}