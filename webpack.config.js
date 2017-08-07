/* eslint-disable */

const paths = require('./src/main/js/config/paths');

const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');

const postCSSFlexbugsFixes = require('postcss-flexbugs-fixes');
const NpmInstallPlugin = require('npm-install-webpack2-plugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');

module.exports = {
    devtool: 'cheap-module-eval-source-map',

    entry: [
        'babel-polyfill',
        './src/main/js/index'
    ],

    output: {
        path: path.join(__dirname, 'target/classes/static/built'),
        filename: 'app.js',
        publicPath: 'target/classes/static/built'
    },

    plugins: [
        new NpmInstallPlugin()
    ],

    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                use: [{
                    options: {
                        formatter: eslintFormatter
                    },
                    loader: require.resolve('eslint-loader')
                }],
                include: paths.appSrc
            },
            // {
            //   exclude: [
            //     /\.html$/,
            //     /\.(js|jsx)$/,
            //     /\.css$/,
            //     /\.json$/,
            //     /\.bmp$/,
            //     /\.gif$/,
            //     /\.jpe?g$/,
            //     /\.png$/
            //   ],
            //   loader: require.resolve('file-loader'),
            //   options: {
            //     name: './media/[name].[hash:8].[ext]',
            //   }
            // },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve('url-loader'),
                options: {
                    limit: 10000,
                    name: './media/[name].[hash:8].[ext]',
                }
            },
            // Process JS with Babel.
            {
                test: /\.(js|jsx)$/,
                include: paths.appSrc,
                loader: require.resolve('babel-loader'),
                options: {
                    cacheDirectory: true
                }
            },
            {
                test: /\.css$/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                autoprefixer({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9' // React doesn't support IE8 anyway
                                    ],
                                    flexbox: 'no-2009'
                                })
                            ]
                        }
                    }
                ]
            }
        ]
    }
};