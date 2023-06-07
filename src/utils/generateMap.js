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
		point[i] = new BMapGL.Point(path[index][i].lng, path[index][i].lat)

		if ((i + 1) % 10 === 0 || i === path[index].length - 1) {
			// 绘制当前累积的点位
			const currentPoints = point.slice(i - 9, i + 1) // 提取当前累积的10个点位
			const pl = new BMapGL.Polyline(currentPoints)

			setTimeout(() => {
				const trackAni = new BMapGLLib.TrackAnimation(map, pl, {
					overallView: false,
					duration: 5 * 1000,
					delay: 300,
				})
				trackAni.start()
			}, 3000 + (i / 10) * 5 * 1000) // 每10个点位绘制一次，延时时间根据绘制次数递增
		}
	}

	return [map, trackAni]
}
