import { forwardRef, useRef, useImperativeHandle } from "react"

export type CommentListRef = React.ElementRef<"div"> & { scrollToBottomShit: () => void }

const CommentList = forwardRef<CommentListRef, any>(function CommentList(props, ref) {
  const divRef = useRef<React.ElementRef<"div">>(null)

  useImperativeHandle(
    ref,
    () => {
      return {
        scrollToBottomShit() {
          if (!divRef.current) {
            return
          }

          const node = divRef.current
          node.scrollTop = node.scrollHeight
        },
      }
    },
    []
  )

  const comments = []

  for (let i = 0; i < 50; i++) {
    comments.push(<p key={i}>Comment #{i}</p>)
  }

  return (
    <div
      className="CommentList"
      ref={divRef}
      style={{ maxHeight: "300px", overflow: "scroll" }}
    >
      {comments}
    </div>
  )
})

export default CommentList
