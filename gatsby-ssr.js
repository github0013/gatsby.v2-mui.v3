/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

// copied from
// https://github.com/mui-org/material-ui/blob/c7eae1d12b5b7b24b2758bc4262ef5ca9905e172/examples/gatsby/gatsby-ssr.js
const React = require('react')
const { renderToString } = require('react-dom/server')
const JssProvider = require('react-jss/lib/JssProvider').default
const getPageContext = require('./src/getPageContext').default

function replaceRenderer({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) {
  // Get the context of the page to collected side effects.
  const muiPageContext = getPageContext()

  const bodyHTML = renderToString(
    <JssProvider registry={muiPageContext.sheetsRegistry}>
      {bodyComponent}
    </JssProvider>
  )

  replaceBodyHTMLString(bodyHTML)
  setHeadComponents([
    <style
      type="text/css"
      id="jss-server-side"
      key="jss-server-side"
      dangerouslySetInnerHTML={{
        __html: muiPageContext.sheetsRegistry.toString(),
      }}
    />,
  ])
}

exports.replaceRenderer = replaceRenderer
