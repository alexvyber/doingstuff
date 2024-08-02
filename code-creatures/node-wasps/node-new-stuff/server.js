import { createServer } from "node:http"

const server = createServer()

server.on("request", (req, res) => {
  console.log("res")

  res.end(JSON.stringify({ status: "ok" }))
})

server.listen(3000)
