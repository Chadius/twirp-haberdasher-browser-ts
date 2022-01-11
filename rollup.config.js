import merge from 'deepmerge';
import { createBasicConfig } from '@open-wc/building-rollup';
import typescript from '@rollup/plugin-typescript';
import {nodeResolve} from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs"

const baseConfig = createBasicConfig();

export default merge(baseConfig, {
    input: './src/client.ts',
    output: {
        dir: 'dist',
        format: 'iife',
        sourcemap: true
    },
    plugins: [nodeResolve(), typescript(), commonjs()]
});