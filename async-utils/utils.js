module.exports.add = (a, b, callback) => {
	setTimeout(() => {
		callback(a + b);
	}, 500);
};

module.exports.squer = (x, callback) => {
	setTimeout(() => {
		callback(x * x);
	}, 500);
};