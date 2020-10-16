import React, { useState } from "react";
import './Component.css';
import PopupWeather from './FooterCom/PopupWeather';
import PopupTodo from './FooterCom/PopupTodo';

function Footer() {
    
    const [weather,setWeather]=useState(null);
    const [todo, setTodo]=useState(null);

    return(
        <footer>
            {/*날씨 */}
            <PopupWeather weather={weather}/>
            {/* 할 일 목록 */}
            <PopupTodo todo={todo}/>

            {/* 이동 */}
            <div className="footer-bottom">
                <div className="footer-left">
                    <button>스마트웨일</button>
                </div>
                {/* 왼쪽 하단  */}
                <div className="footer-rigth">
                    <span 
                        onMouseOver={()=>{setWeather("block")}}
                        onMouseLeave={()=>{setWeather("none")}}
                    >신성동</span>
                    <span 
                        onClick={()=>{setTodo("flex")}}
                        onDoubleClick={()=>{setTodo("none")}}
                    >할 일 목록</span>
                    <span>즐겨찾기</span>
                    <span>강은빈</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
