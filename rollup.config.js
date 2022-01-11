import merge from 'deepmerge';
import { createBasicConfig } from '@open-wc/building-rollup';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import nodeResolve from "@rollup/plugin-node-resolve";

const baseConfig = createBasicConfig();

export default merge(baseConfig, {
    input: './src/client.ts',
    output: {
        dir: 'dist',
        sourcemap: true,
        format: "iife"
    },
    plugins: [
        commonjs(),
        nodeResolve(),
        typescript(),
    ]
});
