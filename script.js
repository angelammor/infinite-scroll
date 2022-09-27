// Unsplash API
const count = 10;
const query = 'autumn';
const apiKey = 'kYD2J5iM86odFzWHDCrwKKAHn23v-oyG-t27Rs4Ikd4';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&query=${query}`;

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Catch Error Here
    }
}

// On Load
getPhotos();