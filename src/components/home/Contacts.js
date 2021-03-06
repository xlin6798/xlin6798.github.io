import Container from "react-bootstrap/Container";

function Contacts() {
    const email = "xlin6798@gmail.com";
    return (
        <div id="Contacts" className="bg-white">
            <Container className="p-5">
                <div className="display-4 pb-4 text-center">
                    Get in touch
                </div>
                <p className="lead text-center">
                    I'm looking for internship opportunties as a Software Engineer.
                    <br />
                    If you know of any available opportunities,
                    <br />
                    or if you have any questions, comments,
                    corcerns 
                    <br />
                    or if you just want to say hi,
                    <br />
                    please feel free to reach me @
                    <a href={`mailto:${email}`} target="_blank" rel="noreferrer">{email} </a>
                </p>
            </Container>
        </div>
    );
}

export default Contacts;
