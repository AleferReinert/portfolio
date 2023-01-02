import { useEffect, useState } from 'react';

const Item = props => {
    return (
        <a href={props.url} title={props.title} target="_blank" rel="noreferrer">
            <img src={ process.env.PUBLIC_URL + '/img/icons/' + props.icon } alt={props.title} />
        </a>
    )
}

export function Social() {
    const [ready, setReady] = useState('');

    useEffect(() => {
        setReady('ready');
    }, []);
    return (
        <nav className={`social ${ready}`}>
            <Item url='https://www.facebook.com/AleferReinert' title='Facebook' icon='facebook.svg' />
            <Item url='https://github.com/AleferReinert' title='Github' icon='github.svg' />
            <Item url='mailto:aleferreinert@gmail.com' title="Gmail" icon='gmail.svg' />
            <Item url='https://www.linkedin.com/in/aleferreinert' title='Linkedin' icon='linkedin.svg' />
            <Item url='https://wa.me/message/FSN72FDKNRO3O1' title='Whatsapp' icon='whatsapp.svg' />
            <Item url='https://www.youtube.com/AleferReinert' title='YouTube' icon='youtube.svg' />
        </nav>
    )
}