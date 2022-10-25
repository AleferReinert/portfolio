import React from 'react';
import './App.scss';

// Componentes
import { Header } from './components/Header';
import { About } from './components/About';
import { CertificatesSkills } from './components/CertificatesSkills';
import { Projects } from './components/Projects';
import { Social } from './components/Social';

const sectionHeight = {
    minHeight: window.innerHeight + 'px'
}

function scrollControl(){
    let prev = window.pageYOffset;
    let section1 = document.getElementById('about').offsetTop;
    let section2 = document.getElementById('certificates-skills').offsetTop;
    let section3 = document.getElementById('projects').offsetTop;

    // TODO - Fazer o scroll suave entre as sections
    window.onscroll = function() {

        // Header
        let current = window.pageYOffset;
        let header = document.getElementById('header');
        if(current <= header.clientHeight){
            header.classList.remove('hidden', 'active');
        }
        else if (prev > current) {
            header.classList.remove('hidden');
            header.classList.add('active');
        } else {
            header.classList.add('hidden');
        }
    }
}

function App() {
    React.useEffect(() => {
        scrollControl();
    })
    return (
        <div className="App">
            <Header itemName={'about'} />
            <main>
                <About minHeight={sectionHeight} />
                <CertificatesSkills minHeight={sectionHeight} />
                <Projects />
            </main>
            <aside>
                <Social />
            </aside>
        </div>
    );
}

export default App;
