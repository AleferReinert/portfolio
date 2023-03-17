import { useEffect } from 'react';
import { showOnScroll } from '../showOnScroll';
import { skills, certificates } from './content';

export function CertificatesSkills(props) {
    useEffect(() => {
        showOnScroll('#certificates-skills', 100);
    }, []);

    return (
        <section id='certificates-skills' className='container' style={props.minHeight}>
            <h1 className='title-default'>Certificados & Skills</h1>
            <div className='content'>
                <ul className='certificates'>
                    {certificates.map((certificate, i) => {
                        return (
                            <li key={i}>
                                <a target='_blank' rel='noreferrer' title='Visualizar certificado' href={certificate.url}>
                                    <h2>{certificate.title}</h2>
                                    <p>{certificate.description}</p>
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <ul className='skills'>
                    {skills.map((skill, i) => {
                        return (
                            <li title={skill.title} key={i}>
                                <img src={process.env.PUBLIC_URL + '/img/skills/' + skill.icon} alt={skill.title} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}