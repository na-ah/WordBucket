import Presenter from "./presenter";

export default function FlashcardArea() {
  return (
    <>
      <Presenter
        word={"dog"}
        remainingTimePercentage={20}
      />
    </>
  );
}
