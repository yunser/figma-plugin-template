# figma-plugin-template

Figma plugin template.

Figma 插件模板。


## 技术栈

* React 17
* Vite
* LESS


## 安装

```bash
pnpm install
```

## 使用

1. Modify the name field in package.json to change the name of the plugin
2. dependencies install
3. open `Figma` > `Plugins` > `Development` > `import plugin from manifest...` > `your-project/plugin/manifest.json`
4. `pnpm run dev`


## 特性

- **HMR**: Support HMR(Hot Module Replacement) of Plugin
- **Vite**: Bundle user interface and js code using ViteJs
- **React**: Use ReactJs to write the user interface


## 协议

[MIT License](https://github.com/yunser/figma-plugin-template/blob/main/LICENSE) &copy; 2022 [Yunser](https://github.com/yunser)


## 参考

* [yingpengsha/figma-plugin-vite-react-template](https://github.com/yingpengsha/figma-plugin-vite-react-template)
