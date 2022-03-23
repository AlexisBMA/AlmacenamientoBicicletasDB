/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('bicicletas').del()
  await knex('bicicletas').insert([
    {color: 'roja', modelo: 'Orbea', lat: 19.28392, lon: -99.13618},
    {color: 'azul', modelo: 'Merida', lat: 19.28275, lon: -99.13943}
  ]);
};
