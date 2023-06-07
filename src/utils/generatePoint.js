import path from '../assets/data/path.js'
import imgURL from '../assets/images/point.svg'

const opts = {
	width: 210, // 信息窗口宽度
	height: 110, // 信息窗口高度
	title: 'Information', // 信息窗口标题
	message: 'Point infor',
}

export function generatePoint(map, index) {
	// 创建点标记
	for (let i = 0; i < path[index].length; i++) {
		const point = new BMapGL.Point(path[index][i].lng, path[index][i].lat)
		const marker = new BMapGL.Marker(point, {
			icon: new BMapGL.Icon(imgURL, new BMapGL.Size(20, 20)),
		})
		map.addOverlay(marker)
		const infoWindow = new BMapGL.InfoWindow(
			`Time: ${path[index][i].time}<br />Latitude: ${path[index][i].lat}<br />Longitude: ${path[index][i].lng}`,
			opts
		)
		marker.addEventListener('click', function () {
			map.openInfoWindow(infoWindow, point)
		})
	}
}
