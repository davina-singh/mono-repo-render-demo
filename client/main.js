
const container = document.getElementById("app")

async function fetchImages() {
  const data = await fetch(`${import.meta.env.VITE_server}/images`)
  const result = await data.json()
  console.log(result)
  return result 
}
 async function makeImages() {

const images = await fetchImages()
console.log(images)
images.forEach(element => {
  let image = document.createElement("img")
  image.src = element.image
  document.body.appendChild(image)
});
 }

 makeImages()