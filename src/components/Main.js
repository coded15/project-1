import cardLogo from "../images/Ichchha2.jpeg"
import Header from "../components/Header"
export default function Main() {
    return (
        <div className="outer-box">
            <img src={cardLogo} alt="my-pic" className="my-image" />
            < Header />

        </div>
    )
}