# prnmjpngst - Personal Homepage

Clean, minimalist personal website showcasing: "prnmjpngst" and the tagline "My second brain, but messier."

## Features

- **Minimal homepage** with clean typography
- **OG image generation** via Cloudflare Workers (site: `og.png`)
- **Lightweight design** using TailwindCSS
- **Modular structure** ready for easy customization

## Project State

This repository has been streamlined:

- ✅ **Personal homepage** showcasing prnmjpngst with tagline
- ✅ **OG image endpoint** (`/og.png`) for social sharing
- ✅ **Assets and fonts** (placeholder images, Atkinson fonts)
- ✅ **Modern Astro** v6 with Cloudflare Workers adapter

### Removed Content

The following have been removed:
- Legacy A.I. chat assistant
- Blog posts and content collection
- Regulatory content
- Navigation menus for blog and A.I.

### Available Zones for Future Development

The cleaned project now provides a **blank canvas** for:

- Adding personal content sections
- Integrating new features
- Adding AI-powered tools
- Creating content management systems
- Building additional learning modules

## Commands

Run from project root:

| Command                   | Action                 |
|---------------------------|-----------------------|
| `pnpm install`             | Install dependencies   |
| `pnpm dev`                 | Start local dev server |
| `pnpm build`               | Build production site  |
| `pnpm check`               | Lint & format code     |
| `pnpm typecheck`           | Type checking          |

## Visit Your Site

Preview your homepage at:

- https://prnmjpngst.pw/
- OG image: https://prnmjpngst.pw/og.png

## Technical Stack

- **Framework**: Astro v6
- **Adapter**: Cloudflare Workers
- **Styling**: TailwindCSS 4
- **Code Quality**: Biome linting & Prettier formatting
- **Fonts**: Astro Fonts API (Atkinson Hyperlegible)

## Notes

This is now a **foundation project** ready for building personalized web applications with a focus on clean design and Cloudflare Workers integration.

Preview URL:

- https://astroflare-og-public.bitcurve.workers.dev/

Preview OG Images:

- https://astroflare-og-public.bitcurve.workers.dev/og.png
- 

## OG Image Generation

The starter is one of the first public examples of the `cf-workers-og` package in action as part of a realistic blog project.

Acknowledgement and thanks to Jilles Soeters (GitHub: `@jillesme`) who went through the considerable trouble of navigating workerd's WASM restrictions and in resolving various dependency issues to get `satori` and `resvg` working on Cloudflare.

Soeters' code at https://github.com/jillesme/cf-workers-og is very professional and well-written.

## Features

- **Astro** on Cloudflare Workers via `@astrojs/cloudflare` adapter
- **OG Image Generation** — site and per-post — powered by `cf-workers-og` (satori + resvg; no Puppeteer; no React)
- **TailwindCSS** including a custom `prose` utility for long-form rich content (built with `@utility` and `:where()` selectors; includes a `not-prose` escape hatch)
- **Blog** realistic blog as an Astro [content collection](https://docs.astro.build/en/guides/content-collections/) with Markdown and MDX support via `@astrojs/mdx`
- **Sitemap** powered by `@astrojs/sitemap`
- **Minimal responsive layout** — providing a clean starting point that's ready to customize
- **Strict TypeScript** — tsconfig extends `astro/tsconfigs/strictest`
- **BiomeJS** — code formatting & linting of TypeScript files
- **Prettier** — code formatting of Astro files with `prettier-plugin-astro` per Astro's official VSCode extension
- **Astro Check** — `@astrojs/check` included for an extra layer of safety

## Development

### Quick Start

- Clone the repo.
- Open `package.json` and change "name" to your project name.
- Run `pnpm install` to install dependencies.
- Copy `wrangler.example.jsonc` to `wrangler.jsonc` and customize it for your account and project.
- Run `pnpm typegen` to generate `worker-configuration.d.ts` based on your `wrangler.jsonc` configuration.
- Edit `.gitignore` and remove `wrangler.jsonc` and `worker-configuration.d.ts`; commit these files.
- Edit `astro.config.ts` and revise `DEPLOY_DOMAIN` + `ASTRO_SITE` to suit your project.
- Run `pnpm dev` to start the local dev server at http://localhost:4321

### Quick Customization

Key constants are defined in `src/constants.ts` including site metadata, navigation links, and social media URLs.

Replace the `src/pages/index.astro` and `src/pages/docs.astro` with your own content.

Review `Layout.astro` and `HeadSeoMeta.astro` to customize design and ensure SEO and social meta tags suit your project.

See the [Commands](#commands) section below for available scripts and tools.

### Styling

The TailwindCSS entrypoint is `src/styles/global.css`. This file is imported at the top of `src/layouts/Layout.astro`.

CSS files:

- `src/styles/global.css` TailwindCSS configuration; global styles & utilities; imports other css files
- `src/styles/palette.css` defines color palette and tokens
- `src/styles/typography.css` defines custom `.prose` utility and `.not-prose` escape hatch

> You may need to restart your dev server after making changes to `*.css` files or to styles within `<style>..</style>` blocks of Astro components.

`Layout.astro` demonstrates how to use Tailwind classes inside a `style` block using `@reference` and the `@apply` directive.

#### Color Palette

A simple color palette is defined in `src/styles/palette.css` with a small set of "design tokens": "muted", "accent", etc.

All custom palette colors follow a capital-letter `P` prefix convention ("P" for palette) to distinguish colors from other CSS properties and prevent collisions.

> It's easy to revise or move away from this convention because the consistent prefix makes it easy to search and replace.

#### Typography

The custom `prose` utility and `not-prose` escape hatch are defined in `src/styles/typography.css` along with custom text sizes: `text-tiny`, `text-lead`, and `text-h1` – `text-h6`.

Use the `text-h*` utilities to style headings outside of `prose` consistently with how they'd be styled inside `prose`.

Most of the typographical styling uses relative `em` units and is therefore sensitive to the current font size.

See `Layout.astro` for where `text-lg` is applied to the `main` element that contains all body content.

#### Merging Classes

Any custom color defined within the `@theme()` block in `palette.css` e.g. `--color-P-example` is available as a Tailwind color utility class e.g. `text-P-example` or `bg-P-example`.

The `cn()` utility function exported from `@lib/style` is the popular combination of `clsx` and `tailwind-merge` and can be used to intelligently merge Tailwind classes.

The custom `text-lead`, `text-h*`, etc. classes are "registered" with Tailwind Merge via `extendTailwindMerge()`.

### Fonts

The Atkinson family of variable fonts are loaded from Fontsource via the Astro Fonts API.

- `astro.config.ts` has `fonts` configuration
- Astro's `<Font />` component is applied in `src/layouts/Layout.astro`
- the fonts registered with TailwindCSS in `src/style/global.css`

Satori does not support variable fonts nor the WOFF2 format so non-variable <code>*.woff</code>
versions of the Atkinson fonts are in the`public/fonts/` directory.

### Editor Configuration

An opinionated VSCode configuration is provided at `.vscode/settings.json`. The `.vscode` directory can be deleted if you do not use VSCode.

Review `.gitignore`, `.prettierignore`, `prettier.config.ts`, and `biome.jsonc` for formatting and linting configuration.

Astro's official VSCode extension uses `prettier` with `prettier-plugin-astro` to format `*.astro` files. The extension reads the project prettier configuration to ensure consistency vs. the prettier cli.

Biome's support for Astro is still preliminary. Currently there are significant limitations and known issues that make it more trouble than its worth for formatting Astro files.

## Build Configuration

### Astro & Cloudflare Workers

The project is configured for "hybrid" deployment that generates static pages and assets by default, with opt-in server-side rendering (SSR) for select routes, such as those that generate dynamic OG images.

Add `export const prerender = false` to pages or layouts to enable SSR for those routes.

Ensure `assets.run_worker_first` in `wrangler.jsonc` includes the path patterns of any SSR routes so that Cloudflare will route requests to the worker instead of attempting to serve a static asset.

### Trailing Slashes & Build Format

The `trailingSlash` and `build.format` options in the Astro config are mutually compatible with the Cloudflare Workers configuration in `wrangler.jsonc`.

The `assets.html_handling` option in `wrangler.jsonc` is set to `"auto-trailing-slash"` and is compatible with the Astro config.

Automatic trailing slashes are currently the default on Cloudflare Workers and are explicitly set in the config to protect against future changes.

Docs: https://developers.cloudflare.com/workers/static-assets/routing/advanced/html-handling/

The codebase uses consistent trailing slashes for internal links to pages to ensure compatibility with Astro integrations such as `@astrojs/sitemap` when `trailingSlash` is `"ignore"`.

Astro will not automatically redirect between trailing slash vs. non-trailing slash versions of URLs when set to "ignore" however this can be achieved via Astro middleware or Cloudflare Redirect rules.

### Environment Variables & Secrets

Cloudflare Workers environment variables can be defined in `wrangler.jsonc` and secrets can be created using the `wrangler secret` CLI command:

```bash
pnpm wrangler secret put SECRET_NAME --env "development"
pnpm wrangler secret put SECRET_NAME --env ""
```

Local development overrides can be defined by creating a `.dev.vars` file.

Cloudflare-defined environment variables are **NOT** available to Astro at build time; you cannot use `envField` to define and parse them within `astro.config.ts`.

Astro Docs: https://docs.astro.build/en/guides/environment-variables/

Cloudflare environment variables and secrets can be imported in server-side code from `cloudflare:env`.

## Project Structure

This project follows Astro's project structure conventions: https://docs.astro.build/en/basics/project-structure/

## Commands

Run commands from the root of the project, in a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Install dependencies                            |
| `pnpm dev`             | Start local dev server at `localhost:4321`      |
| `pnpm build`           | Build production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm typegen`        | Generate `worker-configuration.d.ts` per `wrangler.jsonc` |
| `pnpm typecheck`			| Run TypeScript and `astro check` type checking |
| `pnpm check`			| Lint & format using prettier, biome, and astro |
| `pnpm check:fix`		| Lint & format with auto-fix where possible |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |
| `pnpm preflight`       | Run all typegen, checks, and build in one command |
| `pnpm deploy:worker`  | Build and deploy to Cloudflare Workers with Wrangler |

Run `pnpm preflight` to execute typegen, typecheck, check, and build scripts in sequence to verify that everything is working before deploying.

Run `pnpm deploy:worker` to build and run `wrangler deploy`.

## Documentation

- [Astro Docs](https://docs.astro.build)
- [Astro Discord Server](https://astro.build/chat)
