import { removeAdjacentDuplicates } from '../../../utils/removeAdjacentDuplicates'

const _data = [
	['07-6月-2023', '10:07:46.096', '39.930801', '119.555172'],
	['07-6月-2023', '10:07:46.881', '39.930771', '119.555182'],
	['07-6月-2023', '10:07:47.887', '39.930780', '119.555222'],
	['07-6月-2023', '10:07:48.890', '39.930769', '119.555262'],
	['07-6月-2023', '10:07:49.883', '39.930760', '119.555232'],
	['07-6月-2023', '10:07:50.892', '39.930750', '119.555232'],
	['07-6月-2023', '10:07:51.892', '39.930759', '119.555272'],
	['07-6月-2023', '10:07:52.888', '39.930768', '119.555292'],
	['07-6月-2023', '10:07:53.885', '39.930808', '119.555313'],
	['07-6月-2023', '10:07:54.883', '39.930848', '119.555313'],
	['07-6月-2023', '10:07:55.891', '39.930847', '119.555363'],
	['07-6月-2023', '10:07:56.894', '39.930776', '119.555383'],
	['07-6月-2023', '10:07:57.885', '39.930777', '119.555373'],
	['07-6月-2023', '10:07:58.892', '39.930786', '119.555393'],
	['07-6月-2023', '10:07:59.892', '39.930855', '119.555443'],
	['07-6月-2023', '10:08:00.993', '39.930816', '119.555383'],
	['07-6月-2023', '10:08:01.991', '39.930806', '119.555413'],
	['07-6月-2023', '10:08:02.996', '39.930776', '119.555423'],
	['07-6月-2023', '10:08:03.999', '39.930755', '119.555433'],
	['07-6月-2023', '10:08:04.990', '39.930735', '119.555453'],
	['07-6月-2023', '10:08:05.990', '39.930725', '119.555463'],
	['07-6月-2023', '10:08:06.991', '39.930704', '119.555483'],
	['07-6月-2023', '10:08:07.996', '39.930694', '119.555493'],
	['07-6月-2023', '10:08:08.995', '39.930674', '119.555503'],
	['07-6月-2023', '10:08:09.992', '39.930663', '119.555523'],
	['07-6月-2023', '10:08:10.990', '39.930653', '119.555533'],
	['07-6月-2023', '10:08:11.994', '39.930663', '119.555553'],
	['07-6月-2023', '10:08:12.990', '39.930673', '119.555563'],
	['07-6月-2023', '10:08:13.988', '39.930672', '119.555573'],
	['07-6月-2023', '10:08:14.995', '39.930682', '119.555583'],
	['07-6月-2023', '10:08:15.998', '39.930682', '119.555583'],
	['07-6月-2023', '10:08:16.995', '39.930672', '119.555593'],
	['07-6月-2023', '10:08:17.998', '39.930662', '119.555603'],
	['07-6月-2023', '10:08:18.997', '39.930660', '119.555674'],
	['07-6月-2023', '10:08:19.996', '39.930640', '119.555694'],
	['07-6月-2023', '10:08:20.991', '39.930620', '119.555704'],
	['07-6月-2023', '10:08:21.999', '39.930609', '119.555714'],
	['07-6月-2023', '10:08:22.993', '39.930649', '119.555734'],
	['07-6月-2023', '10:08:24.000', '39.930629', '119.555734'],
	['07-6月-2023', '10:08:24.993', '39.930619', '119.555734'],
	['07-6月-2023', '10:08:25.996', '39.930598', '119.555764'],
	['07-6月-2023', '10:08:26.995', '39.930588', '119.555784'],
	['07-6月-2023', '10:08:28.002', '39.930567', '119.555834'],
	['07-6月-2023', '10:08:28.994', '39.930567', '119.555844'],
	['07-6月-2023', '10:08:29.989', '39.930556', '119.555864'],
	['07-6月-2023', '10:08:30.992', '39.930556', '119.555874'],
	['07-6月-2023', '10:08:31.997', '39.930546', '119.555894'],
	['07-6月-2023', '10:08:32.995', '39.930555', '119.555924'],
	['07-6月-2023', '10:08:33.994', '39.930565', '119.555934'],
	['07-6月-2023', '10:08:34.993', '39.930575', '119.555944'],
	['07-6月-2023', '10:08:35.992', '39.930564', '119.555964'],
	['07-6月-2023', '10:08:36.992', '39.930564', '119.555974'],
	['07-6月-2023', '10:08:37.986', '39.930564', '119.555984'],
	['07-6月-2023', '10:08:38.987', '39.930573', '119.556004'],
	['07-6月-2023', '10:08:39.995', '39.930563', '119.556004'],
	['07-6月-2023', '10:08:40.996', '39.930563', '119.556025'],
	['07-6月-2023', '10:08:41.987', '39.930572', '119.556055'],
	['07-6月-2023', '10:08:42.991', '39.930572', '119.556065'],
	['07-6月-2023', '10:08:43.994', '39.930572', '119.556085'],
	['07-6月-2023', '10:08:44.988', '39.930571', '119.556105'],
	['07-6月-2023', '10:08:45.988', '39.930581', '119.556115'],
	['07-6月-2023', '10:08:46.995', '39.930550', '119.556155'],
	['07-6月-2023', '10:08:47.999', '39.930550', '119.556175'],
	['07-6月-2023', '10:08:49.000', '39.930550', '119.556185'],
	['07-6月-2023', '10:08:49.992', '39.930549', '119.556215'],
	['07-6月-2023', '10:08:50.994', '39.930549', '119.556235'],
	['07-6月-2023', '10:08:51.986', '39.930548', '119.556245'],
	['07-6月-2023', '10:08:52.997', '39.930489', '119.556235'],
	['07-6月-2023', '10:08:53.986', '39.930488', '119.556255'],
	['07-6月-2023', '10:08:54.987', '39.930602', '119.556075'],
	['07-6月-2023', '10:08:55.989', '39.930602', '119.556075'],
	['07-6月-2023', '10:08:56.995', '39.930602', '119.556075'],
	['07-6月-2023', '10:08:57.987', '39.930602', '119.556075'],
	['07-6月-2023', '10:08:58.989', '39.930602', '119.556085'],
	['07-6月-2023', '10:08:59.999', '39.930602', '119.556085'],
	['07-6月-2023', '10:09:01.002', '39.930612', '119.556075'],
	['07-6月-2023', '10:09:01.990', '39.930622', '119.556065'],
	['07-6月-2023', '10:09:02.990', '39.930632', '119.556055'],
	['07-6月-2023', '10:09:03.994', '39.930643', '119.556045'],
	['07-6月-2023', '10:09:04.989', '39.930653', '119.556035'],
	['07-6月-2023', '10:09:05.994', '39.930663', '119.556035'],
	['07-6月-2023', '10:09:10.988', '39.930370', '119.556185'],
	['07-6月-2023', '10:09:11.991', '39.930369', '119.556195'],
	['07-6月-2023', '10:09:12.991', '39.930379', '119.556205'],
	['07-6月-2023', '10:09:13.983', '39.930389', '119.556205'],
	['07-6月-2023', '10:09:14.985', '39.930389', '119.556225'],
	['07-6月-2023', '10:09:15.983', '39.930389', '119.556235'],
	['07-6月-2023', '10:09:16.993', '39.930389', '119.556235'],
	['07-6月-2023', '10:09:17.989', '39.930388', '119.556255'],
	['07-6月-2023', '10:09:18.990', '39.930388', '119.556265'],
	['07-6月-2023', '10:09:19.990', '39.930399', '119.556225'],
	['07-6月-2023', '10:09:20.986', '39.930399', '119.556225'],
	['07-6月-2023', '10:09:26.990', '39.930388', '119.556245'],
	['07-6月-2023', '10:09:27.985', '39.930388', '119.556245'],
	['07-6月-2023', '10:09:28.984', '39.930378', '119.556255'],
	['07-6月-2023', '10:09:29.989', '39.930378', '119.556265'],
	['07-6月-2023', '10:09:30.987', '39.930388', '119.556275'],
	['07-6月-2023', '10:09:31.985', '39.930388', '119.556285'],
	['07-6月-2023', '10:09:32.986', '39.930377', '119.556295'],
	['07-6月-2023', '10:09:33.991', '39.930377', '119.556305'],
	['07-6月-2023', '10:09:34.987', '39.930367', '119.556305'],
	['07-6月-2023', '10:09:35.987', '39.930368', '119.556245'],
	['07-6月-2023', '10:09:36.988', '39.930358', '119.556245'],
	['07-6月-2023', '10:09:37.987', '39.930368', '119.556245'],
	['07-6月-2023', '10:09:38.987', '39.930378', '119.556245'],
	['07-6月-2023', '10:09:39.990', '39.930408', '119.556255'],
	['07-6月-2023', '10:09:40.993', '39.930408', '119.556265'],
	['07-6月-2023', '10:09:41.992', '39.930409', '119.556225'],
	['07-6月-2023', '10:09:42.989', '39.930408', '119.556245'],
	['07-6月-2023', '10:09:43.994', '39.930418', '119.556285'],
	['07-6月-2023', '10:09:45.003', '39.930407', '119.556305'],
	['07-6月-2023', '10:09:45.995', '39.930448', '119.556275'],
	['07-6月-2023', '10:09:46.990', '39.930356', '119.556335'],
	['07-6月-2023', '10:09:48.000', '39.930275', '119.556386'],
	['07-6月-2023', '10:09:48.994', '39.930255', '119.556396'],
	['07-6月-2023', '10:09:49.990', '39.930236', '119.556376'],
	['07-6月-2023', '10:09:50.992', '39.930226', '119.556376'],
	['07-6月-2023', '10:09:51.999', '39.930206', '119.556376'],
	['07-6月-2023', '10:09:52.993', '39.930196', '119.556355'],
	['07-6月-2023', '10:09:53.997', '39.930186', '119.556355'],
	['07-6月-2023', '10:09:54.998', '39.930166', '119.556355'],
	['07-6月-2023', '10:09:55.999', '39.930146', '119.556355'],
	['07-6月-2023', '10:09:56.997', '39.930136', '119.556345'],
	['07-6月-2023', '10:09:57.972', '39.930126', '119.556345'],
	['07-6月-2023', '10:09:58.974', '39.930117', '119.556325'],
	['07-6月-2023', '10:09:59.976', '39.930107', '119.556315'],
	['07-6月-2023', '10:10:00.977', '39.930097', '119.556305'],
	['07-6月-2023', '10:10:01.979', '39.930087', '119.556305'],
	['07-6月-2023', '10:10:02.980', '39.930067', '119.556295'],
	['07-6月-2023', '10:10:03.982', '39.930057', '119.556295'],
	['07-6月-2023', '10:10:04.983', '39.930067', '119.556295'],
	['07-6月-2023', '10:10:05.984', '39.930048', '119.556285'],
	['07-6月-2023', '10:10:06.985', '39.930038', '119.556285'],
	['07-6月-2023', '10:10:07.986', '39.930027', '119.556295'],
	['07-6月-2023', '10:10:08.987', '39.930017', '119.556305'],
	['07-6月-2023', '10:10:09.988', '39.930027', '119.556315'],
	['07-6月-2023', '10:10:10.989', '39.930017', '119.556325'],
	['07-6月-2023', '10:10:11.990', '39.930016', '119.556345'],
	['07-6月-2023', '10:10:12.990', '39.930016', '119.556345'],
	['07-6月-2023', '10:10:13.991', '39.930016', '119.556366'],
	['07-6月-2023', '10:10:14.992', '39.930005', '119.556396'],
	['07-6月-2023', '10:10:15.992', '39.929995', '119.556426'],
	['07-6月-2023', '10:10:16.993', '39.929995', '119.556426'],
	['07-6月-2023', '10:10:17.993', '39.929994', '119.556436'],
	['07-6月-2023', '10:10:18.994', '39.929984', '119.556446'],
	['07-6月-2023', '10:10:19.994', '39.929984', '119.556466'],
	['07-6月-2023', '10:10:20.995', '39.929974', '119.556476'],
	['07-6月-2023', '10:10:21.995', '39.929963', '119.556496'],
	['07-6月-2023', '10:10:22.995', '39.929953', '119.556516'],
	['07-6月-2023', '10:10:23.996', '39.929952', '119.556546'],
	['07-6月-2023', '10:10:24.996', '39.929942', '119.556556'],
	['07-6月-2023', '10:10:25.996', '39.929942', '119.556566'],
	['07-6月-2023', '10:10:26.997', '39.929941', '119.556576'],
	['07-6月-2023', '10:10:27.997', '39.929941', '119.556586'],
	['07-6月-2023', '10:10:28.997', '39.929931', '119.556606'],
	['07-6月-2023', '10:10:29.998', '39.929930', '119.556626'],
	['07-6月-2023', '10:10:30.998', '39.929930', '119.556646'],
	['07-6月-2023', '10:10:31.998', '39.929930', '119.556666'],
	['07-6月-2023', '10:10:32.998', '39.929939', '119.556676'],
	['07-6月-2023', '10:10:33.998', '39.929929', '119.556696'],
	['07-6月-2023', '10:10:34.999', '39.929929', '119.556707'],
	['07-6月-2023', '10:10:35.999', '39.929938', '119.556727'],
	['07-6月-2023', '10:10:36.999', '39.929928', '119.556747'],
	['07-6月-2023', '10:10:37.999', '39.929928', '119.556757'],
	['07-6月-2023', '10:10:38.999', '39.929927', '119.556777'],
	['07-6月-2023', '10:10:39.999', '39.929927', '119.556797'],
	['07-6月-2023', '10:10:41.000', '39.929937', '119.556807'],
	['07-6月-2023', '10:10:42.000', '39.929926', '119.556827'],
	['07-6月-2023', '10:10:43.000', '39.929936', '119.556847'],
	['07-6月-2023', '10:10:44.000', '39.929935', '119.556867'],
	['07-6月-2023', '10:10:45.000', '39.929935', '119.556877'],
	['07-6月-2023', '10:10:46.000', '39.929935', '119.556897'],
	['07-6月-2023', '10:10:47.000', '39.929935', '119.556907'],
	['07-6月-2023', '10:10:48.000', '39.929934', '119.556937'],
	['07-6月-2023', '10:10:49.001', '39.929934', '119.556947'],
	['07-6月-2023', '10:10:50.001', '39.929923', '119.556967'],
	['07-6月-2023', '10:10:51.001', '39.929923', '119.556987'],
	['07-6月-2023', '10:10:52.001', '39.929923', '119.556997'],
	['07-6月-2023', '10:10:53.001', '39.929912', '119.557017'],
	['07-6月-2023', '10:10:54.001', '39.929902', '119.557017'],
	['07-6月-2023', '10:10:55.001', '39.929882', '119.557027'],
	['07-6月-2023', '10:10:56.000', '39.929882', '119.557037'],
	['07-6月-2023', '10:10:57.001', '39.929872', '119.557047'],
	['07-6月-2023', '10:10:58.001', '39.929862', '119.557047'],
	['07-6月-2023', '10:10:59.001', '39.929851', '119.557058'],
	['07-6月-2023', '10:11:00.001', '39.929841', '119.557078'],
	['07-6月-2023', '10:11:01.001', '39.929841', '119.557078'],
	['07-6月-2023', '10:11:02.001', '39.929831', '119.557098'],
	['07-6月-2023', '10:11:03.002', '39.929820', '119.557108'],
	['07-6月-2023', '10:11:04.002', '39.929810', '119.557128'],
	['07-6月-2023', '10:11:05.002', '39.929790', '119.557148'],
	['07-6月-2023', '10:11:06.002', '39.929789', '119.557158'],
	['07-6月-2023', '10:11:07.002', '39.929779', '119.557158'],
	['07-6月-2023', '10:11:08.002', '39.929770', '119.557148'],
	['07-6月-2023', '10:11:09.002', '39.929759', '119.557168'],
	['07-6月-2023', '10:11:10.002', '39.929749', '119.557188'],
	['07-6月-2023', '10:11:11.002', '39.929749', '119.557198'],
	['07-6月-2023', '10:11:12.002', '39.929738', '119.557208'],
	['07-6月-2023', '10:11:13.002', '39.929738', '119.557228'],
	['07-6月-2023', '10:11:14.002', '39.929728', '119.557238'],
	['07-6月-2023', '10:11:15.002', '39.929717', '119.557268'],
	['07-6月-2023', '10:11:16.002', '39.929707', '119.557278'],
	['07-6月-2023', '10:11:17.002', '39.929707', '119.557288'],
	['07-6月-2023', '10:11:18.002', '39.929696', '119.557308'],
	['07-6月-2023', '10:11:19.002', '39.929686', '119.557318'],
	['07-6月-2023', '10:11:20.002', '39.929676', '119.557328'],
	['07-6月-2023', '10:11:21.002', '39.929666', '119.557328'],
	['07-6月-2023', '10:11:22.002', '39.929656', '119.557328'],
	['07-6月-2023', '10:11:23.002', '39.929646', '119.557338'],
	['07-6月-2023', '10:11:24.002', '39.929636', '119.557338'],
	['07-6月-2023', '10:11:25.002', '39.929635', '119.557348'],
	['07-6月-2023', '10:11:26.002', '39.929635', '119.557358'],
	['07-6月-2023', '10:11:27.003', '39.929615', '119.557368'],
	['07-6月-2023', '10:11:28.003', '39.929595', '119.557368'],
	['07-6月-2023', '10:11:29.003', '39.929575', '119.557388'],
	['07-6月-2023', '10:11:30.003', '39.929565', '119.557378'],
	['07-6月-2023', '10:11:31.003', '39.929555', '119.557378'],
	['07-6月-2023', '10:11:32.003', '39.929545', '119.557378'],
	['07-6月-2023', '10:11:33.003', '39.929545', '119.557388'],
	['07-6月-2023', '10:11:34.003', '39.929545', '119.557388'],
	['07-6月-2023', '10:11:35.003', '39.929544', '119.557399'],
	['07-6月-2023', '10:11:36.003', '39.929534', '119.557419'],
	['07-6月-2023', '10:11:37.003', '39.929534', '119.557429'],
	['07-6月-2023', '10:11:38.003', '39.929524', '119.557439'],
	['07-6月-2023', '10:11:39.003', '39.929513', '119.557459'],
	['07-6月-2023', '10:11:40.003', '39.929503', '119.557459'],
	['07-6月-2023', '10:11:41.003', '39.929493', '119.557469'],
	['07-6月-2023', '10:11:42.003', '39.929473', '119.557469'],
	['07-6月-2023', '10:11:43.003', '39.929453', '119.557469'],
	['07-6月-2023', '10:11:44.003', '39.929453', '119.557469'],
	['07-6月-2023', '10:11:45.003', '39.929453', '119.557469'],
	['07-6月-2023', '10:11:46.003', '39.929433', '119.557479'],
	['07-6月-2023', '10:11:47.003', '39.929422', '119.557489'],
	['07-6月-2023', '10:11:48.003', '39.929402', '119.557499'],
	['07-6月-2023', '10:11:49.003', '39.929392', '119.557509'],
	['07-6月-2023', '10:11:50.003', '39.929372', '119.557509'],
	['07-6月-2023', '10:11:51.003', '39.929362', '119.557519'],
	['07-6月-2023', '10:11:52.003', '39.929352', '119.557519'],
	['07-6月-2023', '10:11:53.003', '39.929332', '119.557519'],
	['07-6月-2023', '10:11:54.003', '39.929322', '119.557519'],
	['07-6月-2023', '10:11:55.003', '39.929282', '119.557499'],
	['07-6月-2023', '10:11:56.003', '39.929292', '119.557509'],
	['07-6月-2023', '10:11:57.003', '39.929262', '119.557519'],
	['07-6月-2023', '10:11:58.003', '39.929242', '119.557519'],
	['07-6月-2023', '10:11:59.004', '39.929232', '119.557509'],
	['07-6月-2023', '10:12:00.004', '39.929222', '119.557519'],
	['07-6月-2023', '10:12:01.004', '39.929202', '119.557519'],
	['07-6月-2023', '10:12:02.004', '39.929202', '119.557519'],
	['07-6月-2023', '10:12:03.004', '39.929192', '119.557509'],
	['07-6月-2023', '10:12:04.003', '39.929182', '119.557519'],
	['07-6月-2023', '10:12:05.003', '39.929172', '119.557519'],
	['07-6月-2023', '10:12:06.003', '39.929162', '119.557529'],
	['07-6月-2023', '10:12:07.002', '39.929152', '119.557529'],
	['07-6月-2023', '10:12:08.002', '39.929122', '119.557519'],
	['07-6月-2023', '10:12:09.002', '39.929122', '119.557529'],
	['07-6月-2023', '10:12:10.002', '39.929112', '119.557529'],
	['07-6月-2023', '10:12:11.002', '39.929102', '119.557529'],
	['07-6月-2023', '10:12:12.002', '39.929081', '119.557539'],
	['07-6月-2023', '10:12:13.001', '39.929072', '119.557529'],
	['07-6月-2023', '10:12:14.001', '39.929052', '119.557529'],
	['07-6月-2023', '10:12:15.001', '39.929042', '119.557529'],
	['07-6月-2023', '10:12:16.001', '39.929032', '119.557519'],
	['07-6月-2023', '10:12:17.001', '39.929022', '119.557519'],
	['07-6月-2023', '10:12:18.001', '39.929012', '119.557529'],
	['07-6月-2023', '10:12:19.001', '39.928992', '119.557519'],
	['07-6月-2023', '10:12:20.001', '39.928992', '119.557509'],
	['07-6月-2023', '10:12:21.001', '39.928982', '119.557499'],
	['07-6月-2023', '10:12:22.001', '39.928972', '119.557499'],
	['07-6月-2023', '10:12:23.000', '39.928963', '119.557489'],
	['07-6月-2023', '10:12:24.000', '39.928943', '119.557469'],
	['07-6月-2023', '10:12:25.000', '39.928943', '119.557469'],
	['07-6月-2023', '10:12:26.000', '39.928943', '119.557469'],
	['07-6月-2023', '10:12:27.000', '39.928923', '119.557469'],
	['07-6月-2023', '10:12:28.000', '39.928913', '119.557469'],
	['07-6月-2023', '10:12:29.000', '39.928903', '119.557469'],
	['07-6月-2023', '10:12:30.000', '39.928893', '119.557459'],
	['07-6月-2023', '10:12:31.000', '39.928893', '119.557449'],
	['07-6月-2023', '10:12:32.000', '39.928883', '119.557449'],
	['07-6月-2023', '10:12:33.000', '39.928883', '119.557449'],
	['07-6月-2023', '10:12:34.000', '39.928863', '119.557449'],
	['07-6月-2023', '10:12:35.000', '39.928853', '119.557459'],
	['07-6月-2023', '10:12:36.000', '39.928843', '119.557459'],
	['07-6月-2023', '10:12:37.000', '39.928833', '119.557459'],
	['07-6月-2023', '10:12:38.000', '39.928823', '119.557449'],
	['07-6月-2023', '10:12:39.000', '39.928783', '119.557449'],
	['07-6月-2023', '10:12:40.000', '39.928794', '119.557439'],
	['07-6月-2023', '10:12:41.000', '39.928784', '119.557429'],
	['07-6月-2023', '10:12:42.000', '39.928774', '119.557419'],
	['07-6月-2023', '10:12:43.000', '39.928764', '119.557419'],
	['07-6月-2023', '10:12:44.000', '39.928754', '119.557409'],
	['07-6月-2023', '10:12:45.000', '39.928744', '119.557399'],
	['07-6月-2023', '10:12:46.000', '39.928725', '119.557389'],
	['07-6月-2023', '10:12:47.000', '39.928715', '119.557369'],
	['07-6月-2023', '10:12:48.000', '39.928715', '119.557359'],
	['07-6月-2023', '10:12:49.000', '39.928705', '119.557349'],
	['07-6月-2023', '10:12:50.000', '39.928696', '119.557339'],
	['07-6月-2023', '10:12:51.000', '39.928676', '119.557318'],
	['07-6月-2023', '10:12:52.000', '39.928676', '119.557318'],
	['07-6月-2023', '10:12:53.000', '39.928666', '119.557318'],
	['07-6月-2023', '10:12:54.000', '39.928656', '119.557318'],
	['07-6月-2023', '10:12:55.000', '39.928646', '119.557308'],
	['07-6月-2023', '10:12:56.000', '39.928637', '119.557298'],
	['07-6月-2023', '10:12:57.000', '39.928627', '119.557298'],
	['07-6月-2023', '10:12:58.000', '39.928617', '119.557288'],
	['07-6月-2023', '10:12:59.000', '39.928597', '119.557278'],
	['07-6月-2023', '10:13:00.000', '39.928597', '119.557278'],
	['07-6月-2023', '10:13:01.000', '39.928577', '119.557268'],
	['07-6月-2023', '10:13:02.000', '39.928567', '119.557268'],
	['07-6月-2023', '10:13:03.000', '39.928547', '119.557258'],
	['07-6月-2023', '10:13:04.000', '39.928548', '119.557248'],
	['07-6月-2023', '10:13:05.000', '39.928518', '119.557248'],
	['07-6月-2023', '10:13:06.000', '39.928518', '119.557238'],
	['07-6月-2023', '10:13:07.000', '39.928498', '119.557238'],
	['07-6月-2023', '10:13:08.000', '39.928488', '119.557228'],
	['07-6月-2023', '10:13:09.000', '39.928478', '119.557228'],
	['07-6月-2023', '10:13:10.000', '39.928478', '119.557218'],
	['07-6月-2023', '10:13:11.000', '39.928478', '119.557218'],
	['07-6月-2023', '10:13:12.000', '39.928438', '119.557218'],
	['07-6月-2023', '10:13:13.000', '39.928438', '119.557228'],
	['07-6月-2023', '10:13:14.000', '39.928438', '119.557218'],
	['07-6月-2023', '10:13:15.000', '39.928419', '119.557198'],
	['07-6月-2023', '10:13:16.000', '39.928409', '119.557188'],
	['07-6月-2023', '10:13:17.000', '39.928399', '119.557178'],
	['07-6月-2023', '10:13:18.000', '39.928389', '119.557178'],
	['07-6月-2023', '10:13:19.000', '39.928369', '119.557168'],
	['07-6月-2023', '10:13:20.000', '39.928359', '119.557168'],
	['07-6月-2023', '10:13:21.000', '39.928349', '119.557168'],
	['07-6月-2023', '10:13:22.000', '39.928319', '119.557158'],
	['07-6月-2023', '10:13:23.000', '39.928300', '119.557148'],
	['07-6月-2023', '10:13:24.000', '39.928300', '119.557148'],
	['07-6月-2023', '10:13:25.000', '39.928300', '119.557148'],
	['07-6月-2023', '10:13:26.000', '39.928280', '119.557148'],
	['07-6月-2023', '10:13:26.999', '39.928270', '119.557148'],
	['07-6月-2023', '10:13:28.000', '39.928259', '119.557158'],
	['07-6月-2023', '10:13:29.000', '39.928250', '119.557148'],
	['07-6月-2023', '10:13:30.000', '39.928240', '119.557148'],
	['07-6月-2023', '10:13:31.000', '39.928220', '119.557138'],
	['07-6月-2023', '10:13:32.000', '39.928210', '119.557138'],
	['07-6月-2023', '10:13:33.000', '39.928200', '119.557128'],
	['07-6月-2023', '10:13:34.000', '39.928180', '119.557118'],
	['07-6月-2023', '10:13:35.000', '39.928170', '119.557118'],
	['07-6月-2023', '10:13:36.000', '39.928160', '119.557118'],
	['07-6月-2023', '10:13:37.000', '39.928150', '119.557118'],
	['07-6月-2023', '10:13:38.000', '39.928150', '119.557118'],
	['07-6月-2023', '10:13:39.000', '39.928130', '119.557118'],
	['07-6月-2023', '10:13:40.000', '39.928120', '119.557118'],
	['07-6月-2023', '10:13:41.000', '39.928100', '119.557118'],
	['07-6月-2023', '10:13:42.000', '39.928090', '119.557118'],
	['07-6月-2023', '10:13:43.000', '39.928080', '119.557118'],
	['07-6月-2023', '10:13:44.000', '39.928070', '119.557118'],
	['07-6月-2023', '10:13:45.000', '39.928090', '119.557118'],
	['07-6月-2023', '10:13:46.000', '39.928081', '119.557108'],
	['07-6月-2023', '10:13:47.000', '39.928050', '119.557118'],
	['07-6月-2023', '10:13:48.000', '39.928040', '119.557118'],
	['07-6月-2023', '10:13:49.000', '39.928030', '119.557118'],
	['07-6月-2023', '10:13:50.000', '39.928021', '119.557108'],
	['07-6月-2023', '10:13:51.000', '39.928011', '119.557108'],
	['07-6月-2023', '10:13:52.000', '39.927991', '119.557108'],
	['07-6月-2023', '10:13:53.000', '39.927960', '119.557118'],
	['07-6月-2023', '10:13:54.000', '39.927961', '119.557108'],
	['07-6月-2023', '10:13:55.000', '39.927940', '119.557118'],
	['07-6月-2023', '10:13:56.000', '39.927940', '119.557118'],
	['07-6月-2023', '10:13:57.000', '39.927930', '119.557118'],
	['07-6月-2023', '10:13:58.000', '39.927920', '119.557118'],
	['07-6月-2023', '10:13:59.000', '39.927910', '119.557118'],
	['07-6月-2023', '10:14:00.000', '39.927890', '119.557118'],
	['07-6月-2023', '10:14:01.000', '39.927880', '119.557118'],
	['07-6月-2023', '10:14:02.000', '39.927870', '119.557118'],
	['07-6月-2023', '10:14:03.000', '39.927850', '119.557118'],
	['07-6月-2023', '10:14:04.000', '39.927840', '119.557118'],
	['07-6月-2023', '10:14:05.000', '39.927831', '119.557108'],
	['07-6月-2023', '10:14:06.000', '39.927811', '119.557108'],
	['07-6月-2023', '10:14:07.000', '39.927801', '119.557098'],
	['07-6月-2023', '10:14:08.000', '39.927801', '119.557108'],
	['07-6月-2023', '10:14:09.000', '39.927791', '119.557108'],
	['07-6月-2023', '10:14:09.999', '39.927771', '119.557108'],
	['07-6月-2023', '10:14:10.999', '39.927760', '119.557118'],
	['07-6月-2023', '10:14:11.999', '39.927760', '119.557118'],
	['07-6月-2023', '10:14:12.999', '39.927730', '119.557128'],
	['07-6月-2023', '10:14:13.999', '39.927720', '119.557128'],
	['07-6月-2023', '10:14:14.999', '39.927690', '119.557118'],
	['07-6月-2023', '10:14:15.999', '39.927690', '119.557118'],
	['07-6月-2023', '10:14:16.999', '39.927680', '119.557128'],
	['07-6月-2023', '10:14:17.999', '39.927670', '119.557128'],
	['07-6月-2023', '10:14:18.999', '39.927670', '119.557128'],
	['07-6月-2023', '10:14:19.999', '39.927660', '119.557118'],
	['07-6月-2023', '10:14:20.999', '39.927640', '119.557118'],
	['07-6月-2023', '10:14:21.999', '39.927630', '119.557118'],
	['07-6月-2023', '10:14:22.999', '39.927620', '119.557118'],
	['07-6月-2023', '10:14:23.999', '39.927610', '119.557118'],
	['07-6月-2023', '10:14:24.999', '39.927590', '119.557118'],
	['07-6月-2023', '10:14:25.999', '39.927580', '119.557128'],
	['07-6月-2023', '10:14:26.999', '39.927570', '119.557128'],
	['07-6月-2023', '10:14:27.999', '39.927560', '119.557138'],
	['07-6月-2023', '10:14:28.999', '39.927540', '119.557138'],
	['07-6月-2023', '10:14:29.999', '39.927530', '119.557138'],
	['07-6月-2023', '10:14:30.999', '39.927530', '119.557138'],
	['07-6月-2023', '10:14:31.999', '39.927520', '119.557138'],
	['07-6月-2023', '10:14:32.999', '39.927510', '119.557138'],
	['07-6月-2023', '10:14:33.999', '39.927500', '119.557128'],
]

export const data = removeAdjacentDuplicates(_data)
