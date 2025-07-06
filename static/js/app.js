// Get the file input element
const fileInput = document.querySelector('input[type="file"]');
const selectImageBtn = document.querySelector('.select-image');
const previewImg = document.getElementById('previewImg');
const loadingSpinner = document.getElementById('loading-spinner');

// Add an event listener for when the file input changes
fileInput.addEventListener('change', function () {
    const file = fileInput.files[0];

    // Check if a file is selected
    if (file) {
        const fileType = file.type;

        // Validate the file type
        if (!fileType.startsWith('image/')) {
            alert('Please upload a valid image file.');
            fileInput.value = ''; // Clear the input
        } else {
            const reader = new FileReader();
            reader.onload = function (event) {
                previewImg.src = event.target.result;
                previewImg.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    }
});

// Scroll to upload section
function scrollToUpload() {
    const uploadSection = document.querySelector('.upload-container');
    uploadSection.scrollIntoView({ behavior: 'smooth' });
}