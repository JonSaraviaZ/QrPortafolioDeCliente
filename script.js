  // URL del sitio web que quieres convertir en código QR
  const url = "https://portafolioisabelgonzalez.vercel.app";

  // Generar el código QR en el contenedor
  new QRCode(document.getElementById("qrcode"), {
    text: url,
    width: 250,      // Ancho del código QR
    height: 250,     // Alto del código QR
    colorDark: "#000000", // Color del QR
    colorLight: "#ffffff", // Color de fondo del QR
    correctLevel: QRCode.CorrectLevel.H
  });