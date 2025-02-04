import { useState } from "react";
import Button from "../UI/Button";
import classes from "./GoalInput.module.css";
import ErrorModal from "../UI/ErrorModal";

const GoalInput = ({ onAddGoal }) => {
  const [eneteredGoal, setEneteredGoal] = useState("");
  const [hasError, setHasError] = useState();
  const changeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setHasError(false);
    }
    setEneteredGoal(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (eneteredGoal.trim().length === 0) {
      setHasError({
        title: "Empty Field!",
        message: "Please Enter A Valid Goal!",
      });
      return;
    }

    onAddGoal(eneteredGoal);
    setEneteredGoal("");
  };

  const errorHandler = () => {
    setHasError(null);
  };

  return (
    <form onSubmit={submitHandler}>
      <div
        className={`${classes["form-control"]} ${hasError && classes.invalid}`}
      >
        <label htmlFor="goal">Add Your Goal</label>
        <input
          id="goal"
          type="text"
          onChange={changeHandler}
          value={eneteredGoal}
          placeholder="Enter your to-do..."
          autoFocus
        />
        {hasError && (
          <ErrorModal
            title={hasError.title}
            message={hasError.message}
            onConfirm={errorHandler}
          />
        )}
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default GoalInput;
