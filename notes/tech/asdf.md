# asdf

## Plugins

Source: <https://asdf-vm.com/manage/plugins.html>

Install new:

```sh
asdf plugin add $PLUGINNAME
```

List installed:

```sh
asdf plugin list
```

List installed, with source URLs:

```sh
asdf plugin list --urls
```

List all available to install:

```sh
asdf plugin list all
```

Update:

```sh
asdf plugin update --all
```

Delete installed:

```sh
asdf plugin remove $PLUGINNAME
```

## Packages

Install based on `.tool-versions`:

```sh
asdf install
```

## Shimming

Reshim all:

```sh
asdf reshim
```

Reshim certain plugin

```sh
asdf reshim $PLUGINNAME
```
