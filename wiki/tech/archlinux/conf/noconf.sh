#!/bin/bash

# todo order


# noncat
encfs
slock

# tools
bash-completion
bind-tools

# fonts
gnu-free-fonts
ttf-bitstream-vera
ttf-dejavu
ttf-droid
ttf-inconsolata
ttf-liberation
ttf-roboto
ttf-ubuntu-font-family
xorg-fonts-alias


# editors
nano
leafpad
libreoffice-fresh

# pkg
pkgbrowser

# compressed
file-roller
thunar-archive-plugin
unrar
unzip
zip

# media
vlc
eog

# media-tumbler
tumbler
pikaur -S  ffmpegthumbnailer  poppler-glib libopenraw libgsf

# /etc/xdg/tumbler/tumbler.rc 
# these are also good for boot warnings
# disable dis plugins
ffmpegthumbnailer #[FfmpegThumbnailer]
poppler-glib  # PDF/PS thumbnailer  [PopplerThumbnailer]
libopenraw # [RawThumbnailer]
libgsf # [GstThumbnailer ?]

# automount
gvfs
thunar-volman

# trash
gvfs
xfce4-mount-plugin

# notify
xfce4-notifyd
