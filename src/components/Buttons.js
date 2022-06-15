import mail_logo from "../images/Mail.png"
import linkedIn_logo from "../images/linkedin.png"
export default function Button() {
    return (
        <div className="buttons">
            <div className="email--button">
                <img src={mail_logo} alt="mail" className="mail--logo" />
                <h3 className="email--text">Email</h3>
            </div>
            <div className="linkedIn--button">
                <img src={linkedIn_logo} alt="linkedIn" className="linkedIn--logo" />
                <h3 className="linkedIn--text">LinkedIn</h3>
            </div>
        </div>
    )
}