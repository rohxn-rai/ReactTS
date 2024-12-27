import goalsImg from "./assets/goals.jpg";
import CourseGoal from "./components/CourseGoal";
import CourseGoalList from "./components/CourseGoalList";
import Header from "./components/Header";
import { useState } from "react";

type CourseGoal = {
  id: number;
  title: string;
  description: string;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "Learn React + TS",
        description: "Learn it from the ground up!",
      };

      return [...prevGoals, newGoal];
    });
  }

  return (
    <main>
      <div>
        <Header image={{ src: goalsImg, alt: "A list of goals" }}>
          <h1>Goal Manager</h1>
        </Header>
        <button onClick={handleAddGoal}>Add your Goal</button>
        <CourseGoalList goals={goals} />
      </div>
    </main>
  );
}

export default App;
