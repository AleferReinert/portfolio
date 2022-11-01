import { Nav } from './Nav';
import { Social } from '../social/Social';
import iconClose from '../../img/close.svg';

export function MenuMobile(props) {
    return (
        <div id="menu-mobile" className={ props.visibility }>
            <div>
                <button className="close-menu" title="Fechar menu" onClick={ props.closeMenu }>
                    <img src={ iconClose } alt="Fechar menu" />
                </button>
            </div>
            <Nav />
            <Social />
        </div>
    )
}