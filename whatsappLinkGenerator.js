// Function to generate WhatsApp link
function generateLink() {
  let countryCode = document.getElementById('countryCode').value;
  let phoneNumber = document.getElementById('phoneNumber').value;
  let message = encodeURIComponent(document.getElementById('message').value);

  // Constructing the WhatsApp link with the country code and phone number
  let whatsappLink = `https://wa.me/${countryCode}${phoneNumber}?text=${message}`;

  // Display the generated link
  document.getElementById('generatedLink').innerText = whatsappLink;
}

document.getElementById('countryCode').addEventListener('input', generateLink);
document.getElementById('phoneNumber').addEventListener('input', generateLink);
document.getElementById('message').addEventListener('input', generateLink);

// Function to open WhatsApp in a new tab
function openWhatsApp() {
  let countryCode = document.getElementById('countryCode').value;
  let phoneNumber = document.getElementById('phoneNumber').value;
  let message = encodeURIComponent(document.getElementById('message').value);

  // Constructing the WhatsApp link with the country code and phone number
  let whatsappLink = `https://wa.me/${countryCode}${phoneNumber}?text=${message}`;

  // Open WhatsApp link in a new tab
  window.open(whatsappLink);
}

// Function to copy generated link to clipboard
function copyLink() {
  let generatedLink = document.getElementById('generatedLink');

  // Creating a temporary textarea to copy text to clipboard
  let textarea = document.createElement('textarea');
  textarea.value = generatedLink.innerText;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);

  alert('Link copied to clipboard!');
}
