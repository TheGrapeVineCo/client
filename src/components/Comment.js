/* setup but may be redundant - need to look into this further - setup also incomplete*/
const Comment = ({ message }) => {
  return (
    <>
      <p>{message.text}</p>
      <p>{message.user}</p>
    </>
  );
};

export default Comment;
