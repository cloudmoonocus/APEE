import { useState } from 'react'
import { styled } from 'styled-components'
import { Select, Space, Button } from 'antd'
import path from '../assets/data/path.js'
import { useParams, useNavigate } from 'react-router-dom'

export function Handle(props) {
	const [type, setType] = useState(true)
	const [text, setText] = useState(true)
	const [icon, setIcon] = useState(true)
	const { mapIndex } = useParams()
	const navigate = useNavigate()
	const { map } = props

	// 更改地图轨迹
	const handleChange = (value) => {
		navigate('/index/' + (value + 1))
	}

	// 生成地图选项
	const options = []
	for (let i = 0; i < path.length; i++) {
		options.push({ value: i, label: `Map ${i + 1}` })
	}

	// 切换地图类型
	function ButtonType() {
		if (type) {
			return (
				<Button
					type="primary"
					onClick={() => {
						setType(false)
						map.setMapType(BMAP_SATELLITE_MAP)
					}}
				>
					Satellite Map
				</Button>
			)
		} else {
			return (
				<Button
					type="primary"
					onClick={() => {
						setType(true)
						map.setMapType(BMAP_NORMAL_MAP)
					}}
				>
					Normal Map
				</Button>
			)
		}
	}

	function IsShowIcon() {
		if (icon) {
			return (
				<Button
					type="primary"
					onClick={() => {
						setIcon(false)
						map.setDisplayOptions({
							poiIcon: false,
						})
					}}
				>
					Hidden icon
				</Button>
			)
		} else {
			return (
				<Button
					type="primary"
					onClick={() => {
						setIcon(true)
						map.setDisplayOptions({
							poiIcon: true,
						})
					}}
				>
					Show icon
				</Button>
			)
		}
	}

	function IsShowText() {
		if (text) {
			return (
				<Button
					type="primary"
					onClick={() => {
						setText(false)
						map.setDisplayOptions({
							poiText: false,
						})
					}}
				>
					Hidden text
				</Button>
			)
		} else {
			return (
				<Button
					type="primary"
					onClick={() => {
						setText(true)
						map.setDisplayOptions({
							poiText: true,
						})
					}}
				>
					Show text
				</Button>
			)
		}
	}

	return (
		<Style>
			<Space>
				<Select defaultValue={mapIndex - 1} style={{ width: 200 }} onChange={handleChange} options={options} />
				<ButtonType></ButtonType>
				<IsShowText></IsShowText>
				<IsShowIcon></IsShowIcon>
			</Space>
		</Style>
	)
}

const Style = styled.div`
	position: absolute;
	z-index: 999;
	right: 30px;
	top: 30px;
	height: 30px;
`
