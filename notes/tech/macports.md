# macports

## Install packages

```bash
port install mdbook
```

## List packages

List only direct installs, no dependencies:

```bash
port installed requested
```

All packages and deps:

```bash
port installed
```

List dependencies:

```bash
port installed unrequested
```

List inactive (that can be cleaned)

```bash
port installed inactive
```

## Update and upgrade packages

Update package list (like `apt-get update`):

```bash
port selfupdate
```

Upgrade package versions (like `apt-get upgrade`):

```bash
port upgrade outdated
```

## Uninstall packages

Before uninstalling, check dependents:

```bash
port dependents ffmpeg
```

If it has, uninstall dependents like:

```bash
port uninstall --follow-dependents ffmpeg
```

Otherwise uninstall normally:

```bash
port uninstall ffmpeg
```

Remove all unused deps:

```bash
[[ -z "$(port -q list inactive)" ]] || sudo port uninstall inactive
```

## Uninstall ports

Source: <https://guide.macports.org/chunked/installing.macports.uninstalling.html>

Uninstall all ports:

```bash
sudo port -fp uninstall --follow-dependents installed
```
