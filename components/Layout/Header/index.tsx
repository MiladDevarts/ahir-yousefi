
import Navigation from "../Navigation"
import Hero from "../../Hero"

const Header = () => {
    return (
        <>
            <header className="hidden lg:flex flex-col w-full max-h-[120vh] bg-no-repeat bg-center bg-cover pb-48" style={{ backgroundImage: `url('/images/header/background.jpg')` }}>
                <Navigation />
                <Hero />
            </header>

            <header className="flex lg:hidden flex-col w-full max-h-[120vh] bg-no-repeat bg-center bg-cover pb-48" style={{ backgroundImage: `url('/images/header/background-mb.jpg')` }}>
                <Navigation />
                <Hero />
            </header>
        </>
    )
}

export default Header