import { forwardRef } from "react"

type InputRef = React.ElementRef<"input">

const AddComment = forwardRef<InputRef, any>(function AddComment(props, ref) {
  return (
    <input
      placeholder="Add comment..."
      ref={ref}
    />
  )
})

export default AddComment
