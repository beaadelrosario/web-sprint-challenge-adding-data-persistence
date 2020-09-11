## CHANGE THE 'development' OBJECT IN 'knexfile.js' TO : 

``` js
development: { 
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: './data/[CHANGE ME.db3]', // change to name of database 
  },
  migrations: {
    directory: './data/migrations'
  },
  seeds: {
    directory: './data/seeds'
  },
},
```