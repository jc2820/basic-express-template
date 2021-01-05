# Very basic express app or server tempate

So that you can spin one up easy.

`npm run dev`

## Infos

* Choose a view engine if you want one - I like EJS. Just add in app.js and package.json and use the views folder to hold them.
* db_connection.js will create connection to a psql db with pg-promise module. For usage check the npm page. Delete the folder if doing the db a different way.
* db_build.sql will be used to init a db, assuming you have created the db at process.env.DATABASE_URL. Use \i path/to/file/db_build.sql to run the schema in a local db
* Theres a few env variables in there already - make a .env file for em.
* There's more files and folders than really needed here - but set up for a few different use cases. Use or del as appropriate.
* local pg db_url is usually `postgres://user:pass@localhost:5432/db_name`


