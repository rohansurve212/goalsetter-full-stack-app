/** @format */

import axios from "axios";

const API_URL = "/api/goals";

//Create new goal
const createGoal = async (goalText, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, goalText, config);

  return response.data;
};

//Get user goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

//Update user goal
const updateGoal = async (updatedGoalInput, token) => {
  const reqBody = { text: updatedGoalInput.text };
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    `${API_URL}/${updatedGoalInput._id}`,
    reqBody,
    config
  );

  return response.data;
};

//Delete user goal
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(`${API_URL}/${goalId}`, config);

  return response.data;
};

const goalService = {
  createGoal,
  getGoals,
  updateGoal,
  deleteGoal,
};

export default goalService;
