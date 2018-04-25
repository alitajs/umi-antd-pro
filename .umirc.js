
export default {
  plugins: [
    ['umi-plugin-dva'],
    ['umi-plugin-routes', {
      exclude: [
        /exclude/,
      ],
    }],
  ],
  hashHistory: true
}
