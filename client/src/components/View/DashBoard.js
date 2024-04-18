import React, { useContext, useEffect, useRef, useState } from "react";
import { PostContext } from "../../contexts/PostContext";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import MovieModal from "../View/MovieModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGuilded } from "@fortawesome/free-brands-svg-icons";
import {
  faMagnifyingGlass,
  faCircleLeft,
  faCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import Slide from "./Slide";

const DashBoard = () => {
  /**Contexts */
  // Posts context
  const {
    postsState: { posts, postLoading, post },
    getAll,
  } = useContext(PostContext);

  const hasMounted = useRef(false);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const updateSlideIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= posts.length) {
      newIndex = posts.length - 1;
    }
    setActiveSlideIndex(newIndex);
  };

  useEffect(() => {
    if (!hasMounted.current) {
      getAll();
      console.log("Component mounted for the first time");
      hasMounted.current = true;
    } else {
    }
  });

  let body;

  if (postLoading) {
    body = (
      <>
        <div className="spinner-border text-secondary" role="status">
          <span className="sr-only"></span>
        </div>
        ;
      </>
    );
  } else {
    body = (
      <Card.Body>
        <Card.Title>Most Popular Movies</Card.Title>
        <div className="hero-3rd">
          <div className="carousel">
            <div className="btnCarousel">
              <FontAwesomeIcon
                icon={faCircleLeft}
                onClick={() => updateSlideIndex(activeSlideIndex - 1)}
              />
              <FontAwesomeIcon
                icon={faCircleRight}
                onClick={() => updateSlideIndex(activeSlideIndex + 1)}
              />
            </div>
            <div
              className="itemCarousel"
              style={{ transform: `translate(-${activeSlideIndex * 100}%)` }}
            >
              {posts.map((item) => {
                return <Slide item={item} post={item} />;
              })}
            </div>
          </div>
        </div>
      </Card.Body>
    );
  }

  return (
    <div className="hero">
      <Card style={{ margin: "0 auto", width: "70rem", height: "40rem" }}>
        <div className="hero-header">
          <DropdownButton id="dropdown-basic-button" title="">
            <Dropdown.Item href="">Action</Dropdown.Item>
            <Dropdown.Item href="">Another action</Dropdown.Item>
            <Dropdown.Item href="">Something else</Dropdown.Item>
          </DropdownButton>

          <div className="logo">
            <h2>Movies</h2>
            <FontAwesomeIcon icon={faGuilded} />
          </div>

          <div className="search-box">
            <button className="btn-search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <input
              type="text"
              class="input-search"
              placeholder="Type to Search..."
            />
          </div>
        </div>
        {body}
        {post !== null && <MovieModal />}
      </Card>
    </div>
  );
};

export default DashBoard;
