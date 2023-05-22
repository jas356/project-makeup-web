

import { Col, Container, Row } from "react-bootstrap"
import Header from "../layout/Header"

export default function Home() {
    return(
        <>
                    <Header />
        <Container className="home-container">
            <Row className="text-centered">
                <Col sm={12} md={6} lg={4}>
                    <h1>Home</h1>  
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit numquam ipsam, fugit, autem pariatur dolor ab quibusdam deleniti facere odit non ad totam quam nulla sapiente quaerat molestias nemo vitae?</p> 

                    <br />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit numquam ipsam, fugit, autem pariatur dolor ab quibusdam deleniti facere odit non ad totam quam nulla sapiente quaerat molestias nemo vitae?</p> 

                    <br />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit numquam ipsam, fugit, autem pariatur dolor ab quibusdam deleniti facere odit non ad totam quam nulla sapiente quaerat molestias nemo vitae?</p>

                </Col>
            </Row>
         </Container>
        </>
    )
}