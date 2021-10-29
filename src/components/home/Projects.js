import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useState, useCallback, useEffect } from "react";

function Projects() {
    const API = "https://api.github.com";
    const username = "xlin6798";
    const repos = ["crypto-app", "xlin6798.github.io", "web-game"];
    const reposAPI = `${API}/repos/${username}`;
    const [projects, setProjects] = useState([]);

    const fetchRepos = useCallback(async () => {
        let repoList = [];
        try {
            for (let repo of repos) {
                const response = await axios.get(`${reposAPI}/${repo}`);
                repoList.push(response.data);
            }
            setProjects(repoList);
        } catch (error) {
            console.error(error.message);
        }
    });

    useEffect(() => {
        fetchRepos();
    }, [fetchRepos]);

    return (
        <div id="projects" className="bg-light">
            <Container className="p-5">
                <div className="display-4 pb-4 text-center">
                    Projects
                </div>
                <Row>
                    {projects.map((project, id) => (
                        <Col key={id} md={12} xxl={4}>
                            <Card>
                                <Card.Img variant="top" src="" />
                                <Card.Body>
                                    <Card.Title> {project.name} </Card.Title>
                                    <Card.Text>
                                        {project.description}
                                    </Card.Text>
                                    <Button href={project.svn_url} variant="primary"> Click me </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Projects;

