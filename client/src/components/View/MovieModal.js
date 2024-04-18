import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { PostContext } from "../../contexts/PostContext";
const UpdatePostModal = ({ _id }) => {
  const {
    showMovieModal,
    setShowMovieModal,
    postsState: { post },
  } = useContext(PostContext);

  const closeModalHandler = () => {
    setShowMovieModal(false);
  };

  return (
    <div>
      <Modal show={showMovieModal} onHide={closeModalHandler}>
        <Modal.Header closeButton onHide={closeModalHandler}>
          <Modal.Title>{post.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card
            style={{
              width: "29rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              border: "none",
            }}
          >
            <Card.Img
              variant="top"
              src={post.image}
              style={{ width: "250px" }}
            />
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card.Text>
                <div>{post.time} min</div>

                <div>{post.year}</div>
              </Card.Text>

              <Card.Text>{post.introduce}</Card.Text>
              <Button variant="primary">PAK & CHILL NOW!!!</Button>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UpdatePostModal;
