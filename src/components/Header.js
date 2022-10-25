import { MenuItem } from './MenuItem.js';

export function Header() {
    return (
        <header id="header">
            <nav id="menu">
                <MenuItem anchorId="about" itemName="Sobre mim" />
                <MenuItem anchorId="certificates-skills" itemName="Certificados & Skills" />
                <MenuItem anchorId="projects" itemName="Projetos" />
            </nav>
        </header>
    )
}