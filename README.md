# Problem

Using Material-UI (V3) with gatsby (V2) has some problem related to [jss](https://github.com/cssinjs/jss).

## e.g. svg icon styles break (it should be the default size 24x24)
![](https://github.com/github0013/gatsby.v2-mui.v3/blob/master/icon-style-fails.png)


# Solutions

1. https://github.com/github0013/gatsby.v2-mui.v3/commit/36b1f97f9c544db1c6ffa4775434fc22beba4199  
Follow [this example](https://github.com/mui-org/material-ui/tree/master/examples/gatsby) and edit files here and there.
1. https://github.com/github0013/gatsby.v2-mui.v3/commit/31ba54b7460213e832345b11e1a11db395109a52  
Add [this plugin](https://www.gatsbyjs.org/packages/@wapps/gatsby-plugin-material-ui/) and remove `<MuiThemeProvider>`
