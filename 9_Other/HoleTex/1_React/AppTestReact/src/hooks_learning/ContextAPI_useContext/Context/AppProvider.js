import { createContext, useEffect, useState } from 'react';

// Bước 1: tạo context API có tên là AppContext
export const AppContext = createContext({});

// Bước 2: export component AppProvider cái mà bọc lại những component con sẽ sử dụng dữ liêu của AppContext
export const AppProvider = ({ children }) => {
    // Dữ liệu userData có thể dùng ở bất cứ component nào nên ta để ở AppContext
    const [userData, setUserData] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const [isDay, setIsDay] = useState(true);

    const themeStyled = {
        day: {
            backgroundColor: 'rgb(228, 228, 228)',
            color: 'black',
        },
        night: {
            backgroundColor: 'black',
            color: 'white',
        },
    };

    useEffect(() => {
        fetch('https://reqres.in/api/users/2')
            .then((res) => res.json())
            .then(({ data }) => {
                console.log({ data });
                setUserData(data);
            });
    }, []);

    // Cung cấp những dữ liệu cho component con cháu bằng props value
    return (
        <AppContext.Provider
            value={{ userData, isOpen, setIsOpen, isDay, setIsDay, themeStyled: themeStyled[isDay ? 'day' : 'night'] }}
        >
            {children}
        </AppContext.Provider>
    );
};
