# Run app Phú
- `Node Sass does not yet support your current environment: Linux 64-bit with Unsupported runtime (93): `
    - Check version node support: https://github.com/sass/node-sass/releases/tag/v4.14.1 - node 14.

- `TypeError: Cannot convert undefined or null to object - npm start `
    -  copy .env
- ` error  in ./src/components/LayoutComponents/Menu/MenuLeft/style.module.scss`
    - npm i node-sass

- `Error: spawn none       BROWSER=none ENOENT`
    - Duplicate BROWSER=none in file .env

- `Node Sass version 8.0.0 is incompatible with ^4.0.0?`
    - npm uninstall node-sass, npm uninstall sass-loader
    - npm install node-sass@4.14
    - https://stackoverflow.com/questions/74501317/whats-the-fix-for-error-node-sass-version-8-0-0-is-incompatible-with-4-0-0