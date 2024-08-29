import { UpdateWordHistoryProps } from "@/types/types";
import axios from "axios";

export default function useFlashcardUpdate() {
  const updateWordHistory = async ({
    word_id,
    duration,
    result,
    datetime,
  }: UpdateWordHistoryProps) => {
    try {
      axios.post(
        `${process.env.NEXT_PUBLIC_LOCAL_HOST}/words/${word_id}/histories`,
        {
          duration,
          result,
          datetime,
        }
      );
    } catch (error) {
      console.error("Error update histories: ", error);
    }
  };

  return {
    updateWordHistory,
  };
}
