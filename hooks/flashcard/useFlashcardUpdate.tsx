import axios from "axios";

export default function useFlashcardUpdate() {
  const updateWordHistory = async (
    word_id: string,
    duration: number,
    result: boolean,
    datetime: string
  ) => {
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
