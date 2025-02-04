import "./GoalItem.css";
const GoalItem = ({ children, id, onDelete }) => {
  const deleteHandler = () => {
    onDelete(id);
  };
  return (
    <li className="goal-item" onClick={deleteHandler}>
      {children}
    </li>
  );
};

export default GoalItem;
