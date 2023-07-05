<template>
	<view class="main-page">
		<view class="head">
			头部
		</view>
		<view class="list-scroll-view">
			<view class="course-card" v-for="i in 6">
				<view class="">
					<image src="/static/logo.png" mode="widthFix"></image>
				</view>
				<view class="">
					uniapp布局
				</view>
				<view class="">
					mianfei
				</view>
			</view>
		</view>
		<view class="tools">
			<view>
				<image src="../../static/icon/index-active.png" mode="widthFix"></image>
				<text>首页</text>
			</view>
			<view>
				<image src="../../static/icon/index-active.png" mode="widthFix"></image>
				<text>分类</text>
			</view>
			<view>
				<image src="../../static/icon/index-active.png" mode="widthFix"></image>
				<text>课表222</text>
			</view>
			<view>
				<image src="../../static/icon/index-active.png" mode="widthFix"></image>
				<text>首页</text>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
.main-page{
	padding: 1vh 2vw;
}
.head{
	text-align: center;
}
.list-scroll-view{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	.course-card{
		width: 47vw;
		image{
			width: 47vw;
		}
	}
	
}

</style>
