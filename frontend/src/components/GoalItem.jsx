/** @format */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaEdit, FaCheck, FaTrash } from "react-icons/fa";

import { updateGoal, deleteGoal } from "../features/goals/goalSlice";

const GoalItem = ({ goal }) => {
  const [editGoal, setEditGoal] = useState(false);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const editButtonClickHandler = () => {
    setEditGoal(!editGoal);
  };

  const checkButtonClickHandler = () => {
    const updatedGoalInput = {
      _id: goal._id,
      text: text,
    };
    dispatch(updateGoal(updatedGoalInput));
  };

  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString("en-us")}</div>
      <div className="form-group">
        {editGoal && (
          <>
            <input
              type="text"
              name="text"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button onClick={checkButtonClickHandler} className="check">
              <FaCheck />
            </button>
          </>
        )}
        <h2>{goal.text}</h2>
      </div>

      <button onClick={editButtonClickHandler} className="edit">
        <FaEdit />
      </button>

      <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">
        <FaTrash />
      </button>
    </div>
  );
};

export default GoalItem;
