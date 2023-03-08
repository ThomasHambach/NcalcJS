import path from 'path';
import ESLintPlugin from 'eslint-webpack-plugin';
import {fileURLToPath} from 'url';
import tspaths from 'tsconfig-paths-webpack-plugin';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nodeConfig = {
  mode: 'production',
  entry: './src/NCalc/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ncalc.node.js',
    chunkFormat: 'module',
    library: {
      type: 'module',
    },
  },
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [
      new tspaths({
        /* options: see below */
      }),
    ],
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new ESLintPlugin()],
  experiments: {
    outputModule: true,
  },
  devtool: 'source-map',
};

const webConfig = {
  mode: 'production',
  entry: './src/NCalc/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ncalc.web.js',
    library: {
      type: 'module',
    },
  },
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      fs: false,
    },
    plugins: [
      new tspaths({
        /* options: see below */
      }),
    ],
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  performance: {
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
  },
  plugins: [new ESLintPlugin()],
  experiments: {
    outputModule: true,
  },
  devtool: 'source-map',
};

export default [nodeConfig, webConfig];
