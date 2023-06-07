import { Avatar, List } from 'antd'
import { styled } from 'styled-components'

const data = [
	{
		title: 'SONG Jiatong',
	},
	{
		title: 'ZHANG Tailai',
	},
	{
		title: 'HE Zijing',
	},
	{
		title: 'FENG Shaokang',
	},
	{
		title: 'XIA Haotian',
	},
	{
		title: 'WANG Tianyang',
	},
]

export function Member() {
	return (
		<Style>
			<List
				itemLayout="horizontal"
				dataSource={data}
				renderItem={(item, index) => (
					<List.Item>
						<List.Item.Meta
							avatar={
								<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index + 5}`} />
							}
							title={item.title}
						/>
					</List.Item>
				)}
			/>
		</Style>
	)
}

const Style = styled.div`
	position: absolute;
	left: 15px;
	top: 48%;
	width: 200px;
`
