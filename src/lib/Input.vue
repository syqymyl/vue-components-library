<template>
  <div class="mango-wrapper" :class="{ error }">
    <input
      type="text"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
    />
    <span v-if="error">{{ error }}</span>
  </div>
</template>

<script lang="js">
export default {
  props:{
    value:{
      type:String,
    },
    disabled:{
      type:Boolean,
      default:false
    },
    readonly:{
      type:Boolean,
      default:false
    },
    error:{
      type:String,
    },
  }
}
</script>

<style lang="scss" scoped>
$grey: #bbb;
$red: #f1453d;
$border-color: #acacef;
$border-color-hover: #6134c2;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$height: 32px;
$margin-right: 0.5em;
$border-radius: 4px;
$padding: 8px;
$font-size: 12px;
.mango-wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > * {
    margin-right: $margin-right;
  }
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 $padding;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled],
    &[readonly] {
      border-color: $grey;
      color: $grey;
      cursor: not-allowed;
    }
  }
  &.error {
    > input {
      border-color: $red;
    }
  }
  > span {
    color: $red;
  }
}
</style>
