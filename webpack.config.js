const path = require("path");

const BUILD_DIR = "dist";
const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, BUILD_DIR),
    },
    module: {
        rules: [
            // .vue 파일 로더 정의
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)|(dist)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.svelte$/,
                use: {
                    loader: 'svelte-loader',
                    options: {
                        compilerOptions: {
                            dev: !prod
                        },
                        emitCss: prod,
                        hotReload: !prod
                    }
                }
            },
            {
                test: /node_modules\/svelte\/.*\.mjs$/,
                resolve: {
                    fullySpecified: false
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    resolve: {
        extensions: [".js", ".vue", '.mjs', '.svelte', ".jsx", ".css"],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            svelte: path.dirname(require.resolve('svelte/package.json'))
        }
    },
    plugins: [


    ],
};


