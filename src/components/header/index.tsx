import { ClassNameProp } from "@lib/models";
import { clsx } from "clsx";
import Logo from "./logo";
import Search from "./search";
import Navigation from "./navigation";

type HeaderProps = {
  [K in keyof ClassNameProp]?: ClassNameProp[K];
};

const Header = ({ className }: HeaderProps) => {

  return (
    <header
      className={clsx(
        className,
        "shadow-sm border-b bg-white fixed top-0 right-0 left-0 z-50 min-h-[54px] h-[64px] max-h-[64px]"
      )}
    >
      <div className="flex justify-between h-full items-center px-5 mx-auto md:max-w-4xl lg:max-w-6xl">
        <Logo />
        <Search />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
