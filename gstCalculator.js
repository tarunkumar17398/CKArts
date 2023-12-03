
// Function to calculate GST
  function calculate() {
    // Get user input values
    let amount = parseFloat(document.getElementById('amount').value);
    let gstOption = document.querySelector('input[name="gstOption"]:checked').value;
    let gstSlab = parseFloat(document.getElementById('gstSlab').value);
  
    // Calculate GST based on user input
    let gst = 0;
    let subtotal = 0;
    let sgst = 0;
    let cgst = 0;
    let igst = 0;
    let grandTotal = 0;
    let roundedGrandTotalValue = 0;
    let roundoff = 0;
    let sgstPercent = '';
    let cgstPercent = '';
    let igstPercent = '';
  
    if (gstOption === 'inclusive') {
      subtotal = amount / ((100 + gstSlab) / 100);
      gst = amount - subtotal;
    } else {
      gst = (amount * gstSlab) / 100;
      subtotal = amount;
    }
  
    sgst = gst / 2;
    cgst = gst / 2;
    igst = gst;

    roundedGrandTotalValue = subtotal + gst;
    roundedGrandTotal = Math.round(roundedGrandTotalValue);
    roundoff= roundedGrandTotal - roundedGrandTotalValue;

  
    grandTotal = subtotal + gst;

   let amountInWords1 = convertAmountToWords(roundedGrandTotal);

   // Function to convert numerical amount to words
   function convertAmountToWords(amount1) {
    const unitsArray = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tensArray = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    const formatNumber = (number) => {
      if (number < 20) {
          return unitsArray[number];
      } else if (number < 100) {
          return tensArray[Math.floor(number / 10)] + ' ' + unitsArray[number % 10];
      } else if (number < 1000) {
          return unitsArray[Math.floor(number / 100)] + ' Hundred ' + formatNumber(number % 100);
      } else if (number < 100000) {
          return formatNumber(Math.floor(number / 1000)) + ' Thousand ' + formatNumber(number % 1000);
      } else if (number < 10000000) {
          return formatNumber(Math.floor(number / 100000)) + ' Lakh ' + formatNumber(number % 100000);
      } else {
          return formatNumber(Math.floor(number / 10000000)) + ' Crore ' + formatNumber(number % 10000000);
      }
  };
  

    const formattedAmount = parseFloat(amount1).toFixed(2);
    const rupees = Math.floor(formattedAmount);
    const paise = Math.round((formattedAmount - rupees) * 100);

    const rupeesInWords = formatNumber(rupees);
    const paiseInWords = formatNumber(paise);

    let amountInWords = rupeesInWords + ' Rupees';
    if (paise > 0) {
        amountInWords += ' and ' + paiseInWords + ' Paise';
    }

    return amountInWords;
 }

 

 
  // Display results
    document.getElementById('subtotal').innerText = '₹ ' + subtotal.toFixed(2);
    document.getElementById('sgstPercent').innerText = (gstSlab / 2) + '%';
    document.getElementById('cgstPercent').innerText = (gstSlab / 2) + '%';
    document.getElementById('igstPercent').innerText = gstSlab + '%';
    document.getElementById('sgst').innerText = '₹ ' +sgst.toFixed(2);
    document.getElementById('cgst').innerText = '₹ ' +cgst.toFixed(2);
    document.getElementById('igst').innerText = '₹ ' +igst.toFixed(2);
    document.getElementById('roundoff').innerText = '₹ ' + roundoff.toFixed(2);
    document.getElementById('grandTotal').innerText = '₹ ' +roundedGrandTotal.toFixed(2);
    document.getElementById('amountInWords').textContent = amountInWords1;

    openPopupResult();

}

  
  
  
  // Function to reset all fields
function reset() {
  document.getElementById('amount').value = '';
  document.querySelector('input[name="gstOption"]:checked').checked = false;
  document.getElementById('subtotal').innerText = '';
  document.getElementById('sgstPercent').innerText = '';
  document.getElementById('cgstPercent').innerText = '';
  document.getElementById('igstPercent').innerText = '';
  document.getElementById('sgst').innerText = ''; // Reset SGST
  document.getElementById('cgst').innerText = ''; // Reset CGST
  document.getElementById('igst').innerText = ''; // Reset IGST
  document.getElementById('grandTotal').innerText = ''; // Reset Grand Total
  document.getElementById('amountInWords').innerText = ''; // Reset Amount in Words
}



function openPopupResult() {
  document.getElementById('popupResultContainer').style.display = 'block';
}

function closePopupResult() {
  document.getElementById('popupResultContainer').style.display = 'none';
}


  