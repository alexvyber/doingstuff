import { useEffect, useState } from "react"

export function Effect({ some }: { some: string }) {
  const [state, setState] = useState(0.0)

  const [more, setMore] = useState(0.0)

  useEffect(() => {
    console.log("effect")
    console.log(some)
  }, [more, some])

  return (
    <>
      <button onClick={() => setState(Math.random())}>+++++++++++++++</button>
      <button onClick={() => setMore(Math.random())}>***************</button>
    </>
  )
}
