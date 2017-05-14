
# v-roll

[IScroll](https://github.com/cubiq/iscroll) component for Vue 2.x

## 安装

```bash
$ npm i v-roll
```

## 开始

```javascript
import vRoll from 'v-roll'

Vue.use(vRoll)
```

```vue
<template>
  <v-roll class="scroll-view">
    Your contents
  </v-roll>
</tempalte>

<style>
.scroll-view {
  /* -- Attention: This line is extremely important in chrome 55+! -- */
  touch-action: none;
  /* -- Attention-- */
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
```

## Usage

### Set IScroll options

```vue
<template>
  <v-roll :options="{preventDefault: false}">
    Your contents
  </v-roll>
</tempalte>
```

### Listen IScroll events

```vue
<template>
  <v-roll @scrollStart="log">
    Your contents
  </v-roll>
</tempalte>

<script>
export default {
  methods: {
    log (iscroll) {
      console.log(iscroll)
    }
  }
}
</script>
```

### Call IScroll instance functions

```vue
<template>
  <div>
    <v-roll ref="iscroll">
      Your contents
    </v-roll>
    <button @click="scrollToTop">Scroll To Top</button>
  </div>
</tempalte>

<script>
export default {
  methods: {
    scrollToTop () {
      const iscroll = this.$refs.iscroll
      iscroll.scrollTo(0, 0, 100)
      iscroll.refresh()
    }
  }
}
</script>
```

### Custom events

- pullUp
- pullDown

```vue
<template>
  <v-roll @pullUp="load" @pullDown="refresh">
    Your contents
  </v-roll>
</tempalte>

<script>
export default {
  methods: {
    refresh (iscroll) {
      // Refresh current data
    },
    load (iscroll) {
      // Load new data
    }
  }
}
</script>
```
