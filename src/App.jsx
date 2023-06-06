import { useEffect } from 'react'
import { Wrapper } from './App.js'
import path from './assets/data/path.js'

export function App() {
	const option = {
		center: '东北大学秦皇岛分校',
		zoom: 17,
		enableScrollWheelZoom: true,
		heading: 100,
		tilt: 30,
	}

	useEffect(() => {
		const map = new BMapGL.Map('map')
		map.centerAndZoom(new BMapGL.Point(119.55484, 39.92908), 18.5)
		map.enableScrollWheelZoom(true)
		map.setHeading(-130)
		map.setTilt(42.64)
		const scaleCtrl = new BMapGL.ScaleControl()
		map.addControl(scaleCtrl)
		const zoomCtrl = new BMapGL.ZoomControl()
		map.addControl(zoomCtrl)
		map.addEventListener('click', function (e) {
			console.log('点击位置经纬度：' + e.latlng.lng + ',' + e.latlng.lat)
		})
		const point = []
		for (let i = 0; i < path.length; i++) {
			point.push(new BMapGL.Point(path[i].lng, path[i].lat))
		}
		const pl = new BMapGL.Polyline(point)
		setTimeout(start, 3000)
		let trackAni
		function start() {
			trackAni = new BMapGLLib.TrackAnimation(map, pl, {
				overallView: true,
				heading: 150,
				tilt: 45,
				duration: 20000,
				delay: 300,
			})
			trackAni.start()
		}
	}, [])

	return (
		<Wrapper>
			<div id="map"></div>
		</Wrapper>
	)
}

export default App
