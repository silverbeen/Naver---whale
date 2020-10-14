import React from 'react';
import './Component.css';

function FooterPopup() {
    const modal = {
        
    }

    return (
        <>
        <div className="modal" id="popup-weather">
            <div className="weather-top">
                <div className="weather-date">
                    <span>14.6C</span>
                    <span>맑음</span>
                </div>
                <div className="weather-dust" >
                    <div>
                        <span>미세먼지</span>
                        <span>좋음</span>
                        <span>20~</span>
                    </div>
                    <div>
                        <span>미세먼지</span>
                        <span>좋음</span>
                        <span>20~</span>
                    </div>
                </div>
            </div>
            <div className="weather-middle">

            </div>
            <div className="weather-bottom">
                <span>유성구 신성동</span>
                <div>
                    <a href="https://www.weather.go.kr/w/index.do">기상청</a>
                    <a>더보기</a>
                </div>
            </div>
        </div>
        {/* <div className="modal" id="popup-todolist">

        </div> */}
        </>
    )
}

export default FooterPopup;