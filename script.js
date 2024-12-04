document.getElementById('downloadForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const videoUrl = document.getElementById('videoUrl').value;
    if (!videoUrl) {
        alert('Please enter a TikTok video URL.');
        return;
    }

    try {
        const response = await fetch(`https://api.tiklydown.eu.org/v2?url=${encodeURIComponent(videoUrl)}`);
        const data = await response.json();

        if (data.status === 'success' && data.download && data.download.noWatermark) {
            document.getElementById('downloadLink').href = data.download.noWatermark;
            document.getElementById('result').classList.remove('hidden');
        } else {
            alert('Failed to fetch the download link. Please check the URL and try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
});