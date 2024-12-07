import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const DashCard = () => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex text-wrap w-48 pl-5 border">
        <div className="items-center">
          <Link to="/Form">
            <h2 className="text-xl">Name Checklist</h2>
            <h3 className="text-xl">Descirption</h3>

            <div className="mt-5">
              <button className="text-yellow m-2">
                <FontAwesomeIcon icon={faEdit} className="size-5" />
              </button>
              <button>
                <FontAwesomeIcon
                  icon={faTrash}
                  className=" text-pinkishred size-5"
                />
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DashCard;
