export default function Footer() {

    //const githubUrl = "https://https://github.com/jas356/project-makeup-web"
    const currentYear = new Date().getFullYear()

    return(
        <footer>
            <p className="text-center text-secondary">
                <a href="/" //{githubUrl}
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