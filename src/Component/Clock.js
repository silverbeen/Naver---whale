import React, { useEffect, useState } from 'react';
import './Component.css';

function Clock() {
    const localDate= new Date();
    const [hours, setHours] = useState(localDate.getHours());
    const [min, setMin] = useState(localDate.getMinutes());
    const [sec, setSec] = useState(localDate.getSeconds());
    const [year, setYear] = useState(localDate.getFullYear());
    const [month, setMonth] = useState(localDate.getMonth());
    const [date, setDate] = useState(localDate.getDate());

    useEffect(() => {
        setInterval(() => {
            setSec(("0" + localDate.getSeconds()).slice(-2)) 
            setMin(("0" + localDate.getMinutes()).slice(-2)) 
            setHours(("0" + localDate.getHours()).slice(-2)) 
            setYear(localDate.getFullYear()) 
            setMonth(localDate.getMonth()+1) 
            setDate(localDate.getDate()) 
        }, 1000);
    });

     return(
         <div className="Date">
            <div className="Clock">
                <div className="ClockMain">
                    <span>{hours} : {min}</span>
                </div>
                <div className="ClockSide">
                    <span>PM</span>
                    <span>{sec}</span>
                </div>
            </div>
            <div className="dateseo">
                <span>{year}년 {month}월 {date}일</span>
            </div>
        </div>
            
        
    )
}

export default Clock;