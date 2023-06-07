import path from '../assets/data/path.js'

export function generateMap(index, cancelLoading) {
	const map = new BMapGL.Map('map')
	let trackAni = null

	map.centerAndZoom(new BMapGL.Point(119.55484, 39.92908), 18.5)
	map.enableScrollWheelZoom(true)
	map.setHeading(-130)
	map.setTilt(42.64)

	// 添加地图缩放控件
	const scaleCtrl = new BMapGL.ScaleControl()
	const zoomCtrl = new BMapGL.ZoomControl()
	map.addControl(scaleCtrl)
	map.addControl(zoomCtrl)

	map.addEventListener('tilesloaded', function () {
		cancelLoading()
	})

	// 轨迹动画
	const point = []
	for (let i = 0; i < path[index].length; i++) {
		point.push(new BMapGL.Point(path[index][i].lng, path[index][i].lat))
	}
	const pl = new BMapGL.Polyline(point)
	setTimeout(() => {
		trackAni = new BMapGLLib.TrackAnimation(map, pl, {
			overallView: true,
			duration: 20000,
			delay: 300,
		})
		trackAni.start()
	}, 3000)

	return [map, trackAni]
}
