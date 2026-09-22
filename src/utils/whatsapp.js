import { BUSINESS_INFO } from '../data/catalog';

/**
 * Generate a clean WhatsApp URL
 * @param {string} text - Message text
 * @returns {string} wa.me URL
 */
export function createWhatsAppUrl(text) {
  const cleanPhone = BUSINESS_INFO.whatsappNumber.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(text.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

/**
 * Generate WhatsApp message for a specific product
 */
export function generateProductInquiry(product, customNotes = '') {
  const text = `Hi Yukti!
I was exploring your website and loved this creation:

* Product: ${product.title}
* Starting Price: ${product.formattedPrice}
* Dimensions: ${product.dimensions}
${customNotes ? `* My Preference/Notes: ${customNotes}\n` : ''}
Could you please share more details and how we can personalize this for me?`;

  return createWhatsAppUrl(text);
}

export function generateCustomOrderMessage(orderData) {
  const referenceText = orderData.hasReferenceImage
    ? `* Reference Photo: Yes (${orderData.referenceImageName || 'Reference image'} - Attaching photo right below this message!)`
    : `* Reference Photo: None / Discussing in chat`;

  const text = `Hi Yukti! I would love to place a *Custom Order* with HandiCrafts by Yukti:

* CUSTOM ORDER INQUIRY *
------------------------------------
* Product Type: ${orderData.productType || 'Custom Piece'}
* Occasion: ${orderData.occasion || 'Special Celebration'}
* Style / Shape: ${orderData.shape || 'Standard'}
* Custom Names/Text: ${orderData.names || 'To be shared'}
* Date / Quote: ${orderData.dateOrQuote || 'N/A'}
* Color Palette: ${orderData.palette || 'Artist Choice'}
* Preferred Budget: ${orderData.budget || 'Open for recommendation'}
* Customer Name: ${orderData.customerName || 'Customer'}
* Customer Contact: ${orderData.whatsappNumber || 'This WhatsApp number'}
${referenceText}
------------------------------------
Looking forward to discussing the design and finalizing with you!`;

  return createWhatsAppUrl(text);
}
