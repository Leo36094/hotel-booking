import axios from 'axios'
const token = 'bD7lK8YA1T5qoNH5QgzjVABESRekdmnW0IKajmX90NhEsYxxlmSnPV95lQeo'
// Room api

const roomRequest = axios.create({
  baseURL: 'https://challenge.thef2e.com/api',
  headers: {
    Authorization: `Bearer ${token}`,
    accept: 'application/json '
  }
})

export const roomListApi = data => roomRequest.get('/thef2e2019/stage6/rooms')
export const roomDetailApi = data => roomRequest.get(`/thef2e2019/stage6/room/${data}`)
export const bookRoomApi = data => roomRequest.post('/thef2e2019/stage6/room',data)
export const deleteBookApi = data =>
  roomRequest.delete('/thef2e2019/stage6/rooms', data)
