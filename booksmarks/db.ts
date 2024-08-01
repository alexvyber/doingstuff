import { DatabaseSync } from "node:sqlite"
// import { logAllProperties } from "./utils.js"

export const db = new DatabaseSync("./tmp/data")

db.exec(`
    CREATE TABLE IF NOT EXISTS bookmarks(
      id INTEGER PRIMARY KEY,
      title TEXT,
      kind TEXT NOT NULL DEFAULT "note",
      description TEXT
    ) STRICT
  `)

// logAllProperties(db)

// TODO:
// db.exec("DROP TABLE IF EXISTS bookmarks")
// db.exec("DROP TABLE IF EXISTS uploads")
// db.exec("DROP TABLE IF EXISTS bookmark_upload_links")

// db.exec(`
//     CREATE TABLE uploads(
//       id INTEGER PRIMARY KEY,
//       filename TEXT,
//       filepath TEXT
//     )`)

// db.exec(`
//     CREATE TABLE bookmark_upload_links(
//       bookmark_id INTEGER FOREING KEY,
//       upload_id INTEGER FOREING KEY
//     )`)
