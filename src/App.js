import Navigation from "./components/Navigation";
import Main from "./components/home/Main";
import AboutMe from "./components/home/AboutMe";
import Skills from "./components/home/Skills";
import Projects from "./components/home/Projects";
import Contacts from "./components/home/Contacts";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navigation />
            <Main />
            <AboutMe />
            <Skills />
            <Projects />
            <Contacts />
            <Footer />
        </>
    );
}

export default App;
