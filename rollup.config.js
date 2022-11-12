import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';

export default {
    input: './src/index.ts', // main file to pull our library from
    output: [ // output format
        {
            file: './build/bundle.js', // our output file
            format: 'cjs', // output format; cjs = commonjs (what nodejs is written in)
        }
    ],
    plugins: [
        typescript(),
        babel() // This will use the config found in package.json that we defined
    ]
}