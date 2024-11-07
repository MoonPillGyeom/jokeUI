import path from 'path';
import { fileURLToPath } from 'url';

// ES 모듈에서 __dirname을 사용하려면 import.meta.url을 이용해야 함
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'development', // 혹은 'production'
  entry: './src/index.ts', // 엔트리 포인트 수정
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // __dirname을 사용할 수 있음
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
};
