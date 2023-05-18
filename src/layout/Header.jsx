import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { Container, Row, Col } from 'react-bootstrap';
import Image from '../gallery/3models.jpg';
import Image1 from "../gallery/22.webp"

export default function Header() {
    return(
        <Container>
            <Row>
                <Col>
                    <>
                    <ParallaxProvider>
                    <header>
                    <h1>Understanding Skin Undertones</h1>
                    <Parallax speed={-10}
                        translateX={['-400px', '0px']}
                        scale={[0.75, 1]}
                        rotate={[-180, 0]}
                        easing="easeInQuad">
                        <img src={Image} alt=''/>
                    </Parallax>
                    <Parallax speed={20}
                    
                        translateX={['-400px', '0px']}
                        scale={[0.75, 1]}
                        rotate={[-180, 0]}
                        easing="easeInQuad">
                        <img src={Image1} />
                    </Parallax>

                    </header>
                    </ParallaxProvider>
                    </>
                </Col>
            </Row>
        </Container>
    )
}