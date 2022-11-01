import './App.scss';
import { Header } from './components/header/Header';
import { About } from './components/about/About';
import { CertificatesSkills } from './components/certificatesSkills/CertificatesSkills';
import { Projects } from './components/projects/Projects';
import { Social } from './components/social/Social';
import { useEffect } from 'react';

// Retorna orientação do dispositivo
function orientationDevice(){
    return window.screen.width > window.screen.height ? 'landscape' : 'portrait';
}
window.addEventListener('resize', function(){
    orientationDevice();
});

function App() {
    useEffect(() => {
        if(orientationDevice() === 'landscape'){
            document.querySelectorAll('section').forEach(e => {
                e.style.minHeight = `${window.innerHeight - 50}px`;
            })
        }
    }, []);

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
