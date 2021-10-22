import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Projects() {
    return (
        <div id="projects" className="bg-light">
            <Container className="p-5">
                <div className="display-4 pb-4 text-center">
                    Projects
                </div>
                <Row>
                    <Col lg={6} xxl={4}>
                        <Card>
                            <Card.Img variant="top" src="" />
                            <Card.Body>
                                <Card.Title> Project Title </Card.Title>
                                <Card.Text>
                                    Project Discription
                                </Card.Text>
                                <Button variant="primary"> Link to Project </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6} xxl={4}>
                        <Card>
                            <Card.Img variant="top" src="" />
                            <Card.Body>
                                <Card.Title> Project Title </Card.Title>
                                <Card.Text>
                                    Project Description
                                </Card.Text>
                                <Button variant="primary"> Project Link </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6} xxl={4}>
                        <Card>
                            <Card.Img variant="top" src="" />
                            <Card.Body>
                                <Card.Title> Project Title </Card.Title>
                                <Card.Text>
                                    Projection Description
                                </Card.Text>
                                <Button variant="primary"> Project Link </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Projects;

