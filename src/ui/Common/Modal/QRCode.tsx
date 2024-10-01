const QRCode = ({ qrCode }: { qrCode: string }) => {
  return (
    <div>
      <img src={qrCode} />
    </div>
  )
}

export default QRCode
