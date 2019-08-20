export const imports = {
  'src/GettingStarted.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-getting-started" */ 'src/GettingStarted.mdx'
    ),
  'src/Button/Button.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-button-button" */ 'src/Button/Button.mdx'
    ),
  'src/Rating/Rating.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-rating-rating" */ 'src/Rating/Rating.mdx'
    ),
}
