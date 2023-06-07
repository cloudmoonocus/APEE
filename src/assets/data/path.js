import { data as latlon1 } from './latlon/latlon1'
import { data as latlon2 } from './latlon/latlon2'

const path = [[], []]
latlon1.forEach((item) => {
	path[0].push({
		time: item[0] + ' ' + item[1],
		lng: item[3],
		lat: item[2],
	})
})
latlon2.forEach((item) => {
	path[1].push({
		time: item[0] + ' ' + item[1],
		lng: item[3],
		lat: item[2],
	})
})

export default path
