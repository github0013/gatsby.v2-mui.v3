import * as React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core'
export const theme = createMuiTheme({})

import { Star as StarIcon } from '@material-ui/icons'

import withRoot from '../../withRoot'

export interface MuiTestProps {}

class MuiTest extends React.Component<MuiTestProps, any> {
  public render() {
    return (
      <MuiThemeProvider theme={theme}>
        <StarIcon />
      </MuiThemeProvider>
    )
  }
}

export default withRoot(MuiTest)
