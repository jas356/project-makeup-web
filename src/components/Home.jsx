

import { Col, Container, Row } from "react-bootstrap"
import Header from "../layout/Header"

export default function Home() {
    return(
        <>
        <Container>
            <Row className="text-centered">
                <Col>
                    <Header />
                    <h1>Home</h1>  
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit numquam ipsam, fugit, autem pariatur dolor ab quibusdam deleniti facere odit non ad totam quam nulla sapiente quaerat molestias nemo vitae?</p> 
                </Col>
            </Row>
         </Container>
        </>
    )
}