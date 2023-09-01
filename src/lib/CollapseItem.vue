<template>
  <div class="mango-collapseItem">
    <div class="mango-collapseItem-title" @click="collapseToggle">
      {{ title }}
    </div>
    <div class="mango-collapseItem-content" v-if="collapseOpen">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { inject, ref, onMounted } from 'vue'
export default {
  name: 'CollapseItem',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const collapseOpen = ref(false)
    const emitter = inject('emitter')
    const collapseId = Math.random()

    onMounted(() => {
      emitter &&
        emitter.on('updated:selected', (selectedId) => {
          if (selectedId !== collapseId) {
            collapseClose()
          }
        })
    })

    const collapseToggle = () => {
      if (collapseOpen.value) {
        collapseOpen.value = false
      } else {
        collapseOpen.value = true
        emitter && emitter.emit('updated:selected', collapseId)
      }
    }
    const collapseClose = () => {
      collapseOpen.value = false
    }
    return { collapseOpen, emitter, collapseId, collapseToggle, collapseClose }
  },
}
</script>

<style lang="scss" scoped>
$border-color: #6134c2;
$background-color: #acacef;
$border-radius: 4px;
.mango-collapseItem {
  &-title {
    border: 1px solid $border-color;
    background-color: $background-color;
    // 使得内外 border 重合
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    margin-bottom: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }
  &:first-child {
    .mango-collapseItem-title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    .mango-collapseItem-title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  &-content {
    padding: 0 8px;
  }
}
</style>
