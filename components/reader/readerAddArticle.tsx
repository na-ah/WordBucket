import { Dispatch, SetStateAction } from "react";

export default function ReaderAddArticle({
  setIsShowAddArticleForm,
}: {
  setIsShowAddArticleForm: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <div
        className="text-2xl cursor-pointer"
        onClick={() => setIsShowAddArticleForm(true)}
      >
        +
      </div>
    </>
  );
}
