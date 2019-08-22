const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-getting-started-mdx": hot(preferDefault(require("/home/vsumurduc/Documents/workspace/react/react-utilities-library/src/GettingStarted.mdx"))),
  "component---src-button-button-mdx": hot(preferDefault(require("/home/vsumurduc/Documents/workspace/react/react-utilities-library/src/Button/Button.mdx"))),
  "component---src-rating-rating-mdx": hot(preferDefault(require("/home/vsumurduc/Documents/workspace/react/react-utilities-library/src/Rating/Rating.mdx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/vsumurduc/Documents/workspace/react/react-utilities-library/.docz/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/vsumurduc/Documents/workspace/react/react-utilities-library/.docz/src/pages/404.js")))
}

