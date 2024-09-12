import React , {useEffect,useState} from 'react';
import '../styles/Skills.css';


export default function SkillBar({lang,perc}){
    const [widths , setWidths] = useState(0);

    useEffect(
        ()=>{
            requestAnimationFrame(()=>setWidths(perc));
        },
        [perc]
    );

    return (
        <div className='skill'>
            <span className='skill-name'>{lang}</span>
            <div className='skill-bar-outer'>
                <div className='skill-bar-inner' style={{
                    width : widths , 
                    transition : 'width 1.5s ease-in-out',
                }}>
                </div>
            </div>
        </div>
    );
}