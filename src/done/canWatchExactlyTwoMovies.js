flightLength=10
movieLengths=[3,7,8,4,6]

// Time O(nlgn)
// Space O(1)
function watch(fl, ml) {
	ml.sort();
	
	let l = 0;
	let r = ml.length - 1;

	while (l !== r) {
		const sum = ml[l] + ml[r];
		if (sum === fl) {
			return true;
		} else if (sum < fl) {
			l += 1;
		} else {
			r += 1;
		}
	}

	return false;
}

// Time O(n)
// Space O(n)
function watch(fl, ml) {
	const seenSet = new Set();
	
	for (const m of ml) {
		const t = fl - m;
		
		if (seenSet.has(t)) {
			return true;
		} else {
			seenSet.add(t);
		}
	}
	
	return false
}
