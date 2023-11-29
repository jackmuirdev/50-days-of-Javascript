function displayVideoAndTitle(videoUrl, title) {
 const videoContainer = document.getElementById('video-container');
 const videoElement = document.createElement('video');
 videoElement.src = videoUrl;
 videoElement.controls = true;
 videoElement.style.width = '1000px';
 videoElement.style.maxWidth = '100%';

 const titleElement = document.createElement('h2');
 titleElement.textContent = title;

 // Create a container div for consistent styling
 const containerDiv = document.createElement('div');
 containerDiv.appendChild(titleElement);
 containerDiv.appendChild(videoElement);

 // Clear the video container and append the container div
 videoContainer.innerHTML = '';
 videoContainer.appendChild(containerDiv);
}

function uploadVideo() {
 const fileInput = document.getElementById('video-file');
 const titleInput = document.getElementById('video-title');

 if (fileInput.files.length > 0) {
   const videoUrl = URL.createObjectURL(fileInput.files[0]);

   // Save the video URL and title to local storage
   localStorage.setItem('videoUrl', videoUrl);
   localStorage.setItem('videoTitle', titleInput.value);

   // Display video and title
   displayVideoAndTitle(videoUrl, titleInput.value);
 }
}

function loadVideoFromLocalStorage() {
 const storedVideoUrl = localStorage.getItem('videoUrl');
 const storedVideoTitle = localStorage.getItem('videoTitle');

 if (storedVideoUrl) {
   // Display video and title from local storage
   displayVideoAndTitle(storedVideoUrl, storedVideoTitle);
 }
}

function deleteVideo() {
 // Remove the video URL and title from local storage
 localStorage.removeItem('videoUrl');
 localStorage.removeItem('videoTitle');

 const videoContainer = document.getElementById('video-container');
 videoContainer.innerHTML = '';
}

// Load the video from local storage when the page is initially loaded
window.onload = function () {
 loadVideoFromLocalStorage();
};
