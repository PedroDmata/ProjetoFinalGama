module.exports = (req: { ip: any; originalUrl: any }, res: any, next: () => void) => {
  console.log(`O IP: ${req.ip} acessou a rota: ${req.originalUrl}`)
  next()
}
