function newImage(url){
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'absolute'
    document.body.append(image)
    return image
}

// Need to add something to fix background tile
// function backgroundImage(url){
//     let image = document.createElement('img')
//     image.src = url
//     image.style.zIndex = -1
//     document.body.append(image)
//     return image
// }
