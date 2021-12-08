import { useState, useEffect } from "react";

// function getStorageValue(key, defaultValue) {

//     if (typeof window !== "undefined") {
//         const saved = localStorage.getItem(key);
//         const initial = saved !== null ? JSON.parse(saved) : defaultValue;
//         return initial;
//     }
// }

// export const useLocalStorage = (key, defaultValue) => {


//     const [value, setValue] = useState(() => {
//         return getStorageValue(key, defaultValue);
//     });

//     useEffect(() => {
//         localStorage.setItem(key, JSON.stringify(value));
//     }, [key, value]);


//     return [value, setValue];
// };

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        if (typeof window !== "undefined") {
            const storedValue = localStorage.getItem(key);
            return storedValue == null ? defaultValue : JSON.parse(storedValue);
        }

    });

    useEffect(() => {
        const listener = (e) => {
            if (e.storageArea === localStorage && e.key === key) {
                setValue(JSON.parse(e.newValue));
            }
        };

        window.addEventListener("storage", listener);

        return () => {
            window.removeEventListener("storage", listener);
        };
    }, [key]);

    const setValueInLocalStorage = (newValue) => {
        setValue((currentValue) => {
            const result = typeof newValue === "function" ? newValue(currentValue) : newValue;
            localStorage.setItem(key, JSON.stringify(result));
            return result;
        });
    };

    return [value, setValueInLocalStorage];
};
