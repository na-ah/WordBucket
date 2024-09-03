import PageTitle from "@/components/shared/PageTitle";
import Layout from "@/components/Template/Layout/Layout";
import NewWord from "@/components/wordForm/newWord";
import { Word, WordInputs } from "@/types/types";
import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function WordForm() {
  const [newWords, setNewWords] = useState<Word[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WordInputs>();

  const onSubmit: SubmitHandler<WordInputs> = (data) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_LOCAL_HOST}/words?word=${data.word}`)
      .then((res) => {
        console.log(res.data.data);
        const newWord = res.data.data;
        setNewWords([...newWords, newWord]);
      })
      .catch((error) => console.log(error));
    reset();
  };

  return (
    <>
      <Layout>
        <div className="flex flex-col h-dvh">
          <PageTitle title={"WordForm"} />
          <div className="flex-grow">form</div>
          <div className="overflow-y-auto">
            {newWords.length > 0 &&
              newWords.map((newWord, i) => (
                <NewWord
                  newWord={newWord}
                  key={i}
                />
              ))}
          </div>
          <form
            className="py-5 px-3 flex gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              {...register("word", { required: true })}
              placeholder="新規単語を追加"
              className="bg-zinc-700 w-full py-3 outline-none px-6 rounded"
            />
            {errors.word && <span>This field is required</span>}
            <input
              type="submit"
              value="+ 追加"
              className="bg-zinc-700 rounded px-5"
            />
          </form>
        </div>
      </Layout>
    </>
  );
}
