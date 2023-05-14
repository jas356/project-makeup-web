import { useState } from "react"

export default function ClassSignup({addMemeber, setAddMember}) {
    const [firstName, setFirstname] = useState('')
    const [lastName, setLastname ] = useState('')
    const [undertoneType, setUndertoneType ] = useState('')
    const [classType, setClassType ] = useState('')

    const handleAddSignup = (e) => {
        e.preventDefault()

        fetch("https://project-makeup-jch.web.app/makeup-members", {
            method: "POST",
            headers: { "Content-Type" : "application/json",
        },

        body: JSON.stringify({firstName, lastName, undertoneType, classType })
        })

        .then(resp => resp.json())
        .then(data => {
            if(data.message) {
            setFirstname('')
            setLastname('')
            setUndertoneType('')
            setClassType('')
                alert(data.message)
                return
            }
            setAddMember(data)
        })
        .catch(alert)
    }

    return(
        <>
        <main>
            <h1>Class Sign-Ups</h1>
            <h2>Enter info below</h2>
        </main>
        <form onSubmit={handleAddSignup}>
            <label htmlFor="firstName">First Name
            <input type="text" 
            value={firstName}
            onChange={(e) => {setFirstname(e.target.value)}} />
            </label>
                <br />

            <label htmlFor="lastName">Last Name
            <input type="text" 
            value={lastName}
            onChange={(e) => {setLastname(e.target.value)}} />
            </label>

            <br />
            <label htmlFor="undertoneType">Undertone Type
            <input type="text" 
            value={undertoneType}
            onChange={(e) => {setUndertoneType(e.target.value)}} />
            </label>

            <br />
            <label htmlFor="classType"> Class Type
            <input type="text" 
            value={classType}
            onChange={(e) => {setClassType(e.target.value)}} />
            </label>
            <br />
            <input type="submit" />
        </form>
        </>
    )
}