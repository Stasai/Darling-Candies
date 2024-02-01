document.getElementById('contactForm').addEventListener('submit', function(event) {

    const isSuccess = true;

    const resultMessage = document.getElementById('resultMessage');

    if (isSuccess) {
      resultMessage.textContent = 'Form submitted successfully!';
      resultMessage.classList.add('text-green-600')
    } else {
      resultMessage.textContent = 'Form submission failed. Please try again later.';
      resultMessage.classList.add('text-red-600')
    }

    resultMessage.classList.remove('hidden');

    setTimeout(function() {
        resultMessage.classList.add('hidden');
      }, 3000);
  });