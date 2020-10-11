import React, { useEffect, useState } from 'react';
import './Component.css';

function Clock() {
    const [hours, setHours] = useState(new Date().getHours());
    const [min, setMin] = useState(new Date().getMinutes());
    const [seco, setSeco] = useState(new Date().getSeconds());
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth());
    const [day, setDay] = useState(new Date().getDay());

    useEffect(() => {
        setInterval(() => {
            setSeco(("0" + new Date().getSeconds()).slice(-2)) 
            setMin(("0" + new Date().getMinutes()).slice(-2)) 
            setHours(("0" + new Date().getHours()).slice(-2)) 
            setYear(new Date().getFullYear()) 
            setMonth(new Date().getMonth()) 
            setDay(new Date().getDay()) 
        },1000);
    }, []);

     return(
         <div className="Date">
            <div className="Clock">
                <div className="ClockMain">
                    <span>{hours} : {min}</span>
                </div>
                <div className="ClockSide">
                    <span>PM</span>
                    <span>{seco}</span>
                </div>
            </div>
            <div className="dateseo">
                <span>{year}년 {month}월 {day}일</span>
            </div>
        </div>
            
        
    )
}

export default Clock;