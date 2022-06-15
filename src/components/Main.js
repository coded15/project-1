import cardLogo from "../images/Ichchha2.jpeg"
import Header from "../components/Header"
import Button from "./Buttons"
import Footer from "../components/Footer"
import Content from "../components/Content"
export default function Main() {
    return (
        <div className="outer-box">
            <img src={cardLogo} alt="my-pic" className="my-image" />
            <div className="inner-box">
                <Header />
                <Button />
                <Content />
                <Footer />
            </div>
        </div>
    )
}