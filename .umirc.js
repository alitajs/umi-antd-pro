export default {
  plugins: [
    ["umi-plugin-dva"],
    [
      "umi-plugin-routes",
      {
        update(routes) {
          return [
            ...routes,
            // ...require("./src/pages/_routes")
          ];
        }
      }
    ]
  ],
  pages: {
    "/": {
      Route: "./src/components/Authorized/AuthorizedRoute.js",
      ignore: "/User"
    }
  },
  hashHistory: true
};
