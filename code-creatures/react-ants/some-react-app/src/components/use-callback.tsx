import { useCallback, useEffect, useState } from "react"

export function Callback() {
  const [size, setSize] = useState(1)
  const [color, setColor] = useState("red")

  const mix = useCallback(() => console.log(`color is${color}`), [color])
  useEffect(() => {
    console.log("effect")
    mix()
  }, [mix])

  return (
    <div>
      <label>
        Size:
        <input
          value={size}
          onChange={(e) => setSize(Number.parseInt(e.target.value))}
          type="number"
        />
      </label>

      <label>
        Color
        <input
          value={color}
          type="text"
          onChange={(e) => setColor(e.target.value)}
        />
      </label>
    </div>
  )
}
