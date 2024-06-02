async function shortenURL() {
    var urlInput = document.getElementById("urlInput").value;
    
    if (!urlInput) {
        alert("Please enter a URL");
        return;
    }

    try {
        var response = await fetch('https://tinyurl.com/api-create.php?url=' + encodeURIComponent(urlInput));
        var shortenedURL = await response.text();

        document.getElementById("shortenedURL").innerHTML = shortenedURL;
        document.getElementById("shortenedURL").href = shortenedURL;
        document.getElementById("result").style.display = "";
    } catch (error) {
        console.error('Error shortening URL:', error);
    }
}

function copyToClipboard() {
    var copyText = document.getElementById("shortenedURL");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.href;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    document.body.removeChild(textArea);
    alert("Copied to clipboard!");
}