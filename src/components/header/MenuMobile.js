import { Nav } from './Nav';
import { Social } from '../social/Social';

export function MenuMobile(props) {
    return (
        <div id='menu-mobile' className={props.visibility}>
            <div>
                <button className='close-menu' title='Fechar menu' onClick={props.closeMenu}>
                    <img src={process.env.PUBLIC_URL + '/img/icons/close.svg'} alt='Fechar menu' />
                </button>
            </div>
            <Nav />
            <Social />
        </div>
    )
}