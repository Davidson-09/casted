import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

const CommentIcon = (props) => (
    <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17.325 2.333c0-.916-.742-1.666-1.658-1.666H2.333c-.916 0-1.666.75-1.666 1.666v10c0 .917.75 1.667 1.666 1.667H14l3.333 3.333-.008-15Z"
      fill="#000"
    />
  </Svg>
)

export default CommentIcon
