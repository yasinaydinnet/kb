# Migrate GitHub Pages to Cloudflare

1. Create a Cloudflare account

2. In Cloudflare Dashboard ( https://dash.cloudflare.com ) **Create** > **Pages tab** > Connect > Select Repo

3. Settings are as below

# **Cloudflare Pages Settings**

Build:

- Build command: `bundle exec jekyll build`
- Build output: `_site`
- Root directory: ``
- Build comments: `Disabled`
- Build system version: `Version 2`

Variables and Secrets:

```bash
LANG = en_US.UTF-8
LANGUAGE = en_US.UTF-8
LC_ALL = C.UTF-8
```

# **In the project, file contents**

Gemfile:

```ruby
source "https://rubygems.org"
gem 'github-pages', group: :jekyll_plugins
```

_config.yml:

```yaml
title: YOUR SITE TITLE
remote_theme: pages-themes/primer
plugins:
- jekyll-remote-theme
```

.gitignore:

```
.DS_Store
_site/
.sass-cache/
.jekyll-cache/
.jekyll-metadata
Gemfile.lock
```
