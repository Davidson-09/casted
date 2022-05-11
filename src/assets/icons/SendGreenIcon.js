import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

const SendGreenIcon = (props) => (
  <Svg
    width={50}
    height={50}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={25} cy={25} r={25} fill="#23BF9A" />
    <Path
      d="M16.675 32.5 34.167 25l-17.492-7.5-.008 5.833L29.167 25l-12.5 1.667.008 5.833Z"
      fill="#fff"
    />
  </Svg>
)

export default SendGreenIcon
