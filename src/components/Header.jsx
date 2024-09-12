import './Header.css';
import React from 'react';

const Header = () => {
    return (
        <div className="Header">
            <h3>중간고사 시험일 안내 🗓️</h3>
            <h4>시험일: 10월 16일, 10월 17일</h4>
            <h1>오늘의 날짜: {new Date().toDateString()}</h1>
        </div>
    );
};

export default React.memo(Header);
