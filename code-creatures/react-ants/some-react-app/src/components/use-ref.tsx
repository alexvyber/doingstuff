import { useEffect, useRef } from "react"

export const Ref = () => {
  const ref = useRef("Some Value")
  const inputRef = useRef<React.ElementRef<"input">>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    console.log("rerender")
  }, [])

  return (
    <>
      <input ref={inputRef} />
      <input ref={inputRef} />
      <button
        onClick={() => {
          ref.current = `More Values ${Math.random()}`
          console.log(ref.current)
        }}
      >
        Checnge ref
      </button>
    </>
  )
}
