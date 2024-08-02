const mediaQueryList = window.matchMedia("(max-width: 800px)")

const handle = (mql) => {
  if (mql.matches) {
    console.log("width <= 800px")
  } else {
    console.log("width > 800px")
  }
}

mediaQueryList.addEventListener("change", handle)

handle(mediaQueryList)
