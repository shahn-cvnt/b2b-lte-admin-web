import { useState, useEffect } from 'react';

function useLocalStorage (key, defaultValue) {
    const [value, setValue] = useState(() => {
        let currentValue;

        try {
            currentValue = JSON.parse(
                localStorage.getItem(key) || String(defaultValue)
            )
        } catch (e) {
            currentValue = defaultValue;
        }

        return currentValue;
    })
    
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key])


    return [value, setValue]
}

export { useLocalStorage }