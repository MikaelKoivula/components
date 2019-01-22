import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
// eslint-disable-next-line
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        commentText="Nice blog post!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:00PM"
        commentText="Nice post btw!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Today at 5:00PM"
        commentText="I'm impressed! :)"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
