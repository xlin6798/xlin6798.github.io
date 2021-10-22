import { FaGithub, FaInstagram, FaLinkedin, FaMailBulk } from "react-icons/fa";
import Container from "react-bootstrap/Container";

function Footer() {
    return (
        <footer className="bg-light">
            <Container>
                <p className="text-center text-muted py-3 m-0">
                    <a className="text-muted" href="https://github.com/xlin6798/xlin6798.github.io">
                        © 2021 Xinyi Lin Created with React
                    </a>
                    {" "}
                    <a
                        href="https://github.com/xlin6798"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="My github"
                    >
                        <FaGithub />
                    </a>
                    {" "}
                    <a
                        href="https://www.linkedin.com/in/xinyi-lin-xlin6798/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="My linkedin"
                    >
                        <FaLinkedin />
                    </a>
                    {" "}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        aria-label="My email"
                    >
                        <FaMailBulk />
                    </a>
                </p>
            </Container>
        </footer>
    );
}

export default Footer;
