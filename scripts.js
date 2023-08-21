const apiKey = 'AIzaSyBhbkOrguHeQUPXzTTuD-i2bEFnO_XCqUU';
const youtubeAPIUrl = 'https://www.googleapis.com/youtube/v3/search';


function displayResult(list) {
    const container = document.getElementById('results');

    console.log(list);

    list.forEach(item => {
            container.innerHTML += `
            <li class="list-group-item">
                <div class="item-wrapper">
                    <img src="${item.snippet.thumbnails.high.url}">
                    <div>
                        <a href="https://youtube.com/watch?v=${item.id.kind === 'youtube#video' ? item.id.videoId : item.id.channelId}">${item.snippet.title}</a>
                        <p>${item.snippet.description}</p>
                    </div>
                </div>
            </li>
        `;
    });
}

document.getElementsByTagName

const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const query = document.getElementById('searchQuery').value;
    const url = `${youtubeAPIUrl}?part=snippet&q=${query}&key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(result => displayResult(result.items))
});