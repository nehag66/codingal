import React, { useEffect, useState } from "react";
import Navibar from "../../components/Navbar/Navbar";
import {
  ListGroup,
  ListGroupItemText,
  ListGroupItemHeading,
  ListGroupItem,
} from "reactstrap";
import axios from "axios";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Navibar />
      <div className="posts-list">
        <ul>
          {posts.map((post) => (
            <ListGroup key={post.id}>
              <ListGroupItem>
                <ListGroupItemHeading>{post.title}</ListGroupItemHeading>
                <ListGroupItemText>{post.body}</ListGroupItemText>
              </ListGroupItem>
            </ListGroup>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Posts;
