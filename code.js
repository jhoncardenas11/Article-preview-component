const shareBtn = document.getElementById('shareBtn');

shareBtn.addEventListener('click', showSharedBox);

function showSharedBox(e) {
    e.preventDefault();
    const floatBox = document.getElementById('floatBox');
    if (floatBox.style.visibility === 'hidden') {
        floatBox.classList.add('fade');
        floatBox.classList.remove('fadeOut');
        floatBox.style.visibility = "visible";
    } else {
        floatBox.classList.add('fadeOut');
        setTimeout(() => {
            floatBox.style.visibility = "hidden";
        }, 1000);
    }
}