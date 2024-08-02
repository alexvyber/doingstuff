import { useMemo, useState } from "react"

const someList = Array(1_000_000_0)
  .fill(null)
  .map((_, i) => i + 1)

export const UseMemo = () => {
  const [query, setQuery] = useState("")
  const [isDark, setIsDark] = useState(false)

  const filteredList = useMemo(() => someList.filter((num) => num.toString().includes(query)), [query])
  // const filteredList = someList.filter(num => num.toString().includes(query))

  return (
    <div>
      <label>
        Query:
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>

      <label>
        <input
          type="checkbox"
          onChange={(e) => setIsDark(e.target.checked)}
          checked={isDark}
        />
        Dark mode
      </label>

      {filteredList.length < 100 && filteredList.map((item) => <div>{item}</div>)}
    </div>
  )
}
