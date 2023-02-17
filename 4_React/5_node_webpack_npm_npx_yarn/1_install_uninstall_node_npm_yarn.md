# Install/Uninstall node, npm, npx, yarn theo a Sơn
+ A Sơn Chỉ cho window vs MacOS theo file installer 

## Cách 1
+ Còn linux theo file bin lastest version => https://dev.to/aashishpanthi/step-by-step-instructions-to-install-node-and-npm-using-linux-binaries-1e0h.
    + Goto . https://nodejs.org/en/download/ and download node(Linux Binaries (x64))
    + `extract file tar -xf "*your_downloaded_file*`" or right click on tar file and extract (so simple).
    + Copy folder to /usr: `sudo cp -r ./{lib,share,include,bin} /usr`
    + Check node -v, npm -v, yarn -v -> Done
    + Uninstall:
    https://web.archive.org/web/20161114130923/http://amcositsupport.blogspot.in/2016/07/to-completely-uninstall-node-js-from.html
    ```
    sudo rm -rf /usr/bin/npm /usr/share/man/man1/node* /usr/lib/dtrace/node.d ~/.npm ~/.node-gyp /opt/bin/node opt/include/node /opt/lib/node_modules
    sudo rm -rf /usr/lib/node*
    sudo rm -rf /usr/include/node*
    sudo rm -rf /usr/bin/node*
    ```

## Cách 2
+ Dùng cách ở đây option 2 nhanh gọn lẹ, using apt:
    + https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04
    + có thể thay đổi version node tùy ý.

    + Uninstall
        + https://stackoverflow.com/questions/32426601/how-can-i-completely-uninstall-nodejs-npm-and-node-in-ubuntu
        + `sudo apt-get remove nodejs`
        + `sudo apt-get remove npm`
        + Then go to /etc/apt/sources.list.d and remove any node list if you have. Then do a `sudo apt-get update`