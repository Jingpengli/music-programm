/**
 * contentType 请求内容类型 1-json 2-表单类型
 */
function request({url,method="GRT",data,contentType}){
	let header = {
		"content-type": contentType == 1 ? 'application/json' : 'application/x-www-form-urlencoded'
	}
	let baseUrl = 'http://localhost:3000'
	return new Promise((resolve,reject)=>{
		uni.request({
			url:baseUrl + url,
			method,
			data,
			header,
			success: (res)=>{
				if(res.statusCode == 200){
					resolve(res.data)
				}else if(res.statusCode == 401){
					uni.showToast({
						icon:"none",
						title:"未登录或者登录已超时"
					})
				}else if(res.statusCode == 405){
					uni.showToast({
						icon:"none",
						title:"请求方法错误"
					})
				}else{
					uni.showToast({
						icon:"none",
						title: "请求错误" + statusCode,
						duration: 1500
					})
				}
			},
			fail: (err)=>{
				console.log(err,'err')
				uni.showToast({
					icon:"none",
					title: err.errMsg,
					duration: 1500
				})
				reject(err)
			}
		})
	})
}

export default {request}