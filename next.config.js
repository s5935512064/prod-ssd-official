const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["vanilla-cookieconsent"]);
const webpack = require("webpack");


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['th', "en",],
    defaultLocale: 'th',
    domains: [
      {
        domain: 'https://siamsindhorn.com',
        defaultLocale: 'th',
      }
    ],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
      })
    );
    if (isServer) {
      require("./scripts/sitemap-generator");
    }
    return config;
  },
}

module.exports = withPlugins([nextConfig, withTM]);
