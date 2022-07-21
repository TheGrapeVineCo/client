const Comment = ({ message }) => {
  return (
    <>
      <h1>New Comment</h1>
      <p>{message.text}</p>
      <p>{message.user}</p>
    </>
  );
};

export default Comment;
