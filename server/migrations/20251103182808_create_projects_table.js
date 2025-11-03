/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable("projects", (table) => {
    table.increments("id", {primaryKey: true});
    table.string("name", 100);
    table.text("description", "longtext");
    table.string("client", 100);
    table.date("deadline");
    table.string("status"); 
    table.date("start_date");
    table.date("end_date");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable("projects");
}
