import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {

  external: ['dotenv'],

  input: 'src/index.mjs',

  output: {
    file: 'dist/strict-env.js',
    format: 'cjs',
    sourcemap: true,
  },

  plugins: [
    resolve({
      extensions: ['.mjs'],
      modulesOnly: true,
    }),
    babel({
      exclude: 'node_modules/**',
    }),
  ],

};
