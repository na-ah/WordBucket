import { sample } from "@/data/reader/source";
import useIndex from "./useIndex";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { WordStatus } from "@/types/types";

export default function useWordStatus() {
  const { articleWords } = useIndex(sample);
  const [wordStatus, setWordStatus] = useState<WordStatus | undefined>();

  const fetchWordsStatus = useCallback(async () => {
    try {
      const res = await axios.get(
        `${
          process.env.NEXT_PUBLIC_LOCAL_HOST
        }/words/list?words=${articleWords.join(",")}`
      );
      console.log(res.data);
      return res.data;
    } catch (e) {
      console.log(e);
      return {};
    }
  }, [articleWords]);

  const fetchStatus = useCallback(async () => {
    const status = await fetchWordsStatus();
    setWordStatus(status);
  }, [fetchWordsStatus]);

  useEffect(() => {
    fetchStatus();
  }, [fetchStatus]);

  return {
    wordStatus,
    fetchStatus,
  };
}
