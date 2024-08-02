export function Third({ fn }: { fn: () => void }) {
  console.log("render Third")

  return <button onClick={fn}>adfasdf</button>
}
