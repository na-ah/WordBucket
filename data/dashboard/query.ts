export const queryByBoxName = {
  unlearned: "/words/search?status=unlearned",
  inProgress: "/words/search?status=in_progress",
  completed: "/words/search?status=completed",
  lowCount: "/words/search?learning_count_max=5",
  mediumCount: "/words/search?learning_count_min=5&learning_count_max=10",
  highCount: "/words/search?learning_count_min=10",
};
