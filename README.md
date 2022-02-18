# Eslint Config of cicada-design

## Install

```shell
# with npm
npm i @cicada-design/eslint-config -D

# with yarn
yarn add @cicada-design/eslint-config -D

# with pnpm
pnpm add @cicada-design/eslint-config -D
```

## Usage

```json
{
  "extends": ["@cicada-design/eslint-config"]
}
```
## Explame

```html
// vue/attributes-order
// DEFINITION e.g. 'is', 'v-is'
// LIST_RENDERING e.g. 'v-for item in items'
// CONDITIONALS e.g. 'v-if', 'v-else-if', 'v-else', 'v-show', 'v-cloak'
// RENDER_MODIFIERS e.g. 'v-once', 'v-pre'
// GLOBAL e.g. 'id'
// UNIQUE e.g. 'ref', 'key'
// SLOT e.g. 'v-slot', 'slot'.
// TWO_WAY_BINDING e.g. 'v-model'
// OTHER_DIRECTIVES e.g. 'v-custom-directive'
// OTHER_ATTR e.g. 'custom-prop="foo"', 'v-bind:prop="foo"', ':prop="foo"'
// EVENTS e.g. '@click="functionCall"', 'v-on="event"'
// CONTENT e.g. 'v-text', 'v-html'
// #the default order
  <!-- ✗ BAD -->
  <div
    ref="header"
    v-for="item in items"
    v-once
    id="uniqueID"
    v-model="headerData"
    my-prop="prop"
    v-if="!visible"
    is="header"
    @click="functionCall"
    v-text="textContent">
  </div>

  <!-- ✓ GOOD -->
  <div
    is="header"
    v-for="item in items"
    v-if="!visible"
    v-once
    id="uniqueID"
    ref="header"
    v-model="headerData"
    my-prop="prop"
    @click="functionCall"
    v-text="textContent">
  </div>
```
