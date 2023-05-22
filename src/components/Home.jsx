

import { Col, Container, Row } from "react-bootstrap"
import Header from "../layout/Header"
import Wheel from "../gallery/wheel.jpg"
import { Parallax } from "react-scroll-parallax"

export default function Home() {
    return(
        <>
                    <Header />
        <Container className="home-container">
            <Row className="text-centered">
                <Col sm={12} md={6} lg={4}>
                    <h1>Finding the Right Concealer and Foundation for Your Client the Professional Way 🤎</h1> 
                    <br />
                    <h2>Why does your undertone matter?</h2> 
                    <p>Knowing your Client's skin undertone may help you choose the correct foundation or color palettes that best suit their hue. Your client may have a cool, warm, or another undertone.</p> 
                    <p>There are three traditional undertones: warm, cool, and neutral. Warm undertones range from peach to yellow and golden. Some people with warm undertones also have sallow skin. Cool undertones include pink and bluish hues.

If you have a neutral undertone, this means that your undertones are roughly the same color as your actual skin tone.</p>
<br />

                        <br />
                        <Parallax speed={10}
                        scale={[1, 1]}
                          easing="easeInQuad">
                        <img src={Wheel} alt="wheel"/>
                        </Parallax>
                        <br />

                        <br />

                
                    <br />
                    <p>It’s important to note that your undertone isn’t the same thing as your natural tone, or the color of your naked skin before you put on foundation or any other makeup. Even the fairest skin can have warm undertones, and darker skin can have cool ones.

This is why matching your product to your skin color can become problematic when selecting makeup — it usually doesn’t blend with the natural hues that are just below the surface of your skin.</p> 


                </Col>
            </Row>
         </Container>
        </>
    )
}