import GoalItem from "./GoalItem";
import "./GoalList.css";
const GoalList = ({ items, onDeleteItem }) => {
  return (
    <ul className="goal-list">
      {items.map((goal) => (
        <GoalItem key={goal.id} id={goal.id} onDelete={onDeleteItem}>
          {goal.title}
        </GoalItem>
      ))}
    </ul>
  );
};

export default GoalList;
