/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const rucksack = require('rucksack-css');
const lost = require('lost');
const cssnext = require('postcss-cssnext');
const cssnested = require('postcss-nested');
const atImport = require('postcss-import');

exports.modifyWebpackConfig = function({ config, stage }) {
  config.merge({
    postcss: [
      atImport(),
      cssnested,
      lost(),
      rucksack(),
      cssnext({
        browsers: ['>1%', 'last 2 versions']
      }),
    ],
  });

  return config;
};
