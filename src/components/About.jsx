import { Container, Row, Col } from "react-bootstrap";


export default function About() {
    return(
        <>
        <main>
        <Container>
            <Row className="text-centered">
                <Col>
                <img />
                </Col>

                <Col sm={12} md={6}>
            <h1>About which skin tone</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita dicta commodi saepe odio suscipit beatae tempora debitis eligendi. Alias maiores ab tempora ipsa libero praesentium veniam aspernatur tenetur ea fuga.</p>
                </Col>

            </Row>
        </Container>
        </main>
        </>
    )
}