import './App.scss';
import { Header } from './components/header/Header';
import { About } from './components/about/About';
import { CertificatesSkills } from './components/certificatesSkills/CertificatesSkills';
import { Projects } from './components/projects/Projects';
import { Social } from './components/Social';
import { useEffect} from 'react';

// Verifica se um elemento está dentro do viewport verticalmente
function visibleOnViewport(element, distance){
    const e = document.querySelector(element);
    let y = Math.round(e.getBoundingClientRect().y);

    // Distancia do elemento a partir do bottom do viewport
    if(typeof distance === 'undefined'){
        distance = 0;
    }

    const data = {
        visible: null,
        position: y
    }

    if(y <= (window.innerHeight - distance) && y >= -(window.innerHeight)){
        data.visible = true;
    } else {
        data.visible = false;
    }
    return data;
}

// Exibe o elemento conforme o scroll
function showOnScroll(element, distance){
    const e = document.querySelector(element);

    window.addEventListener('scroll', () => {
        if(visibleOnViewport(element, distance).visible){
            e.classList.add('ready');
        }
    })
}

function App() {
    useEffect(() => {
        showOnScroll('#certificates-skills', 100);
        showOnScroll('#projects li:nth-child(1)', 100);
        showOnScroll('#projects li:nth-child(2)', 100);
        showOnScroll('#projects li:nth-child(3)', 100);
        showOnScroll('#projects li:nth-child(4)', 100);
        showOnScroll('#projects li:nth-child(5)', 100);
    },[]);
    return (
        <div className="App">
            <Header itemName={'about'} />
            <main>
                <About />
                <CertificatesSkills />
                <Projects />
            </main>
            <aside>
                <Social />
            </aside>
        </div>
    );
}

export default App;
