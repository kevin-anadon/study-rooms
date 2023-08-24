import * as socketIO from "socket.io"

export const socketsConfig = (io: socketIO.Server) => {
  io.on('connection', socket => {
    console.log('socket connected')
    // Inside here goes host and guests
    socket.on('join-room', (roomId: string, userName: string) => {
      console.log('user connected to room ', roomId, userName)
      // TODO:
      // socket.join(roomId)
      // socket.to(roomId).emit('user joined ', userName)
      socket.on('disconnect', () => {
        console.log('user disconnected');
      })
    })
  })
}