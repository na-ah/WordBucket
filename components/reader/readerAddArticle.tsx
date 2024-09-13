export default function ReaderAddArticle({
  isShowAddArticleForm,
  setIsShowAddArticleForm,
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
