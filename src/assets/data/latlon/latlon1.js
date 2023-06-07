import { removeAdjacentDuplicates } from '../../../utils/removeAdjacentDuplicates'

const _data = [
	['05-5月-2023', '20:56:41.512', '39.931472', '119.554169'],
	['05-5月-2023', '20:56:47.511', '39.931472', '119.554169'],
	['05-5月-2023', '20:56:53.514', '39.931472', '119.554169'],
	['05-5月-2023', '20:57:05.514', '39.931472', '119.554169'],
	['05-5月-2023', '20:57:14.651', '39.931134', '119.554530'],
	['05-5月-2023', '20:57:14.972', '39.931134', '119.554530'],
	['05-5月-2023', '20:57:20.995', '39.931125', '119.554480'],
	['05-5月-2023', '20:57:21.739', '39.931166', '119.554420'],
	['05-5月-2023', '20:57:27.584', '39.931145', '119.554470'],
	['05-5月-2023', '20:57:27.967', '39.931156', '119.554450'],
	['05-5月-2023', '20:57:40.488', '39.931077', '119.554390'],
	['05-5月-2023', '20:57:41.813', '39.931086', '119.554430'],
	['05-5月-2023', '20:57:42.967', '39.931356', '119.554450'],
	['05-5月-2023', '20:57:43.969', '39.931356', '119.554460'],
	['05-5月-2023', '20:57:44.971', '39.931235', '119.554480'],
	['05-5月-2023', '20:57:45.859', '39.931128', '119.554330'],
	['05-5月-2023', '20:57:46.867', '39.931117', '119.554370'],
	['05-5月-2023', '20:57:47.859', '39.931117', '119.554390'],
	['05-5月-2023', '20:57:48.864', '39.931127', '119.554410'],
	['05-5月-2023', '20:57:49.861', '39.931147', '119.554410'],
	['05-5月-2023', '20:57:50.859', '39.931156', '119.554430'],
	['05-5月-2023', '20:57:51.862', '39.931156', '119.554450'],
	['05-5月-2023', '20:57:52.860', '39.931156', '119.554450'],
	['05-5月-2023', '20:57:53.863', '39.931145', '119.554470'],
	['05-5月-2023', '20:57:54.866', '39.931135', '119.554500'],
	['05-5月-2023', '20:57:55.857', '39.931124', '119.554530'],
	['05-5月-2023', '20:57:56.864', '39.931114', '119.554550'],
	['05-5月-2023', '20:57:57.859', '39.931103', '119.554591'],
	['05-5月-2023', '20:57:58.863', '39.931092', '119.554621'],
	['05-5月-2023', '20:57:59.859', '39.931061', '119.554671'],
	['05-5月-2023', '20:58:00.856', '39.931061', '119.554701'],
	['05-5月-2023', '20:58:01.855', '39.931050', '119.554741'],
	['05-5月-2023', '20:58:02.871', '39.931039', '119.554791'],
	['05-5月-2023', '20:58:03.860', '39.931028', '119.554821'],
	['05-5月-2023', '20:58:04.864', '39.931007', '119.554881'],
	['05-5月-2023', '20:58:05.855', '39.931006', '119.554931'],
	['05-5月-2023', '20:58:06.863', '39.930995', '119.554992'],
	['05-5月-2023', '20:58:07.855', '39.930985', '119.554982'],
	['05-5月-2023', '20:58:08.863', '39.930974', '119.555002'],
	['05-5月-2023', '20:58:09.858', '39.930964', '119.555022'],
	['05-5月-2023', '20:58:10.858', '39.930943', '119.555042'],
	['05-5月-2023', '20:58:11.857', '39.930924', '119.555032'],
	['05-5月-2023', '20:58:12.859', '39.930904', '119.555032'],
	['05-5月-2023', '20:58:13.865', '39.930884', '119.555022'],
	['05-5月-2023', '20:58:14.855', '39.930874', '119.555012'],
	['05-5月-2023', '20:58:15.858', '39.930864', '119.555032'],
	['05-5月-2023', '20:58:16.858', '39.930844', '119.555032'],
	['05-5月-2023', '20:58:17.859', '39.930824', '119.555032'],
	['05-5月-2023', '20:58:18.866', '39.930804', '119.555012'],
	['05-5月-2023', '20:58:19.858', '39.930794', '119.555012'],
	['05-5月-2023', '20:58:20.858', '39.930775', '119.554992'],
	['05-5月-2023', '20:58:21.858', '39.930775', '119.554972'],
	['05-5月-2023', '20:58:22.866', '39.930765', '119.554952'],
	['05-5月-2023', '20:58:23.857', '39.930786', '119.554921'],
	['05-5月-2023', '20:58:24.862', '39.930807', '119.554891'],
	['05-5月-2023', '20:58:25.857', '39.930827', '119.554851'],
	['05-5月-2023', '20:58:26.862', '39.930818', '119.554811'],
	['05-5月-2023', '20:58:27.862', '39.930819', '119.554791'],
	['05-5月-2023', '20:58:28.858', '39.930820', '119.554741'],
	['05-5月-2023', '20:58:29.857', '39.930820', '119.554721'],
	['05-5月-2023', '20:58:30.857', '39.930851', '119.554661'],
	['05-5月-2023', '20:58:31.861', '39.930872', '119.554641'],
	['05-5月-2023', '20:58:32.865', '39.930872', '119.554631'],
	['05-5月-2023', '20:58:33.862', '39.930862', '119.554621'],
	['05-5月-2023', '20:58:34.862', '39.930873', '119.554601'],
	['05-5月-2023', '20:58:35.858', '39.930883', '119.554581'],
	['05-5月-2023', '20:58:36.863', '39.930894', '119.554550'],
	['05-5月-2023', '20:58:37.859', '39.930894', '119.554530'],
	['05-5月-2023', '20:58:38.864', '39.930904', '119.554520'],
	['05-5月-2023', '20:58:39.863', '39.930905', '119.554500'],
	['05-5月-2023', '20:58:40.856', '39.930905', '119.554480'],
	['05-5月-2023', '20:58:41.859', '39.930916', '119.554460'],
	['05-5月-2023', '20:58:42.856', '39.930916', '119.554450'],
	['05-5月-2023', '20:58:43.862', '39.930926', '119.554430'],
	['05-5月-2023', '20:58:44.862', '39.930927', '119.554410'],
	['05-5月-2023', '20:58:45.857', '39.930937', '119.554390'],
	['05-5月-2023', '20:58:46.852', '39.930947', '119.554380'],
	['05-5月-2023', '20:58:47.856', '39.930957', '119.554380'],
	['05-5月-2023', '20:58:48.863', '39.930956', '119.554420'],
	['05-5月-2023', '20:58:49.864', '39.930956', '119.554450'],
	['05-5月-2023', '20:58:50.855', '39.930966', '119.554460'],
	['05-5月-2023', '20:58:51.862', '39.930986', '119.554460'],
	['05-5月-2023', '20:58:52.862', '39.930986', '119.554460'],
	['05-5月-2023', '20:58:53.854', '39.930986', '119.554440'],
	['05-5月-2023', '20:58:54.861', '39.930986', '119.554430'],
	['05-5月-2023', '20:58:55.853', '39.930976', '119.554440'],
	['05-5月-2023', '20:58:56.854', '39.930976', '119.554450'],
	['05-5月-2023', '20:58:57.859', '39.930986', '119.554450'],
	['05-5月-2023', '20:58:58.859', '39.931006', '119.554430'],
	['05-5月-2023', '20:58:59.858', '39.931006', '119.554430'],
	['05-5月-2023', '20:59:00.855', '39.930996', '119.554430'],
	['05-5月-2023', '20:59:01.853', '39.931100', '119.554230'],
	['05-5月-2023', '20:59:02.860', '39.931130', '119.554240'],
	['05-5月-2023', '20:59:03.858', '39.931130', '119.554240'],
	['05-5月-2023', '20:59:04.855', '39.931161', '119.554199'],
	['05-5月-2023', '20:59:05.852', '39.931181', '119.554179'],
	['05-5月-2023', '20:59:06.862', '39.931230', '119.554270'],
	['05-5月-2023', '20:59:07.856', '39.931240', '119.554250'],
	['05-5月-2023', '20:59:08.854', '39.931269', '119.554320'],
	['05-5月-2023', '20:59:09.856', '39.931218', '119.554340'],
	['05-5月-2023', '20:59:10.854', '39.931248', '119.554340'],
	['05-5月-2023', '20:59:11.853', '39.931268', '119.554350'],
	['05-5月-2023', '20:59:12.853', '39.931298', '119.554340'],
	['05-5月-2023', '20:59:13.859', '39.931328', '119.554340'],
	['05-5月-2023', '20:59:14.853', '39.931348', '119.554360'],
	['05-5月-2023', '20:59:16.852', '39.931290', '119.554260'],
	['05-5月-2023', '20:59:17.852', '39.931300', '119.554250'],
	['05-5月-2023', '20:59:18.855', '39.931219', '119.554290'],
	['05-5月-2023', '20:59:19.853', '39.931219', '119.554280'],
	['05-5月-2023', '20:59:20.850', '39.931219', '119.554280'],
	['05-5月-2023', '20:59:21.857', '39.931230', '119.554270'],
	['05-5月-2023', '20:59:22.847', '39.931250', '119.554270'],
	['05-5月-2023', '20:59:23.854', '39.931260', '119.554270'],
	['05-5月-2023', '20:59:24.855', '39.931218', '119.554330'],
	['05-5月-2023', '20:59:25.852', '39.931189', '119.554300'],
	['05-5月-2023', '20:59:26.853', '39.931229', '119.554320'],
	['05-5月-2023', '20:59:27.853', '39.931229', '119.554320'],
	['05-5月-2023', '20:59:28.999', '39.931239', '119.554310'],
	['05-5月-2023', '20:59:29.999', '39.931239', '119.554300'],
	['05-5月-2023', '20:59:30.999', '39.931270', '119.554240'],
	['05-5月-2023', '20:59:32.014', '39.931281', '119.554220'],
	['05-5月-2023', '20:59:39.017', '39.931342', '119.554159'],
	['05-5月-2023', '20:59:40.017', '39.931362', '119.554149'],
	['05-5月-2023', '20:59:41.014', '39.931372', '119.554139'],
	['05-5月-2023', '20:59:42.010', '39.931309', '119.554280'],
]

export const data = removeAdjacentDuplicates(_data)
