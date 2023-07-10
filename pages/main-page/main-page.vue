<template>
	<view class="main-page">
		<view class="head">
			头部
		</view>
		<view class="list-wrap">
			<scroll-view scroll-y class="list">
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
			</scroll-view>
		</view>
		<view class="tools">
			<view class="tool-item">
				<image src="../../static/icon/index-active.png" mode="widthFix"></image>
				<text>首页</text>
			</view>
			<view class="tool-item">
				<image src="../../static/icon/sort.png" mode="widthFix"></image>
				<text>分类</text>
			</view>
			<view class="tool-item">
				<image src="../../static/icon/cal.png" mode="widthFix"></image>
				<text>课表</text>
			</view>
			<view class="tool-item">
				<image src="../../static/icon/head.png" mode="widthFix"></image>
				<text>我的</text>
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
	// padding: 1vh 2vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
}
.head{
	text-align: center;
}
.list-wrap{
	position: relative;
	flex-grow: 1;
	.list{
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
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
	}
}

.tools{
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	.tool-item{
		width: 45px;
		text-align: center;
		image{
			width: 39px;
		}
	}
}

</style>
