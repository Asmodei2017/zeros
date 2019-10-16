module.exports = function zeros(expression){
	let dividers = {'5': 0, '2': 0};
	expression.split('*').forEach(factorial => {
		let isParity = (factorial.includes('!!')) ? 2 : 1;
		Object.keys(dividers).forEach(divider => {
			for(let num = parseInt(factorial); num >= divider; num -= isParity){
				if(!(num % divider)) {
					let count = num;
					while(!(count % divider)) {
						count = count / divider;
						divider === '5' ? dividers['5'] += 1 : dividers['2'] += 1;
					}
				}
			}
		});
		
	});
	return Math.min(dividers['5'], dividers['2']);
}
    

