## Vermilion VSCode Theme's

### 🎨 Custom VS Code Theme

A beautifully crafted custom Visual Studio Code theme optimized for readability, color balance, and developer focus.
This theme supports multiple languages and frameworks including JavaScript, TypeScript, Python, PHP, Go, Java, CSS, TailwindCSS, HTML, Next.js, and SQL.
- Elegant color palette for clean syntax highlighting.
- Works great with dark and light UI.
- Support for Next.js, Vue.js, React, Node.js, and more.

---

## 🧑‍💻 Contribute

1. Clone and open this repo in VS Code.  
2. Run `yarn` to install the dependencies.  
3. Press `F5` to open a new window with your extension loaded.  
4. Open **Code > Preferences > Color Theme [⌘K ⌘T]** and pick the “GitHub ...” theme you want to test.  
> Note: It seems this has to be done twice because the first time it switches back to the default light theme (possibly a bug).  
5. Make changes to the `/src/theme.js` file.  
6. **UI changes:**  
- For all outer UI elements (status bar, file navigation, etc.), check the [Theme Color Reference](https://code.visualstudio.com/api/references/theme-color).  
7. **Syntax changes:**  
- For code highlighting tweaks, inspect syntax scopes by invoking the command:  
  ```
  Developer: Inspect Editor Tokens and Scopes
  ```
  from the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P` on Mac) in the Extension Development Host window.  
8. Run `yarn build` to update the theme.  
- Or run `yarn start` to automatically rebuild while making changes (no reload necessary).  
9. Once you're happy, commit your changes and open a Pull Request.

---

## 🚢 Publish (internal)

> **Note:** Publishing a new version of this theme is only meant for maintainers.

This repo uses **Changesets** to automatically update the `CHANGELOG.md` file and publish a new version to the **VS Marketplace**.
To publish:
```bash
yarn changeset
yarn changeset version
yarn release
```

---

## 💖 License

MIT © 2025 – Crafted with ❤️ by ArkIkky.
