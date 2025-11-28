# Homebrew

Official website: <https://brew.sh>

## Terminology

| **Formulae** | Original CLI apps                                                                                                                                                  |
|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Cask**     | Extension to Homebrew to install GUI applications like Google Chrome                                                                                               |
| **Tap**      | Third party repositories. Source of formulae. The default is `homebrew/core` but you can add more of them.                                                                                   |
| **Cellar**   | Where Homebrew installs things. Default path is `/usr/local/Cellar` (`/opt/homebrew/Cellar` on Apple Silicon). It then add symlinks from standard locations to it. |

## Disable analytics

```sh
brew analytics off
```

Source: <https://docs.brew.sh/Analytics>

## Update

1-Update package definitions (similar to `apt-update` )

```markdown
brew update
```

2-List out-of-date packages (kegs) (optional)

```markdown
brew outdated
```

3a-Upgrade all:

```markdown
brew upgrade
```

3b-Upgrade only one package

```markdown
brew upgrade <formula>
```

## List packages

List formulae and casks:

```bash
brew list
```

List top-level (direct installs, without dependencies):

```bash
brew leaves
```

## Uninstall package

First, uninstall the package:

```bash
brew uninstall <package>
```

Then, remove all the unused dependencies (not needed from v4.3.0):

```bash
brew autoremove
```

## Cleanup cache

Only removes files more than 120 days old

```bash
brew cleanup
```

To see what will be removed without actually removing anything

```bash
brew cleanup --prune=all --dry-run
```

To clean all

```bash
brew cleanup --prune=all
```

## Uninstall homebrew

Source: <https://github.com/homebrew/install#uninstall-homebrew>

## Tap commands

List (except default tap):

```sh
brew tap
```

Add new:

```sh
brew tap $REPONAME/tap
```

Repair:

```sh
brew tap --repair
```

Remove:

```sh
brew untap $REPONAME/tap
```

Source: <https://docs.brew.sh/Taps>
