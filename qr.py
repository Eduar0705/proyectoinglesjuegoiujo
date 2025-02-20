import qrcode

# El enlace que quieres que el código QR dirija
url = 'https://iujojuegoingles.netlify.app/'

# Crear un objeto QRCode
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)

# Agregar el enlace al objeto QRCode
qr.add_data(url)
qr.make(fit=True)

# Crear una imagen del QR code
img = qr.make_image(fill_color="black", back_color="white")

# Guardar la imagen en un archivo
img.save("codigojuego_qr.png")
