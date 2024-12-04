import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <header className="bg-blue mb-7 flex">
      <nav>
        <div>

            {/* <Link to="/ChecklistWarpper">
            <FontAwesomeIcon icon={faArrowAltCircleLeft} className="h-10 m-2" />
            </Link> */}

            <Link to="/DashBoard">
            <FontAwesomeIcon icon={faArrowAltCircleLeft} className="h-10 m-2" />
            </Link>

       
          <Link to="/FormsButtons">
          <FontAwesomeIcon icon={faGear} className="h-10 m-2 items-end" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
