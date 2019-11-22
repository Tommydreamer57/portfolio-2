import { useEffect } from 'react';

export default location => useEffect(() => {

    const key = `scroll-position: ${location}`;

    const position = localStorage.getItem(key);

    console.log({ location, key, position });

    if (position) window.scrollTo(0, position);

    return () => {
        console.log({ location, key, position, scrollY: window.scrollY });
        localStorage.setItem(key, window.scrollY);
    }
}, []);
