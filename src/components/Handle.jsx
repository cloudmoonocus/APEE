import { styled } from 'styled-components'
import { Select, Space } from 'antd'
import path from '../assets/data/path.js'
import { useParams, useNavigate } from 'react-router-dom'

export function Handle(props) {
	const { mapIndex } = useParams()
	const navigate = useNavigate()
	const { trackAni } = props

	// 更改地图轨迹
	const handleChange = (value) => {
		navigate('/index/' + (value + 1))
	}

	// 生成地图选项
	const options = []
	for (let i = 0; i < path.length; i++) {
		options.push({ value: i, label: `Map ${i + 1}` })
	}

	return (
		<Style>
			<Space>
				<Select defaultValue={mapIndex - 1} style={{ width: 200 }} onChange={handleChange} options={options} />
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
