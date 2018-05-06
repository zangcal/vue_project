<template>
	<div class="active">
		{{mas}}
	</div>
</template>
<script>
export default{
    data() {
        return {
            mas: '炮炮，我来啦！'
        }
    }
}
</script>
<style scoped>
	.active{
		background: red;
		font-size: 20px;
	}
</style>