createStars(); // This will create the stars as soon as the page loads

document.getElementById('toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    document.body.classList.toggle('dark-mode');
});

document.getElementById('search-bar').addEventListener('input', function(e) {
    var input = e.target.value.toLowerCase();
    var sections = document.getElementsByClassName('section');

    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var heading = section.getElementsByClassName('section-heading')[0].innerText.toLowerCase();
        var content = section.getElementsByClassName('section-content')[0].innerText.toLowerCase();
        var heading = section.getElementsByClassName('section-heading1')[0].innerText.toLowerCase();
        if (heading.includes(input) || content.includes(input)) {
            section.style.display = '';
        } else {
            section.style.display = 'none';
        }
    }
});

function createStars() {
    for (var i = 0; i < 2000; i++) {
        var star = document.createElement('div');
        star.className = 'star';
        var left = Math.random() * 500;
        var top = Math.random() * 500;
        star.style.left = left + '%';
        star.style.top = top + '%';
        document.body.appendChild(star);
    }
}

function removeStars() {
    var stars = document.querySelectorAll('.star');
    stars.forEach(function(star) {
        star.remove();
    });
}
