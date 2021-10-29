import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DiBootstrap, DiHtml5, DiJavascript, DiCss3, DiReact, DiJava, DiPython, DiAndroid, DiApple, DiChrome, DiWindows, DiLinux } from "react-icons/di";
import { SiCplusplus, SiPostgresql, SiVisualstudiocode } from "react-icons/si";

function Skills() {
    return (
        <div id="skills" className="bg-white">
            <Container fluid className="p-5">
                <div className="display-4 pb-4 text-center">
                    Skills
                </div>
                <Row className="pt-5">
                    <Col className="pb-5" xs={12} sm={6} md={4}>
                        <p className="h5">
                            <DiCss3 className="skillsicons" title="CSS" />
                            <DiHtml5 className="skillsicons" title="Html5" />
                            <DiJavascript className="skillsicons" title="Javascript" />
                            HTML/CSS/Javascript
                        </p>
                        <p>
                            Experienced in building simple websites from scratch using HTML5 CSS and Javascript
                        </p>
                    </Col>
                    <Col className="pb-5" xs={12} sm={6} md={4}>
                        <p className="h5">
                            <DiReact className="skillsicons" title="React" />
                            <DiBootstrap className="skillsicons" title="Bootstrap" />
                            React with Bootstrap
                        </p>
                        <p>
                            Self learned Reactjs and incoporated Bootstrap as the styling framework
                        </p>
                    </Col>
                    <Col className="pb-5" xs={12} sm={6} md={4}>
                        <p className="h5">
                            <SiCplusplus className="skillsicons" title="C++" />
                            <DiPython className="skillsicons" title="Python" />
                            <DiJava className="skillsicons" title="Java" />
                            C++ Python Java
                        </p>
                        <p>
                            Experience with object orientated languages like Java and C++, with entry level knowledge in Python.
                        </p>
                    </Col>
                    <Col className="pb-5" xs={12} sm={6} md={4}>
                        <p className="h5">
                            <SiPostgresql className="skillsicons me-2" title="PostgreSql" />
                            PostgreSql
                        </p>
                        <p>
                            Entry level with this relational database system which is a compliance and advanced version of Sql
                        </p>
                    </Col>
                    <Col className="pb-5" xs={12} sm={6} md={4}>
                        <p className="h5">
                            <SiVisualstudiocode className="skillsicons me-2" title="VSCode" />
                            Visual Studio Code
                        </p>
                        <p>
                            Uses Visual Studio Code as the primary IDE
                        </p>
                    </Col>
                    <Col className="pb-5" xs={12} sm={6} md={4}>
                        <p className="h5">
                            <DiLinux className="skillsicons" title="Linux" />
                            <DiWindows className="skillsicons" title="Windows" />
                            <DiChrome className="skillsicons" title="ChromeOS" />
                            <DiAndroid className="skillsicons" title="Android" />
                            <DiApple className="skillsicons" title="IOS" />
                            Operating Systems
                        </p>
                        <p>
                            Familiar and hands-on experience with Linux, Windows, Chrome OS, Android and IOS
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Skills;
