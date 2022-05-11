import * as React from "react"
import Svg, { Path } from "react-native-svg"

const UpvoteIcon = (props) => (
  <Svg
    width={10}
    height={7}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.175 6.842 5 3.025l3.825 3.817L10 5.667l-5-5-5 5 1.175 1.175Z"
      fill="#1AF557"
    />
  </Svg>
)

export default UpvoteIcon
