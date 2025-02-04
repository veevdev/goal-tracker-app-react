import { useState } from 'react';
import './App.css';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';
import ErrorModal from './UI/ErrorModal';

const App = () => {
  const [goals, setEneteredGoals] = useState([
    { title: 'Reading Book', id: 'g1' },
    { title: 'Finish The Course', id: 'g2' },
  ])

  const addGoalHandler = eneteredGoal => {
    setEneteredGoals(prevGoals => {
      return [...prevGoals, { title: eneteredGoal, id: Math.random().toString() }];
    })
  }

  const deletItem = goalId => {
    const updatedGoal = goals.filter(goal => goal.id !== goalId);
    setEneteredGoals(updatedGoal)
  }
  return (
    <div>
      <section id='goal-form'>
        <GoalInput onAddGoal={addGoalHandler} />
      </section>
      <section id='goals'>
        <GoalList items={goals} onDeleteItem={deletItem} />
      </section>
    </div>
  );
}

export default App;
