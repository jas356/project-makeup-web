import { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"


export default function MakeupMembers({getAllMakeupMembers, setGetAllMakeupMembers }) {
    useEffect(() => {
        fetch("https://project-makeup-jch.web.app/makeup-member-classes", {
            method: "GET",
            headers: { 
                "Content-type" : "application/json",
                "Accept" : "application/json" 
             }
        })
        .then(resp => resp.json())
        .then(setGetAllMakeupMembers)
        .catch(alert)
    }, [])


    return(
            <div>
            { !getAllMakeupMembers ?
            <h2>Loading...</h2>
            :
            <Container>
                <Row>
                    <Col></Col>
                         <div>
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
                </Row>
            </Container>

            }
            </div>
    )
}