import { useEffect, useState } from 'react'
import { Handle } from './components/Handle'
import { Logo } from './components/Logo'
import { Member } from './components/Member'
import { generateMap } from './utils/generateMap'
import { generatePoint } from './utils/generatePoint'
import styled from 'styled-components'
import { Spin } from 'antd'
import { useParams, useNavigate } from 'react-router-dom'
import path from './assets/data/path'

export function App(props) {
	const { mapIndex } = useParams()
	const navigate = useNavigate()
	const [spin, setSpin] = useState(true)
	const [mapData, setMapData] = useState(null)
	const [trackData, setTrackData] = useState(null)

	if (mapIndex > path.length || mapIndex < 1) {
		window.location.href = '/'
	}

	// 取消加载
	function cancelLoading() {
		setSpin(false)
	}

	// 渲染地图及轨迹
	useEffect(() => {
		setSpin(true)
		const [map, trackAni] = generateMap(mapIndex - 1, cancelLoading)
		generatePoint(map, mapIndex - 1)
		setMapData(map)
		setTrackData(trackAni)
	}, [mapIndex])

	return (
		<Loading>
			<Spin size="large" tip="Loading" spinning={spin}>
				<Style>
					<div id="map"></div>
					<Handle trackAni={trackData}></Handle>
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
