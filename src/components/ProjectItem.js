export function ProjectItem(props){
    return(
        <li className="project">
            <div>
                <a href={ props.url } target="_blank">
                    <img src={ props.imageUrl } alt="" />
                </a>
            </div>
            <div className="informations">
                <h2>{ props.name }</h2>
                <p>{ props.description }</p>
                <p className="skills">{ props.skills }</p>
            </div>
        </li>
    )
}