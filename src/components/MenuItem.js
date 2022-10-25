import { useState, useEffect } from 'react';

export const MenuItem = ({ anchorId, itemName, active }) => {
    const [anchorTarget, setAnchorTarget] = useState(null);

    useEffect(() => {
        setAnchorTarget(document.getElementById(anchorId));
    }, [anchorId]);

    const handleClick = event => {
        event.preventDefault();
        anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <a
            href={`#${anchorId}`}
            onClick={handleClick}
            className={active}
            aria-label={`Scroll to ${anchorId}`}
        >
            {itemName}
        </a>
    );
};