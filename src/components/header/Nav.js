import { NavItem } from './NavItem.js';

export function Nav(){
    return(
        <nav className="nav">
            <NavItem anchorId="about" itemName="Sobre mim" />
            <NavItem anchorId="certificates-skills" itemName="Certificados & Skills" />
            <NavItem anchorId="projects" itemName="Projetos" />
        </nav>
    )
}