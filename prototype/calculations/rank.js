const item_averages = require('../content/item_averages');
const footprint = require('./footprint');

// RANK A: -10% or less than avg
// RANK B: between -10% and +5% of avg
// RANK C: between +5% and +25% of avg
// RANK D: +25% or more than avg

function calculate_rank(kg_carbon, item_type) {
    // TODO calculate rank from kg_carbon 
    var rank = 0;
    
    return rank;
}

module.exports = calculate_rank;