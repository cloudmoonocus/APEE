export function removeAdjacentDuplicates(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		if (isEqual(arr[i], arr[i + 1])) {
			arr.splice(i, 1) // 删除第i个数组
			i-- // 重新检查当前位置的数组
		}
	}
	return arr
}

// 判断两个数组是否相等
function isEqual(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false
	}

	if (arr1[2] === arr2[2] && arr1[3] === arr2[3]) {
		return true
	}

	return false
}
