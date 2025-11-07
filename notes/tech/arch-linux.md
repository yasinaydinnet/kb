# Arch Linux

## For Performance and Security

- <https://wiki.archlinux.org/title/Haveged>
- <https://wiki.archlinux.org/title/Microcode>
- <https://wiki.archlinux.org/title/Vulkan> (Successor to OpenGL)
- <https://wiki.archlinux.org/title/Hardware_video_acceleration#Comparison_tables> (Install all for compatability)
- <https://wiki.archlinux.org/index.php/Tmpfs#Examples> (Move /tmp to RAM)
- <https://wiki.archlinux.org/index.php/Fstab#atime_options> (Use noatime)
- <https://wiki.archlinux.org/index.php/Ccache>
- <https://wiki.archlinux.org/title/Makepkg#Optimization>


For makepkg, install ccache then update `/etc/makepkg.conf` as:

```sh
# Compile for only native arch
CFLAGS="-march=native -O2 -pipe -fno-plt"
CXXFLAGS="${CFLAGS}"
# Use all CPU cores
MAKEFLAGS="-j$(nproc)"
# Use ccache
BUILDENV=(!distcc color ccache check !sign)
# Use /tmp (mount to RAM first)
BUILDDIR=/tmp/makepkg
# Do not use compression
COMPRESSGZ=(cat)
COMPRESSBZ2=(cat)
COMPRESSXZ=(cat)
COMPRESSLRZ=(cat)
COMPRESSLZO=(cat)
COMPRESSZ=(cat)
```

## Common Commands

Reset password retries:

```sh
$ su
# faillock --user yasin --reset
```
