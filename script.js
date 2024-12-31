function triggerFileInput(type) {
  document.getElementById(`${type}Upload`).click();
}

function handleFileUpload(type) {
  const fileInput = document.getElementById(`${type}Upload`);
  const tickIcon = document.getElementById(`${type}Check`);
  const eyeIcon = document.getElementById(`${type}EyeIcon`);
  const uploadIcon = document.getElementById(`${type}UploadIcon`);

  if (fileInput.files.length > 0) {
    tickIcon.classList.remove("hidden");
    eyeIcon.classList.remove("hidden");
    uploadIcon.classList.add("hidden");
  }
}

function openModal(type) {
  const modalImage = document.getElementById("modalImage");
  const fileInput = document.getElementById(`${type}Upload`);
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      modalImage.src = e.target.result;
      document.getElementById("my_modal_6").checked = true;
    };
    reader.readAsDataURL(file);
  }
}

function removeImage() {
  const modal = document.getElementById("my_modal_6");
  modal.checked = false;

  // Reset Aadhaar
  const aadhaarInput = document.getElementById("aadhaarUpload");
  aadhaarInput.value = "";
  document.getElementById("aadhaarCheck").classList.add("hidden");
  document.getElementById("aadhaarEyeIcon").classList.add("hidden");
  document.getElementById("aadhaarUploadIcon").classList.remove("hidden");

  // Reset PAN
  const panInput = document.getElementById("panUpload");
  panInput.value = "";
  document.getElementById("panCheck").classList.add("hidden");
  document.getElementById("panEyeIcon").classList.add("hidden");
  document.getElementById("panUploadIcon").classList.remove("hidden");
}

// form validation
const genderButtons = document.querySelectorAll('.gender-btn');
    genderButtons.forEach(button => {
      button.addEventListener('click', function() {
        genderButtons.forEach(b => b.classList.remove('bg-primary')); 
        this.classList.add('bg-primary'); 
      });
    });

    // Marital status selection logic
    const maritalButtons = document.querySelectorAll('.marital-btn');
    maritalButtons.forEach(button => {
      button.addEventListener('click', function() {
        maritalButtons.forEach(b => b.classList.remove('bg-primary')); 
        this.classList.add('bg-primary'); 
      });
    });

// Prevent invalid input and ensure only letters and spaces for name fields
function validateTextInput(event) {
  const char = String.fromCharCode(event.which || event.keyCode);
  const regex = /^[A-Za-z\s]$/;
  if (!regex.test(char)) {
    event.preventDefault();
  }
}

// Attach text input validation to relevant fields
const textFields = document.querySelectorAll('.validate');
textFields.forEach(field => {
  field.addEventListener('keypress', validateTextInput);
});

// Aadhaar number validation (4 digits only)
const aadhaarField = document.getElementById('aadhaar');
const aadhaarError = document.getElementById('aadhaarError');

aadhaarField.addEventListener('input', function(event) {
  const value = event.target.value;

  // Allow only digits and limit the length to 4
  if (!/^\d{0,4}$/.test(value)) {
    event.target.value = value.replace(/[^0-9]/g, ''); // Remove any non-digit characters
  }

  // Show error message if value is not exactly 4 digits
  if (value.length === 4 && /^\d{4}$/.test(value)) {
    aadhaarError.classList.add('hidden'); // Hide error if it's valid
  } else {
    aadhaarError.classList.remove('hidden'); // Show error if it's invalid
  }
});

//pan vlidate
const panField = document.getElementById('pan');
const panError = document.getElementById('panError');

panField.addEventListener('input', function(event) {
  const value = event.target.value;
  const regex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;  // PAN format: 5 letters + 4 digits + 1 letter
  if (!regex.test(value)) {
    panError.classList.remove('hidden'); // Show error message
    event.target.setCustomValidity('Invalid PAN number. It should follow the format: XXXXX1234X');
  } else {
    panError.classList.add('hidden'); // Hide error message
    event.target.setCustomValidity(''); // Clear custom validation message
  }
});


// Form submission logic
document.getElementById('formValidation').addEventListener('submit', function(event) {
  event.preventDefault();

  // Perform your form submission logic here
  alert('Form is successfully validated and submitted!');
});