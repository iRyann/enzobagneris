# Développement avec Neovim sur Arch Linux

## Installation système
```bash
sudo pacman -S git base-devel nodejs npm
sudo npm i -g pnpm typescript typescript-language-server eslint_d prettier
```

## Plugins Neovim utiles
- `nvim-lspconfig`
- `nvim-cmp`
- `cmp-nvim-lsp`
- `LuaSnip`
- `null-ls.nvim` (ou équivalent pour formattage/diagnostics)
- `typescript.nvim`

## Configuration LSP TypeScript
```lua
require("lspconfig").tsserver.setup({})
```

## Commandes projet
- `pnpm dev`
- `pnpm build`
- `pnpm start`
- `pnpm validate`
