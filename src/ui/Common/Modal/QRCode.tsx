const QRCode = ({ qrCode }: { qrCode: string }) => {
  return (
    <div className="flex justify-center">
      <img src={qrCode} />
    </div>
  )
}

export default QRCode
