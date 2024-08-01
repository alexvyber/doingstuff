import { createServer } from "node:http"
import { db } from "./db.js"
import Router from "find-my-way"

const router = Router()

const bookmarks = {
  all: db.prepare("SELECT * FROM bookmarks ORDER BY id"),
  getById: db.prepare("SELECT * FROM bookmarks WHERE ID = (?)"),
  create: db.prepare("INSERT INTO bookmarks (title, description) VALUES (?, ?) RETURNING *"),
  delete: db.prepare("DELETE FROM bookmarks WHERE id = (?)"),
}

router.on("GET", "/", (req, res, params) => {
  res.end('{"message":"hello world"}')
})

router.on("GET", "/bookmarks", (req, res, params) => {
  res.end(JSON.stringify({ data: bookmarks.all.all() }))
})

router.on("POST", "/bookmarks", (req, res, params) => {
  try {
    let body: any = []

    req
      .on("data", (chunk) => {
        body.push(chunk)
      })
      .on("end", () => {
        body = Buffer.concat(body).toString()

        const data = JSON.parse(body)

        const result = bookmarks.create.run(data.title, data.description)

        res.end(JSON.stringify(bookmarks.getById.all(result.lastInsertRowid)))
      })
      .on("error", (err) => {
        console.error(err.stack)
      })
  } catch (error) {
    res.end(JSON.stringify(error))
  }
})

router.on("DELETE", "/bookmarks/:id", (req, res, params) => {
  try {
    bookmarks.delete.run(params.id)
    res.end("ok ")
  } catch (error) {
    res.end(JSON.stringify(error))
  }
})

const hostname = "127.0.0.1"
const port = Number(process.env.PORT) ?? 3000

const server = createServer((req, res) => {
  router.lookup(req, res)
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
