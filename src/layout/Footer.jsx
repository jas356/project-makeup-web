//import AiFillGithub from "react-bootstrap-icons"

export default function Footer() {

    const gitHubUrl = "https://github.com/jas356/project-makeup-web"
    const currentYear = new Date().getFullYear()

    return(
        <footer>
            <p className="text-center text-secondary ">
                <a href={gitHubUrl}
                target="_blank"
                rel= "noreferrer"
                className="button-effect">
                <br/>
                <small><strong>&copy; {currentYear} Code in Github</strong></small>
                </a>
            </p>
        </footer>
    )
}