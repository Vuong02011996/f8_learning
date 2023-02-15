import React, { useContext } from 'react';
import { AppContext } from '../Context/AppProvider';

export default function Header() {
    const { userData, isOpen, setIsOpen, isDay, setIsDay, themeStyled } = useContext(AppContext);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleTheme = () => {
        setIsDay(!isDay);
    };

    return (
        <div
            className="header"
            style={{
                ...themeStyled,
                display: 'flex',
                justifyContent: 'right',
                padding: '10px',
                gridColumn: isOpen ? '2 / 4' : '1 / 4',
                gridRow: '1 / 2',
                alignItems: 'center',
            }}
        >
            <div>Hello! {userData.last_name} </div>
            <p style={{ cursor: 'pointer', marginLeft: 5, marginRight: 5 }} onClick={toggleSidebar}>
                My profile
            </p>
            {/* Đoạn html tạo switch chuyển màu sáng tối */}
            <label className="switch">
                <input type="checkbox" checked={!isDay} onChange={handleTheme} />
                <span className="slider round"></span>
            </label>
        </div>
    );
}
