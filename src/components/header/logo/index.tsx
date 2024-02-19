import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="h-[40px]">
      <Link className="relative w-[100px] h-full block cursor-pointer" href="/">
        <Image
          src="/images/instagram-logo.png"
          alt="instagram-logo"
          fill
          priority
          className="object-contain"
          sizes="150px"
        />
      </Link>
    </div>
  );
};

export default Logo;
