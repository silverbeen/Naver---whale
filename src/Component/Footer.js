import React from "react";
import './Component.css';
import FooterPopup from './FooterPopup';

function Footer() {
    

    return(
        <footer>
            {/* 팝업 */}
            <FooterPopup/>
            {/* 이동 */}
            <div className="footer-bottom">
                <div className="footer-left">
                    <button>스마트웨일</button>
                </div>
                {/* 왼쪽 하단  */}
                <div className="footer-rigth">
                    <span >신성동</span>
                    <span>할 일 목록</span>
                    <span>즐겨찾기</span>
                    <span>강은빈</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
