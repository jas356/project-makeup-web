import { Carousel, Container, Row, Col } from "react-bootstrap";

export default function PicCarousel() {
    return(
        <>
            <section>
                <Container>
                    <Row>
                        <Col>
                            <Carousel>
                            <Carousel.Item>
                <img src={Image}
                  className="d-block w-100" 
                  alt="slide 1" />
                <Carousel.Caption>
                <h2>Fashionista (Me)</h2>
                  <p>A fun night out</p>
                </Carousel.Caption>  
              </Carousel.Item>

              <Carousel.Item>
                <img src={Image2} 
                  className="d-block w-100" 
                  alt="slide 1" />
                <Carousel.Caption>
                <h2>Makeup Art</h2>
                  <p>Makeup art done by Jasmine.</p>
                </Carousel.Caption>  
              </Carousel.Item>

              <Carousel.Item>
                <img src={Image3}
                  className="d-block w-100" 
                   alt="slide 1" />
                <Carousel.Caption>
                <h2>Another Angle of Makeup Art</h2>
                  <p>Done by Jasmine</p>
                </Carousel.Caption>  
              </Carousel.Item>

              <Carousel.Item>
                <img src={Image4}
                  className="d-block w-100" 
                   alt="slide 1" />
                <Carousel.Caption>
                <h2>Client Soft Glam</h2>
                  <p></p>
                </Carousel.Caption>  
              </Carousel.Item>

              <Carousel.Item>
                <img src={Image5}
                  className="d-block w-100" 
                   alt="slide 1" />
                <Carousel.Caption>
                <h2>Client Soft Glam</h2>
                  <p></p>
                </Carousel.Caption>  
              </Carousel.Item>

              <Carousel.Item>
                <img src={Image6}
                  className="d-block w-100" 
                   alt="slide 1" />
                <Carousel.Caption>
                <h2>Client Soft Glam</h2>
                  <p></p>
                </Carousel.Caption> 
              </Carousel.Item>

              <Carousel.Item>
                <img src={Image7}
                  className="d-block w-100" 
                   alt="slide 1" />
                <Carousel.Caption>
                <h2>Client Soft Glam</h2>
                  <p></p>
                </Carousel.Caption>  
              </Carousel.Item>

              <Carousel.Item>
                <img src={Image8}
                  className="d-block w-100" 
                   alt="slide 1" />
                <Carousel.Caption>
                <h2>Ceramics Bowl</h2>
                  <p>Created by Jasmine</p>
                </Carousel.Caption>  
              </Carousel.Item>

              <Carousel.Item>
                <img src={Image9}
                  className="d-block w-100" 
                   alt="slide 1" />
                <Carousel.Caption>
                <h2>Ceramics Bowl (2nd Angle)</h2>
                  <p>Created by Jasmine</p>
                </Carousel.Caption>  
              </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}