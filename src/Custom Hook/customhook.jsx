import { useEffect, useState } from "react";

const useCustomHook = () => { // হুকের নাম পরিবর্তন করে "useCustomHook" করলাম
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:5000/Menu');
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json();
                setMenu(data);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };

        fetchData();
    }, []);

    return [menu]; // সঠিকভাবে [menu] অ্যারে রিটার্ন করা হচ্ছে
}

export default useCustomHook;
