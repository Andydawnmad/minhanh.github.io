# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with Hot Module Replacement (HMR) and some ESLint rules.

## Features

- Fast refresh for a better development experience.
- TypeScript support for type safety.
- ESLint configuration for code quality and style.

## Official Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) - Uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) - Uses [SWC](https://swc.rs/) for Fast Refresh.

## Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

1. Configure the top-level `parserOptions` property like this:

   ```js
   export default {
     // other rules...
     parserOptions: {
       ecmaVersion: "latest",
       sourceType: "module",
       project: ["./tsconfig.json", "./tsconfig.node.json"],
       tsconfigRootDir: __dirname,
     },
   };