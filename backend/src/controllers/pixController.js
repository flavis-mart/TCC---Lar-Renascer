const qrcode = require('qrcode');

const gerarPix = async (req, res) => {
  try {
    const payloadPix = "00020126580014br.gov.bcb.pix0136123e4567-e89b-12d3-a456-4266554400005204000053039865802BR5913Lar Renascer6009Joinville62070503***6304ABCD";
    const qrCodeImage = await qrcode.toDataURL(payloadPix);

    res.json({
      copia_e_cola: payloadPix,
      qr_code_base64: qrCodeImage
    });
  } catch (error) {
    console.error('Erro ao gerar QR Code:', error);
    res.status(500).json({ erro: 'Erro interno ao gerar o PIX.' });
  }
};

module.exports = { gerarPix };