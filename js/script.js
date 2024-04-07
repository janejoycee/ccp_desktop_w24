document.querySelector("#intro_p").addEventListener("click", function () {
    document.querySelector("#intro_p").innerHTML = "Welcome to JJLife, your go-to destination for all things pets, recipes, and travel! Explore a world of captivating content where we cater to your love for furry companions, culinary delights, and globetrotting adventures."
})

document.getElementById('nameInput').addEventListener('input', function () {
    if (nameInput.value.toLowerCase) {
        nameInput.style.backgroundColor = 'lightgreen';
    } else {
        nameInput.style.backgroundColor = '';
    }
});

function addHoverEffect(element) {
    element.classList.add('hover-effect');
}

function removeHoverEffect(element) {
    element.classList.remove('hover-effect');
}

const images = document.querySelectorAll('.index_photos img');

images.forEach(function(image) {
    image.addEventListener('mouseover', function() {
        addHoverEffect(image);
    });

    image.addEventListener('mouseout', function() {
        removeHoverEffect(image);
    });
});


