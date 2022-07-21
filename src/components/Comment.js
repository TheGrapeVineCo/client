const Comment = ({ message }) => {
  return (
    <>
      <p>{message.text}</p>
      <p>{message.user}</p>
    </>
  );
};

export default Comment;
