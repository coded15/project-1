import TwitterLogo from "../images/TwitterIcon.png"
import FacebookLogo from "../images/FacebookIcon.png"
import InstagramLogo from "../images/InstagramIcon.png"
import GitHubLogo from "../images/GitHubIcon.png"

export default function Footer() {
    return (
        <div className="footer">
            <img src={TwitterLogo} alt="twitter" />
            <img src={FacebookLogo} alt="facebook" />
            <img src={InstagramLogo} alt="instagram" />
            <img src={GitHubLogo} alt="github" />
        </div>
    )
}