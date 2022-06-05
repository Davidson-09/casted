import * as React from "react"
import Svg, { Path } from "react-native-svg"

const UpvoteIcon = (props) => (
  <Svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9.262 19.262 15 13.537l5.738 5.725L22.5 17.5 15 10l-7.5 7.5 1.762 1.762Z"
      fill="#1AF557"
    />
  </Svg>
)

export default UpvoteIcon
