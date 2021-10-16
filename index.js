var should = require('should');

const CHIPS_COST = 1;

function purchase(items){
	let cost = items.length * CHIPS_COST;
	return cost;
}

let chips = {"selection": "Chips"};

should(purchase([chips])).be.equal(CHIPS_COST * 1);
should(purchase([chips, chips])).be.equal(CHIPS_COST * 2);
should(purchase([chips, chips, chips])).be.equal(CHIPS_COST * 3);
