import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profilepicture from "../../pictures/profilepic.JPG";

function AboutMe() {
    const imgSize = 375;
    return (
        <div id="about" className="bg-light">
            <Container className="p-5">
                <div className="display-4 pb-4 text-center">
                    About Me
                </div>
                <Row className="px-3" >
                    <Col lg={6} xl={5} xxl={4} className="d-none d-lg-block">
                        <img
                            className="border border-dark rounded"
                            src={Profilepicture}
                            alt="profilepicture"
                            width={imgSize}
                            height={imgSize}
                        />
                    </Col>
                    <Col lg={6} xl={7} xxl={8} >
                    <p className="lead" >
                        I am a Junior studying Computer Science at CUNY Hunter College. 
                        While pursuing my degree, I met many others sharing the same interest as me. And the more I learned, the more I realized there are left to be learn.
                    </p>
                    <p className="lead" >
                        The industry has been growing ever since the start and 
                        being able to grow along with it makes the process even more enjoyable. 
                    </p>
                    <p className="lead">
                        Other than programming, I enjoy drawing, reading wu-xia novels, 
                        taking pictures and playing video games like League of Legends. 
                    </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutMe;
