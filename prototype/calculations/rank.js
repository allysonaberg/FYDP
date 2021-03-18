const item_averages = require('../content/item_averages');

// RANK A: -10% or less than avg
// RANK B: between -10% and +5% of avg
// RANK C: between +5% and +25% of avg
// RANK D: +25% or more than avg

function calculate_rank(kg_carbon, item_type) { 
    var rank = '';
    var avg = item_averages[item_type];
    var pcdiff = ((avg - kg_carbon)/avg)*100

    if (pcdiff <= -10.0){
        rank = 'A';
    } else if (pcdiff > -10.0 && pcdiff <= 5.0){
        rank = 'B';
    } else if (pcdiff > 5.0 && pcdiff <= 25.0 ){
        rank = 'C';
    } else {
        rank = 'D';
    }

    return rank;
}

module.exports = calculate_rank;