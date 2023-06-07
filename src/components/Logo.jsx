import { styled } from 'styled-components'
import { CompassTwoTone } from '@ant-design/icons'

export function Logo() {
	return (
		<>
			<Style>
				<CompassTwoTone />
				<span className="text">GPS tracking system using mobile phones</span>
			</Style>
		</>
	)
}

const Style = styled.div`
	position: absolute;
	left: 30px;
	top: 30px;
	height: 30px;
	padding: 5px 20px;
	border-radius: 15px;
	background-color: #fff;
	box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
		rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

	.text {
		margin-left: 10px;
		line-height: 30px;
		font-weight: bold;
	}
`
