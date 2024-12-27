import { type CourseGoalProps } from "../types/Types.tsx";

export default function CourseGoal({ title, description }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div>
        <button>Delete</button>
      </div>
    </article>
  );
}
