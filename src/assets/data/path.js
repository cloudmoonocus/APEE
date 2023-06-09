import { data as latlon1 } from './latlon/latlon1'
import { data as latlon2 } from './latlon/latlon2'
import { data as latlon3 } from './latlon/latlon3'
import { data as latlon4 } from './latlon/latlon4'

const latlons = [latlon1, latlon2, latlon3, latlon4]
const path = []
latlons.forEach((latlon, index) => {
	path[index] = []
	latlon.forEach((item) => {
		path[index].push({
			time: item[0] + ' ' + item[1],
			lng: item[3],
			lat: item[2],
		})
	})
})

export default path
