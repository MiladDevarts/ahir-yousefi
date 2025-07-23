import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={"#contact"}>
      <Image src="/images/p91-logo.png" alt="P91 Personal Website" width={33} height={33} />
    </Link>
  );
};

export default Logo;
