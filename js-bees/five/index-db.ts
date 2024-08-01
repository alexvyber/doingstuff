const indexedDB =
  window.indexedDB ?? window.mozIndexedDB ?? window.webkitIndexedDB ?? window.msIndexedDB ?? window.shimIndexedDB

const request = indexedDB.open("UserProfiles", 1)

request.onupgradeneeded = () => {
  const db = request.result
  const store = db.createObjectStore("User", { keyPath: "id" })
  const index = store.createIndex("NameIdx", ["name", "age"])
}

request.onsuccess = () => {
  const db = request.result
  const tx = db.transaction("User", "readwrite")
  const store = tx.objectStore("User")
  const index = store.index("NameIdx")

  store.put({ id: 1234, name: "Steve", age: 32 })
  store.put({ id: 1235, name: "Peter", age: 34 })

  const getUser = store.get(1234)

  getUser.onsuccess = () => {
    console.log(getUser.result.name) // => "Steve"
  }

  tx.oncomplete = () => {
    db.close()
  }
}

export type {}
