import { useEffect, useState } from 'react';
import socialLinks from './content';

export function Social() {
    const [ready, setReady] = useState('');
    useEffect(() => {
        setReady('ready');
    }, []);

    return (
        <nav className={'social ' + ready}>
            {socialLinks.map((social, i) => {
                const icon = process.env.PUBLIC_URL + '/img/icons/' + social.title.toLowerCase() + '.svg';

                return (
                    <a href={social.url} title={social.title} target="_blank" rel="noreferrer" key={i}>
                        <img src={icon} alt={social.title} />
                    </a>
                )
            })}
        </nav>
    )
}