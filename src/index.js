module.exports = function getZerosCount(number, base) {
	let zeros = [],
		occur = [];

	const getPrimeFactors = base => {

		const factors = [];
		let div = 2,
			counter = 0;

		while (base >= 2) {
			while (base % div == 0) {
				counter++;
				factors.push(div);
				base /= div;
				
			}
			(counter > 0) && occur.push(counter);
			counter = 0;
			div++;
		}
		
		return factors;
	};
	const allPrimeFactors = getPrimeFactors(base);

	const getUniquePrimeFactors = allPrimeFactors => {
		let obj = {};

		for (let i = 0, len = allPrimeFactors.length; i < len; i++) {
    		let factor = allPrimeFactors[i];
    		obj[factor] = true;
  		}

  		return Object.keys(obj);
	};

	const uniquePrimeFactors = getUniquePrimeFactors(allPrimeFactors);

	for (let i = 0, len = uniquePrimeFactors.length; i < len; i++) {  
		let sum = 0,
			pow = 1;

			while (Math.floor(number / Math.pow(uniquePrimeFactors[i], pow)) != 0) {     
				sum += Math.floor(number / Math.pow(uniquePrimeFactors[i], pow));
				pow++;
			}

			zeros.push(Math.floor(sum / occur[i]));
	}

	zeros.sort((a, b) => a - b);

	return zeros[0];
}