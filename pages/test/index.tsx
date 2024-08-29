// const queryAtom = atom("/words/search?correct_rate_min=0.5&status=completed");
//
// const queryAtom = atom(queryByBoxName["lowCount"]);
// const wordsPoolAtom = atom(async (get) => {
//   const query = get(queryAtom);
//   const response = await axios.get<Word[]>(
//     `${process.env.NEXT_PUBLIC_LOCAL_HOST}${query}`
//   );
//   const data: Word[] = await response.data.words;
//   return data;
// });

// export const currentDeckIndexAtom = atom(0);
// export const batchSizeAtom = atom(10);
// export const currentDeckAtom = atom(async (get) => {
//   const wordsPool = await get(wordsPoolAtom);
//   const batchSize = get(batchSizeAtom);
//   const currentDeckIndex = get(currentDeckIndexAtom);

//   return wordsPool.slice(
//     batchSize * currentDeckIndex,
//     batchSize * (currentDeckIndex + 1)
//   );
// });

// function Next() {
//   const setQuery = useSetAtom(queryAtom);

//   return (
//     <button onClick={() => setQuery(queryByBoxName["mediumCount"])}>
//       shortDuration
//     </button>
//   );
// }

// function Query() {
//   const [query] = useAtom(queryAtom);
//   return query;
// }

// function TestData() {
//   const [currentDeck] = useAtom(currentDeckAtom);
//   // console.log(wordsPool);
//   console.log(currentDeck);
//   // return <>{wordsPool && <p>{wordsPool.length}</p>}</>;
//   return (
//     <>
//       {currentDeck && (
//         <div>
//           {currentDeck.map((word, i) => (
//             <p key={i}>{word.word}</p>
//           ))}
//         </div>
//       )}
//     </>
//   );
// }

// export default function Test() {
//   return (
//     <>
//       <Query />
//       <div>
//         <Suspense fallback={<h2>Loading...</h2>}>
//           <TestData />
//         </Suspense>
//       </div>
//       <Next />
//     </>
//   );
// }
