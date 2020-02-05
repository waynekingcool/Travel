<template>
    <div>
        <h1>标题</h1>
        <p>这是一段内容</p>
        <img src="https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png" alt="">
        <img src="https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png" alt="">
        <p>块级元素
            <span>标题?</span>
        </p>
    </div>
</template>

<script>
export default {
    name: "Test"
}
</script>

<style lang="stylus" scoped>
    p
      color red
      span
        color green
</style>