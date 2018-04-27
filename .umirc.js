
export default {
  plugins: [
    ['umi-plugin-dva'],
    ['umi-plugin-routes', {
      exclude: [
        /exclude/,
      ],
    }],
  ],
  pages: {
    '/': { Route: './src/components/Authorized/AuthorizedRoute.js',ignore:'/User' }
  },
  hashHistory: true
}
