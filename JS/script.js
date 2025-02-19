function toggleNav() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');

    const currentZIndex = getComputedStyle(navLinks).zIndex;
    if (currentZIndex === '-1') {
        navLinks.style.zIndex = '1';
    } else {
        navLinks.style.zIndex = '-1';
    }
}

function morereview(){
    const review = document.getElementById('client-reviews');
    const btn = document.getElementById("more-btn");
    if(btn.innerText === "more"){
        review.style.height = 'auto';
        btn.innerText = "less";
    }
    else{
        review.style.height = '700px';
        btn.innerText = "more";
    }
}








