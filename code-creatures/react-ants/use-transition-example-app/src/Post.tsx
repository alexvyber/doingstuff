import { forwardRef, useRef, useImperativeHandle } from "react"
import CommentList, { CommentListRef } from "./CommentList"
import AddComment from "./AddComment"

type InputRef = React.ElementRef<"input">

const Post = forwardRef<InputRef, Record<string, never>>((props, ref) => {
  const commentsRef = useRef<CommentListRef>(null)
  const addCommentRef = useRef<InputRef>(null)

  useImperativeHandle(
    ref,
    () => {
      return {
        scrollAndFocusAddComment() {
          commentsRef?.current?.scrollToBottomShit()
          addCommentRef?.current?.focus()
        },
      }
    },
    []
  )

  return (
    <>
      <article>
        <p>Welcome to my blog!</p>
      </article>
      <CommentList ref={commentsRef} />
      <AddComment ref={addCommentRef} />
    </>
  )
})

export default Post
