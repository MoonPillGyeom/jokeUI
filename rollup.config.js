import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import analyze from 'rollup-plugin-analyzer';
import replace from '@rollup/plugin-replace';
import packageJson from './package.json' assert { type: 'json' };

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
        preventAssignment: true,
      }), // development -> production 수정
      analyze({ summaryOnly: true }), // 번들 크기 분석
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
      }),

      postcss({
        config: { path: './postcss.config.js' },
        extensions: ['.css'],
        minimize: true,
        sourceMap: true,
        modules: true,
      }),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
