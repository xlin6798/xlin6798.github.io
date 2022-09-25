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
                        Xinyi is a Senior studying Computer Science and Media Studies at CUNY Hunter College, anticipating to graduate Fall 2023. </p>
                    <p className="lead">
                        
                    </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutMe;
