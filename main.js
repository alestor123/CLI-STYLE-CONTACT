var media = ['https://github.com/alestor123','https://twitter.com/alestor123','https://dev.to/alestor123']
var mn = document.getElementById("input")
mn.addEventListener("input", e => {
    const keywords = media.map(ur => new URL(ur).host.split('.')[0])
    const url = media[keywords.indexOf(document.querySelector('[contenteditable]').textContent)]
    if(url) {
    window.open(url)
    mn.innerHTML = ''
    }
}, false);