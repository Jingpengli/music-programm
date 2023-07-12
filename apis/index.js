import request from "../utils/request.js"
export function getBannerApi(data){
	return request.request({
	method: 'GET',
	url: '/banner',
	})
}

export function apiGetRecommendSong(data){
	return request.request({
	method: 'GET',
	url: '/personalized',
	})
}

export function apiGetTopAlbum(data){
	return request.request({
	method: 'GET',
	url: '/album/newest',
	})
}

