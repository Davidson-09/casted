import * as React from "react"
import Svg, { Path } from "react-native-svg"

const DownVoteIcon = (props) => (
  <Svg
    width={10}
    height={7}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.175.158 5 3.975 8.825.158 10 1.333l-5 5-5-5L1.175.158Z"
      fill="#D61E29"
    />
  </Svg>
)

export default DownVoteIcon
