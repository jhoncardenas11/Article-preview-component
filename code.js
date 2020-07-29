const shareBtn = document.getElementById('shareBtn');

shareBtn.addEventListener('click', showSharedBox);

function showSharedBox(e) {
    e.preventDefault();
    const floatBox = document.getElementById('floatBox');
    if (floatBox.style.visibility === 'hidden') {
        floatBox.style.visibility = "visible";
    } else {
        floatBox.style.visibility = "hidden";
    }
}