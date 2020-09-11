
exports.seed = function(knex) {
  return knex("tasks")
  .truncate()
  .then(function () {
    return knex("tasks").insert([
      { 
        project_id: 1, 
        description: "sweep the floors" 
      },
      { 
        project_id: 1, 
        description: "mop", 
        notes: "use bleach but not too much" 
      },
      { 
        project_id: 2, 
        description: "buy groceries for lasagna" 
      },
    ]);
  });
};
