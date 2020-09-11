
exports.up = function(knex) {
  return knex.schema
  .createTable("projects", tbl => {
      tbl.increments();
      tbl.string("project_name").notNullable();
      tbl.text("description");
      tbl.boolean("completed?").defaultTo("false");
  })
  .createTable("tasks", tbl => {
      tbl.increments();
      tbl.text("description").notNullable();
      tbl.text("notes");
      tbl.boolean("completed?").defaultTo("false");
      tbl
        .integer("project_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
  })
  .createTable("resources", tbl => {
    tbl.increments();
    tbl.string("resource_name").notNullable();
    tbl.text("description").notNullable();
  })
  .createTable("projects_resources", tbl => {
      tbl
        .integer("project_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      tbl
        .integer("resource_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("resources")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      tbl
        .primary(["project_id", "resource_id"])
  })
};

exports.down = function(knex) {
    return knex.schema
  .dropTableIfExists("projects_resources")
  .dropTableIfExists("resources")
  .dropTableIfExists("tasks")
  .dropTableIfExists("projects");
};
