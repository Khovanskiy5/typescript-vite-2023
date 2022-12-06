import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
//import { EsLinter, linterPlugin, TypeScriptLinter } from "vite-plugin-linter";


// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({

  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
//    linterPlugin({
//      include: ["./src/**/*.ts", "./src/**/*.tsx"],
//      linters: [
//        new EsLinter({ configEnv: configEnv }),
//        new TypeScriptLinter()
//      ],
//    }),
  ],

}))
