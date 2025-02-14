import axios from 'axios'

const imgBbApi = axios.create({
  baseURL: '',
  method: 'POST',
  headers: {
    Accept: 'application/json, text/plain, /',
    'Content-Type': 'multipart/form-data',
  },
})

export const uploadImages = async (file: string) => {
  const regex = /data:.*base64,/
  const newFile = file.replace(regex, '')
  const body = new FormData()
  body.append('image', newFile)

  const { data } = await imgBbApi.post(
    'https://api.imgbb.com/1/upload?expiration=15552000&key=202ae6648eb74c94ba90f9efa6923918',
    body,
    {
      headers: {
        Accept: 'application/json, text/plain, /',
        'Content-Type': 'multipart/form-data',
      },
    },
  )

  return data
}
