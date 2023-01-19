import { useEffect } from 'react';
import { showOnScroll } from '../showOnScroll';

const skills = [
    { title: 'HTML 5', icon: 'html5.svg' },
    { title: 'CSS 3', icon: 'css3.svg' },
    { title: 'LESS', icon: 'less.svg' },
    { title: 'SASS', icon: 'sass.svg' },
    { title: 'JavaScript', icon: 'javascript.svg' },
    { title: 'React', icon: 'react.svg' },
    { title: 'JQuery', icon: 'jquery.svg' },
    { title: 'Grunt', icon: 'grunt.svg' },
    { title: 'Gulp', icon: 'gulp.svg' },
    { title: 'Bootstrap', icon: 'bootstrap.svg' },
    { title: 'Git', icon: 'git.svg' },
    { title: 'Photoshop', icon: 'photoshop.svg' },
    { title: 'SQL', icon: 'sql.svg' }
];

const certificates = [
    {
        title: 'Javascript Para Iniciantes',
        description: 'Unova Cursos | Outubro/2022',
        url: 'https://www.unovacursos.com.br/certificados/14304132340741204202210'
    },
    {
        title: 'CC50: Introdução à Ciência da Computação',
        description: 'Fundação Estudar | Setembro/2022',
        url: 'https://edools-3-production.s3.amazonaws.com/org-6988/school-7227/certificates/enrollment-7244069/course-84414-bvrom.pdf'
    },
    {
        title: 'Formação Design Gráfico',
        description: 'ProWay Informática | Fevereiro/2012',
        url: 'https://drive.google.com/file/d/1dJErgNzdqUchbaEo7upZoSCO3GBYVRIv/view?usp=share_link'
    }
];

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