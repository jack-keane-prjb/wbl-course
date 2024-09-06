const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const GLOBAL_CSS_REGEXP = /\.global\.css$/;

module.exports = (env) => {
  const isDevMode = env === 'development' ? true : false;

  const modules = {
    js: {
      test: /\.[tj]sx?$/,
      use: ['ts-loader'],
    },
    css: {
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: isDevMode,
            modules: {
              mode: 'local',
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          },
        },
        'postcss-loader',
      ],
      exclude: GLOBAL_CSS_REGEXP,
    },
    svg: {
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false,
              },
            },
          },
        },
      ],
    },
    fonts: {
      // TODO: обноавить это в шаблоне
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      // type: 'asset/resource',
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'assets/fonts/[contenthash].[ext]',
          },
        },
      ],
      // generator: {
      //   filename: '/assets/[name][ext]',
      // },
    },
    pics: {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'assets/pics/[contenthash].[ext]',
          },
        },
        {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true,
            },
            optipng: {
              enabled: false,
            },
            pngquant: {
              quality: [0.65, 0.9],
              speed: 4,
            },
            gifsicle: {
              interlaced: false,
            },
            webp: {
              quality: 75,
            },
          },
        },
      ],
    },
    globalCSS: {
      test: GLOBAL_CSS_REGEXP,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: isDevMode,
          },
        },
        'postcss-loader',
      ],
    },
    // cssIsomorph: {
    //   test: /\.css$/,
    //   use: [
    //     {
    //       loader: MiniCssExtractPlugin.loader,
    //     },
    //     {
    //       loader: 'css-loader',
    //     },
    //     {
    //       loader: 'postcss-loader',
    //     },
    //   ],
    // },
    // cssIsomorphGlobal: {
    //   test: GLOBAL_CSS_REGEXP,
    //   use: [
    //     {
    //       loader: MiniCssExtractPlugin.loader,
    //     },
    //     {
    //       loader: 'css-loader',
    //     },
    //     {
    //       loader: 'postcss-loader',
    //     },
    //   ],
    // },
    cssServer: {
      test: /\.css$/,
      use: [
        {
          loader: 'css-loader',
          options: {
            modules: {
              mode: 'local',
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
            onlyLocals: true,
          },
        },
      ],
    },
  };

  const resolve = {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, 'src/'),
    },
  };

  return {
    modules,
    resolve,
  };
};
