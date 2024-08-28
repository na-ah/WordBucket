import { QueryByBoxName } from "@/types/types";

export const queryByBoxName: QueryByBoxName = {
  unlearned: "/words/search?status=unlearned",
  inProgress: "/words/search?status=in_progress",
  completed: "/words/search?status=completed",
  lowCount: "/words/search?learning_count_max=5&status=completed",
  mediumCount:
    "/words/search?learning_count_min=5&learning_count_max=10&status=completed",
  highCount: "/words/search?learning_count_min=10&status=completed",
  lowAccuracyRate: "/words/search?correct_rate_max=0.2&status=completed",
  mediumAccuracyRate:
    "/words/search?correct_rate_min=0.2&correct_rate_max=0.5&status=completed",
  highAccuracyRate: "/words/search?correct_rate_min=0.5&status=completed",
  shortDuration: "/words/search?average_duration_max=2&status=completed",
  mediumDuration:
    "/words/search?average_duration_min=2&average_duration_max=5&status=completed",
  longDuration: "/words/search?average_duration_min=5&status=completed",
};
