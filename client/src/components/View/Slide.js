import React, { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";
const Slide = ({ item, post}) => {
  const { setShowMovieModal, findPost } = useContext(PostContext);

  const onFindMovieHandler = (postId) => {
    findPost(postId);
    setShowMovieModal(true);
  }

  return (
    <div className="slide-item">
      <div className="slide-name">
        <p>{item.name}</p>
      </div>
      <div className="slide-top">
        <div className="slide-icon">
          <img src={item.image} alt="bck-movie" onClick={onFindMovieHandler.bind(this, post._id)}/>
        </div>
      </div>
    </div>
  );
};

export default Slide;
