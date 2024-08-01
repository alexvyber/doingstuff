import { useState } from "react"
import { Second } from "./Second"

export function First() {
  const [count, setCount] = useState(0)

  //   const some = useCallback(() => {},[])
  const some = () => {}

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <Second fn={some} />
    </div>
  )
}
