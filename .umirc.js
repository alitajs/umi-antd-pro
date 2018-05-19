export default {
  plugins: [
    ["umi-plugin-dva"],
    [
      "umi-plugin-routes",
      {
        update(routes) {
          return [
            // ...require("./src/pages/_routes"),
            ...routes
          ];
        }
      }
    ],
    // [
    //   "umi-plugin-dll",
    //   {
    //     exclude: [],
    //     include: ["dva", "dva/router", "dva/saga", "dva/fetch", "antd/es"]
    //   }
    // ]
  ],
  pages: {
    "/": {
      Route: "./src/components/Authorized/AuthorizedRoute.js",
      ignore: "/User"
    }
  },
  hashHistory: true
};
