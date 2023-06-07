import { useEffect, useState } from 'react'
import { Handle } from './components/Handle'
import { Logo } from './components/Logo'
import { Member } from './components/Member'
import { generateMap } from './utils/generateMap'
import { generatePoint } from './utils/generatePoint'
import styled from 'styled-components'
import { Spin } from 'antd'

export function App() {
	const [index, setIndex] = useState(0)
	const [spin, setSpin] = useState(true)
	const [mapData, setMapData] = useState(null)
	const [trackData, setTrackData] = useState(null)

	// 更改地图轨迹
	function changeIndex(index) {
		setIndex(index)
	}

	// 取消加载
	function cancelLoading() {
		setSpin(false)
	}

	// 渲染地图及轨迹
	useEffect(() => {
		const [map, trackAni] = generateMap(index, cancelLoading)
		generatePoint(map, index)
		setMapData(map)
		setTrackData(trackAni)
	}, [index])

	return (
		<Loading>
			<Spin size="large" tip="Loading" spinning={spin}>
				<Style>
					<div id="map"></div>
					<Handle changeIndex={changeIndex}></Handle>
					<Logo></Logo>
					<Member></Member>
				</Style>
			</Spin>
		</Loading>
	)
}

const Style = styled.div`
	width: 100%;
	height: 100vh;

	#map {
		width: 100%;
		height: 100%;
	}
`

const Loading = styled.div`
	width: 100%;
	height: 100vh;
	background: rgba(186, 224, 255, 0.5);
`

export default App
