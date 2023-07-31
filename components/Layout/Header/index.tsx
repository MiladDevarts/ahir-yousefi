
import Navigation from "../Navigation"
import Hero from "../../Hero"

const Header = () => {
    return (
        <header className="w-full max-h-[110vh] bg-no-repeat bg-center bg-cover pb-32" style={{ backgroundImage: `url('/images/header/background.jpg')` }}>
            <Navigation />
            <Hero />
        </header>
    )
}

export default Header