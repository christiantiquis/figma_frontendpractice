import { faBehance } from "@fortawesome/free-brands-svg-icons/faBehance";
import { faDribbble } from "@fortawesome/free-brands-svg-icons/faDribbble";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 text-white font-DM w-5/12">
      <nav className="flex text-lg w-full justify-evenly">
        <a className="active">Home</a>
        <a className="">Features</a>
        <a className="">Pricing</a>
        <a className="">Blog</a>
        <FontAwesomeIcon icon={faDribbble} className="w-[16px]" />
        <FontAwesomeIcon icon={faBehance} className="w-[21px]" />
      </nav>
    </header>
  );
};

export default Header;
