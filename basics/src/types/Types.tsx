export type CourseGoal = {
  id: number;
  title: string;
  description: string; // corrected typo
};

export type CourseGoalListProps = {
  goals: { id: number; title: string; description: string }; // corrected typo
}[];

export type CourseGoalProps = {
  id: number;
  title: string;
  description: string;
};
