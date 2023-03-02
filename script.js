
const projectsContainer = document.querySelector('.projects-container');


//NAVIGATION BAR- to underline the current section in pink
var navLinks = document.querySelectorAll('.menu-item a');
const sections = document.querySelectorAll('section');


document.addEventListener("scroll", function() {
    // Get the current scroll position
    var currentScroll = window.pageYOffset;

    // Loop through all the sections
    for (var i = 0; i < sections.length; i++) {
        // Get the top and bottom positions of the section
        var top = sections[i].offsetTop;
        var bottom = top + sections[i].offsetHeight;

        // Check if the current scroll position is within the section
        if (currentScroll >= top && currentScroll < bottom) {
            // Get the id of the section
            var id = sections[i].id;

            // Loop through all the navbar links
            for (var j = 0; j < navLinks.length; j++) {
                // Remove the active class from all the links
                navLinks[j].classList.remove("active");

                // Check if the link's href matches the id of the section
                if (navLinks[j].getAttribute("href") == "#" + id) {
                    // Add the active class to the link
                    navLinks[j].classList.add("active");
                }

            }

        }
    }
});



//MODAL

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var surpriseBtn = document.querySelector('.dogbtn');
var dogPic = document.querySelector('.dogPic');
var dogTitle = document.querySelector('.modal-title');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
    console.log("click")

    surpriseBtn.addEventListener('click', () => {
        //fetch dog pics API
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                dogPic.src = data.message;
                dogTitle.innerHTML = "Isn't this dog cuteee?";
                surpriseBtn.innerHTML = "Another one?";
            })
            .catch(error => {
                // handle errors here
            });
    })

}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}