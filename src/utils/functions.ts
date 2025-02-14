export const toArrayLiteral = (arr: string[]) =>
  JSON.stringify(arr).replace('[', '{').replace(']', '}')

export function convertImageToBase64(imgUrl, callback) {
  const image = new Image()

  const base64regex =
    /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/

  if (base64regex.test(imgUrl)) {
    image.src = imgUrl
  } else {
    image.crossOrigin = 'anonymous'
    image.onload = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      canvas.height = image.naturalHeight
      canvas.width = image.naturalWidth
      ctx?.drawImage(image, 0, 0)
      const dataUrl = canvas.toDataURL()
      callback?.(dataUrl)
    }
    image.src = imgUrl
  }
}

export async function convertBase64(file) {
  return await new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.onload = () => {
      resolve(fileReader.result)
    }

    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}
