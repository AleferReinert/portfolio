import { useEffect, useState } from 'react';

const data = [
    { title: 'Facebook', url: 'https://www.facebook.com/AleferReinert' },
    { title: 'Github', url: 'https://github.com/AleferReinert' },
    { title: 'Gmail', url: 'mailto:aleferreinert@gmail.com' },
    { title: 'Linkedin', url: 'https://www.linkedin.com/in/aleferreinert' },
    { title: 'Whatsapp', url: 'https://wa.me/message/FSN72FDKNRO3O1' },
    { title: 'YouTube', url: 'https://www.youtube.com/AleferReinert' }
];

export function Social() {
    const [ready, setReady] = useState('');
    useEffect(() => {
        setReady('ready');
    }, []);

    return (
        <nav className={'social ' + ready}>
            {data.map((social, i) => {
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