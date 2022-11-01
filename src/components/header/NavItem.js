import { useState, useEffect } from 'react';

export const NavItem = ({ anchorId, itemName, active }) => {
    const [anchorTarget, setAnchorTarget] = useState(null);

    useEffect(() => {
        setAnchorTarget(document.getElementById(anchorId));
    }, [anchorId]);

    const handleClick = event => {
        event.preventDefault();
        document.querySelector('.close-menu').click();
        anchorTarget.scrollIntoView({
            behavior: 'smooth', 
            block: 'start'
        });

        // Força o header a ficar fixo durante o scroll
        const interval = setInterval(() => {
            document.getElementById('header').classList.add('fixed');
            document.getElementById('header').classList.remove('scrolling-to-top');
        }, 10);
        setTimeout(() => {
            clearInterval(interval);
        }, 400)
    };

    return (
        <a
            href={`#${ anchorId }`}
            onClick={ handleClick }
            className={active}
            aria-label={`Scroll to ${ anchorId }`}
        >
            {itemName}
        </a>
    );
};