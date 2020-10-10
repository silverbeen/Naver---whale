import React, { useEffect, useState } from 'react';
import './Component.css';

function Clock() {
    //시간
    const [hours, setHours] = useState(new Date().getHours());
    useEffect(()=>{
        setInterval(() => {
            setHours(("0" + new Date().getHours()).slice(-2)) 
        },1000);
    })
    //분
    const [min, setMin] = useState(new Date().getMinutes());
    useEffect(()=>{
        setInterval(() => {
            setMin(("0" + new Date().getMinutes()).slice(-2)) 
        },1000);
    })
    // 초
    const [seco, setSeco] = useState(new Date().getSeconds());
    useEffect(()=>{
        setInterval(() => {
            setSeco(("0" + new Date().getSeconds()).slice(-2)) 
        },1000);
    })
    //년
    const [year, setYear] = useState(new Date().getFullYear());
    useEffect(()=>{
        setInterval(() => {
            setYear(new Date().getFullYear()) 
        },1000);
    })
    //월
    const [month, setMonth] = useState(new Date().getMonth());
    useEffect(()=>{
        setInterval(() => {
            setMonth(new Date().getMonth()) 
        },1000);
    })
    //일
    const [day, setDay] = useState(new Date().getDay());
    useEffect(()=>{
        setInterval(() => {
            setDay(new Date().getDay()) 
        },1000);
    })
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