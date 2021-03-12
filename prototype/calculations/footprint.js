const db_methods = require('../db/db_methods');

async function calculate_footprint(grams, material, percentage_material) {
    // Go to database to perform calculations
    var co_kg_per_kg = await db_methods.get_CO_kg_per_kg_for_material(material);

    // Get the weight of the material in kg
    var kg_material = (grams / 1000.00) * percentage_material;
    
    // Get the carbon footpring
    var kg_carbon = co_kg_per_kg * kg_material;
    return kg_carbon;
}

module.exports = calculate_footprint;