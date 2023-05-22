import { Container, Row, Col } from "react-bootstrap";


export default function About() {
    return(
        <>
        <main>
        <Container className="about-container">
            <Row className="text-centered">
                <Col sm={12} md={6} lg={4}>
                <img />
                </Col>

                <Col >
            <h1>About which skin tone</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita dicta commodi saepe odio suscipit beatae tempora debitis eligendi. Alias maiores ab tempora ipsa libero praesentium veniam aspernatur tenetur ea fuga.</p>

            <br />
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero eos aspernatur earum saepe natus modi magnam voluptatem illum id recusandae sequi iusto, assumenda omnis voluptate? Quod quisquam sint provident fuga?
            </p>
            <br />
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero eos aspernatur earum saepe natus modi magnam voluptatem illum id recusandae sequi iusto, assumenda omnis voluptate? Quod quisquam sint provident fuga?
            </p>
            <br />
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero eos aspernatur earum saepe natus modi magnam voluptatem illum id recusandae sequi iusto, assumenda omnis voluptate? Quod quisquam sint provident fuga?
            </p>
                </Col>

            </Row>
        </Container>
        </main>
        </>
    )
}