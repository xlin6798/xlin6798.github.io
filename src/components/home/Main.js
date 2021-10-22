import Container from "react-bootstrap/Container";
import Typewriter from "typewriter-effect";
import { FaGithub }  from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Main() {
    const resume = "https://docs.google.com/document/d/1qS7xwupCF6DWgCswAJLxvq-_G2IqHRRDpWPJpQXJWC8/edit";
    const gradient = "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1";
    const delay = 50;
    const pause = 80;
    return (
        <div id="home" style={{
            background: `linear-gradient(136deg,${gradient})`,
            backgroundSize: "1200% 1200%",
        }}
            className="text-center text-light main-bg min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
        >
            <Container>
                <h1 className="display-1"> Xinyi Lin </h1>
                <Typewriter className="lead"
                    options={{
                        cursor: "",
                        delay: delay,
                        skipAddStyles: true,
                        wrapperClassName: "lead typewriter",
                        cursorClassName: "",
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Passionate")
                            .pauseFor(pause)
                            .typeString(" about")
                            .pauseFor(pause)
                            .typeString(" learning")
                            .pauseFor(pause)
                            .typeString(" and")
                            .pauseFor(pause)
                            .typeString(" growing.")
                            .start();
                    }}
                />
                <div className="p-5">
                    <a
                        href="https://github.com/xlin6798"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="My github"
                    >
                        <FaGithub className="socialicons" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/xinyi-lin-xlin6798/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="My linkedin"
                    >
                        <FaLinkedin className="socialicons" />
                    </a>
                </div>
                <a
                    className="btn btn-outline-light btn-md mx-3"
                    href="#about"
                    role="button"
                    aria-label="Learn more about me"
                >
                    More about me
                </a>
                <a
                    className="btn btn btn-outline-success btn-md mx-3"
                    href={resume}
                    target="_blank"
                    rel="noreferrer"
                    role="button"
                    aria-label="Learn more about me"
                >
                    Resume
                </a>
            </Container>
        </div>
    );
}

export default Main;
