import { useState } from "react"
import "./App.css"
import { Effect } from "./components/use-effect"
import usePagination from "./hooks/use-pagination"
import { Callback } from "./components/use-callback"
import { UseMemo } from "./components/use-memo"
import { Ref } from "./components/use-ref"

function App() {
  const value = usePagination(100, 5, 10)
  const [some, setSome] = useState("")

  return (
    <>
      <Ref />
      <UseMemo />
      <Callback />
      <button onClick={() => setSome((prev) => `${prev}s`)}>SOME</button>
      <Effect some={some} />
    </>
  )
}

export default App
