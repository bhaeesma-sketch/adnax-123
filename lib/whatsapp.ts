/**
 * WhatsApp Business Integration
 * Generates pre-filled WhatsApp messages for equipment enquiries
 */

export const WHATSAPP_NUMBER = '+968XXXXXXXXX'; // Replace with actual WhatsApp Business number

export function generateWhatsAppUrl(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
}

export function generateEquipmentEnquiryMessage(equipmentName: string): string {
  return `Hello ADNEX, I'm interested in ${equipmentName}. Please share details.`;
}

export function generateGeneralEnquiryMessage(): string {
  return `Hello ADNEX, I would like to inquire about your heavy equipment and services.`;
}
