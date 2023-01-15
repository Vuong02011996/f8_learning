# Start create project

## 1. Using Ant Design Pro - New (node version >=12 )and using typescript

-   `Ant Design Pro = Ant Design + umi + dva`
-   Start with: https://pro.ant.design/docs/getting-started
    -   `sudo npm i @ant-design/pro-cli -g`
    -   `pro create myapp`

## 2. Using Ant Design v3 + umi v2 + dva (https://3x.ant.design/docs/react/practical-projects)

-   kiosk-erp-tran `using umi v2.8, dva v2.4`

-   https://v2.umijs.org/guide/with-dva.html#registering-models
-   https://3x.ant.design/docs/react/practical-projects

-   `.umirc.js config in kiosk`: https://v2.umijs.org/plugin/umi-plugin-react.html#usage
-   Example todo app: https://github.com/saturnism/todo-react-umi-dva

## 3. Using umi fisrt -> andt->dva

-   After completing the UI, we will begin processing the data and logic.

# Concept

-   https://pro.ant.design/docs/introduction

## UMI

-   `create-react-app`: It does not include support for routing, is not a framework, and does not support configuration.
-   `netx.js`: we feel next.js is not as good as Umi, such as not being grounded to the needs of enterprise applications and businesses
-   https://v3.umijs.org/docs

## dvajs

-   dva manages the domain model with `model`, with `reducers` for synchronous state updates, `effects` for async logic, and `subscriptions` for data source subscribe.

-   In umi, the model files under src/models will be`automatically injected`, you don't need to inject manually.

-   https://3x.ant.design/docs/react/practical-projects#Define-dva-Model
-   https://dvajs.com/guide/concepts.html
-   https://dvajs.com/guide/getting-started.html#%E5%AE%9A%E4%B9%89-model

## Ant Design Pro

-   https://pro.ant.design/docs/getting-started/
-   `folder structure:` https://pro.ant.design/docs/folder

## Ant Design

-   https://ant.design/docs/react/getting-started
-   https://ant.design/

# Ref

-   https://ant.design/docs/react/practical-projects
-   https://github.com/dvajs/dva/blob/master/packages/dva-core/test/effects.test.js
-   https://ant.design/docs/react/practical-projects
-   https://github.com/dvajs/dva/tree/master/docs/api Model
-   https://github.com/umijs/umi
-   umi: https://v3.umijs.org/docs/getting-started
