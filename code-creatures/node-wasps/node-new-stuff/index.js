import { parseArgs, styleText } from "node:util"
import { glob, watch } from "node:fs/promises"
import { createReadStream } from "node:fs"
import { parseEnv } from "node:util"

const options = {
  some: {
    type: "string",
    short: "s",
  },
}

const env = parseEnv("HELLO=world\nHELLO=oh my\n")

console.log(process.pid)

while (true) {}

const { values, positionals } = parseArgs({ args: process.args, options })

console.log(styleText(["whiteBright", "underline", "bold", "bgBlack"], ` ${values.some} `))

for await (const file of glob(`${import.meta.dirname}/*`)) {
  if (file.endsWith("js")) {
    console.log(styleText(["bold", "blue"], file))

    const stream = createReadStream(file)

    for await (const chunk of stream) {
      console.log(styleText("magenta", chunk.toString().toUpperCase()))
    }
  }
}

for await (const file of watch(`${import.meta.dirname}`)) {
  if (file.filename.endsWith("js")) {
    console.log(styleText(["bold", "blue"], file.filename))

    const stream = createReadStream(file.filename)

    for await (const chunk of stream) {
      console.log(styleText("magenta", chunk.toString().toUpperCase()))
    }
  }
}

export const func = () => "some"
