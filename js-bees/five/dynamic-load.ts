function loadJS(files: string[], done: () => void) {
  const head = document.getElementsByTagName("head")[0]

  Promise.all(
    files.map((file) => {
      return new Promise<void>((resolve) => {
        const script = document.createElement("script")

        script.type = "text/javascript"
        script.async = true
        script.src = file

        script.addEventListener("load", (_e) => resolve(), false)

        head.appendChild(script)
      })
    })
  ).then(done)
}

loadJS(["a.js", "b.js"], () => {
  console.log("Loading completed.")
})
