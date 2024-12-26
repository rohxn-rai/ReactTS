import CourseGoal from "./CourseGoal.tsx";
import { CourseGoalListProps, CourseGoalProps } from "../types/Types.tsx";

export default function CourseGoalList({ goals }: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal: CourseGoalProps) => (
        <li key={goal.id}>
          <CourseGoal
            id={goal.id}
            title={goal.title}
            description={goal.description}
          />
        </li>
      ))}
    </ul>
  );
}
