import Navigation from "@layout/Navigation";
import Hero from "@sections/Hero";

const Header = () => {
  return (
    <>
      <header
        className="hidden lg:flex flex-col w-full max-h-[1000px] h-screen bg-no-repeat bg-center bg-cover lg:pb-48"
        style={{ backgroundImage: `url('/images/header/background.jpg')` }}
      >
        <Navigation />
        <Hero />
      </header>

      <header
        className="flex lg:hidden flex-col w-full max-h-[1000px] h-screen bg-no-repeat bg-[10%_50%] bg-[size:240%_100%] pb-12 lg:pb-48"
        style={{ backgroundImage: `url('/images/header/background.jpg')` }}
      >
        <Navigation />
        <Hero />
      </header>
    </>
  );
};

export default Header;
