export type CourseGoal = {
  id: number;
  title: string;
  description: string;
};

export type CourseGoalProps = {
  id: number;
  title: string;
  description: string;
};

export type CourseGoalListProps = {
  goals: CourseGoalProps[];
};
