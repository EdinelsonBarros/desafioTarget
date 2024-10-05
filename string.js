text = "Viveram felizes para sempre"
vezes = text.match(/a/ig)

if(vezes.length != null){
      console.log(`A letra "a" ocorre no texto ${vezes.length} vezes`)
} else {
      console.log("A letra A não está presente no texto.")
}