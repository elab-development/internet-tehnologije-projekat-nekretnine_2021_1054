import { useState, useEffect } from 'react';

function useTime() {
    const [timeInBelgrade, setTimeInBelgrade] = useState('');

    useEffect(() => {
        const fetchTime = async () => {
            try {
                //sa javnog apija trenutno vreme-sati i minuti
                const response = await fetch('http://worldtimeapi.org/api/timezone/Europe/Belgrade');
                const data = await response.json();
                const time = new Date(data.utc_datetime).toLocaleTimeString('en-US', {timeZone: 'Europe/Belgrade'});
                setTimeInBelgrade(time);
            } catch (error) {
                console.error('Error fetching time:', error);
            }
        };

        fetchTime();

        // updejt vremena svakog minuta
        const interval = setInterval(fetchTime, 60000);

        return () => clearInterval(interval);
    }, []);

    return timeInBelgrade;
}

export default useTime;