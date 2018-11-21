import * as React from 'react'
import { Star as StarIcon } from '@material-ui/icons'

export interface MuiTestProps {}

export default class MuiTest extends React.Component<MuiTestProps, any> {
  public render() {
    return <StarIcon />
  }
}
