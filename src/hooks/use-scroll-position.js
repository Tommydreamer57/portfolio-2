import { useEffect } from 'react';

export default location => useEffect(() => {
    const key = `scroll-position: ${location}`;
    const position = localStorage.getItem(key);
    if (position) window.scrollTo(0, position);
    return () => localStorage.setItem(key, window.scrollY);
}, []);
