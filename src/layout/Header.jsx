import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import { Container, Row, Col } from 'react-bootstrap';
import Image from '../gallery/3models.jpg';
import Image1 from "../gallery/22.webp"
import Image2 from "../gallery/10models.png"
import Image3 from "../gallery/3-mod.png"

export default function Header() {
    return(
        <>    <ParallaxBanner
        layers={[{ image: 'https://i.pinimg.com/564x/dc/19/c9/dc19c949f39d9217de09e4b0da34db89.jpg', speed: -15 }]}
        className="aspect-[2/1]"
      />
        <Container>
            <Row>
                <Col>
                    <>
                    <header>
                    <h1>Understanding Skin Undertones</h1>
                    {/* <Parallax speed={-10}
                        // translateX={['-400px', '0px']}
                        // scale={[0.75, 1]}
                        // rotate={[-180, 0]}
                          easing="easeInQuad">
                        <img src={Image3} alt=''/>
                    </Parallax>  */}
                     <Parallax speed={20}
                        scale={[1, 1]}
                          easing="easeInQuad">
                        <img src={Image2} alt=''/>
                    </Parallax>


    {/* <ParallaxBanner
      layers={[
        { image: 'https://i.pinimg.com/564x/dc/19/c9/dc19c949f39d9217de09e4b0da34db89.jpg', speed: -20 },
        {
          speed: -15,
          children: (
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-8xl text-white font-thin">Hello World!</h1>
            </div>
          ),
        },
        { image: 'https://i.pinimg.com/564x/dc/19/c9/dc19c949f39d9217de09e4b0da34db89.jpg', speed: -10 },
      ]}
      className="aspect-[2/1]"
    /> */}


                    </header>
                    </>
                </Col>
            </Row>
        </Container>
        </>
    )
}