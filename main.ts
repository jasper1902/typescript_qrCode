import * as qr from "qrcode";
import * as fs from "fs";

async function generateQRCode(data: string, outputPath: string): Promise<void> {
  try {
    const qrCode = await qr.toDataURL(data);
    const qrCodeImage = qrCode.split(",")[1];

    fs.writeFileSync(outputPath, Buffer.from(qrCodeImage, "base64"));

    console.log(`QR code generated and saved to ${outputPath}`);
  } catch (error) {
    console.error("Error generating QR code:", error);
  }
}

try {
  const dataToEncode = String(process.argv[2]);
  const outputImagePath = "qrcode.png";
  generateQRCode(dataToEncode, outputImagePath);
} catch (error) {
  console.log("Error generating QR code:", error);
}
