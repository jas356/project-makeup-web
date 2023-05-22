import { Parallax } from "react-scroll-parallax";
import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import Image3models from "../gallery/3-mod.png"
//import { useNavigate } from "react-router-dom"


// export default function MakeupMembers({getAllMakeupMembers, setGetAllMakeupMembers }) {
export default function MakeupMembers({ getAllMakeupMembers, setGetAllMakeupMembers }) {
    // const[getAllMakeupMembers, setGetAllMakeupMembers] = useState();

    useEffect(() => {
        fetch("https://project-makeup-jch.web.app/makeup-member-classes", {
            method: "GET",
            headers: { 
                "Content-type" : "application/json",
             }
        })
        .then(resp => resp.json())
        .then(setGetAllMakeupMembers)
        .catch(alert)
    }, [])
    
    // console.log({getAllMakeupMembers});

    return(
        <>
     <Container>
            <Row className="text-centered" >
                <Col sm={12} md={6} lg={4} >
                
            { !getAllMakeupMembers ?
            <h2>Loading...</h2>
            :
                 <div>
                    <Parallax speed={10}
                        scale={[1, 1]}
                          easing="easeInQuad">
                        <img src={Image3models} alt='Responsive image' max-width="100%" height="auto"/>
                    </Parallax>
                    <h1>Makeup Members</h1>
                    {getAllMakeupMembers.map((element) => (
                        <div key={element._id}>
                        <p>First Name: {element.firstName}</p>
                        <p>Last Name: {element.lastName}</p>
                        <p>Undertone Type 🎨:{element.undertoneType}</p>
                        <p>Zoom Class 📅: {element.classType}</p>
                        </div>
                        ))}
                 </div>
            }
                </Col>
            </Row>
        </Container>
</>
    )
}