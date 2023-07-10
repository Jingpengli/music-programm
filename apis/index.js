import request from "../utils/request.js"
import a from '../utils/request.js'
export default function getBannerApi(){
	return request.request({
	method: 'GET',
	url: '/banner',
	})
}
