exports.seed = function (knex) {
  return knex("projects")
    .truncate()
    .then(function () {
      return knex("projects").insert([
        {
          project_name: "clean garage",
          description: "ajdfbflbgjjmbbjbadgjlrgkg",
        },
        {
          project_name: "cook lasagna",
          description: "fdsfjsnfklsjnflsgnoijsernfv",
        },
      ]);
    });
};
