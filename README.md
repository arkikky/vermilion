## Vermilion VSCode Theme's

A beautifully crafted custom Visual Studio Code theme optimized for readability, color balance, and developer focus.  
This theme supports multiple languages and frameworks including **JavaScript, TypeScript, Python, PHP, Go, Java, CSS, TailwindCSS, HTML, Next.js, and SQL.**

- Elegant color palette for clean syntax highlighting.
- Works great with dark and light UI.
- Support for Next.js, React.js, JavaScript, TypeScript, PHP, Python, Go, Java, HTML, CSS, TailwindCSS, JSON and SQL.
- **Elegant color palette** for clean syntax highlighting and consistent contrast.
- **Works great with dark and light UI**, maintaining visual harmony across panels and status bars.
- **Support for modern frameworks** — including Next.js, React.js, JavaScript, TypeScript, PHP, Python, Go, Java, HTML, CSS, TailwindCSS, JSON and SQL.
- **Quality-of-life tweaks** such as smooth scrolling, bracket pair colorization, linked editing, and inlay hint adjustments for a seamless coding experience.
- **Performance & stability optimizations**, build directories, reduced motion, and disabled telemetry for privacy and lightweight operation.
- **Refined terminal & UI configuration** to ensure clarity, responsive layout, and consistent color behavior throughout the interface.

Enjoy a balance of beauty and performance designed to keep you focused on what truly matters your code.

---

## 🧑 Getting started

You can install this theme through the Visual Studio Marketplace

1. Open Extensions sidebar panel in VS Code. View → Extensions
2. Search for HackTheBox
3. Click Install to install the theme
4. Click Reload to reload your editor
5. File > Preferences > Settings > Workbench > Color Theme > HackTheBox
6. Optional: Use the recommended settings below for best experience

## Installation via command line

```
$ git clone https://github.com/silofy/hackthebox.git ~/.vscode/extensions/HackTheBox
$ cd ~/.vscode/extensions/HackTheBox
$ npm install && npm run build
```

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

## 💖 License

MIT © 2025 – Crafted with ❤️ by ArkIkky.
