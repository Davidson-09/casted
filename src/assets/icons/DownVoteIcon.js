import * as React from "react"
import Svg, { Path } from "react-native-svg"

const DownVoteIcon = (props) => (
  <Svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9.262 10.738 15 16.462l5.738-5.724L22.5 12.5 15 20l-7.5-7.5 1.762-1.762Z"
      fill="#D61E29"
    />
  </Svg>
)

export default DownVoteIcon
