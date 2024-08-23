import { Word } from "@/types/types";
import axios from "axios";

export const fetchWords = async (): Promise<Word[]> => {
  const response = await axios.get<{ words: Word[] }>(
    process.env.NEXT_PUBLIC_LOCAL_HOST +
      "/words/search?created_at_to=2024-08-20&created_at_from=2024-08-01&learning_count_min=1&learning_count_max=5&correct_rate_min=0.1&average_duration_min=5&average_duration_max=5.1&status=completed&correct_rate_max=0.74"
  );

  return response.data.words;
};
