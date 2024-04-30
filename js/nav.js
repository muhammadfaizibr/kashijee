// #################### RESPONSIVE NAVBAR #################### -->
const mobile_nav = document.querySelector('.mobile-nav-btn');
const nav = document.querySelector('.nav');
const toggleNabar = () => {
    nav.classList.toggle('mob-nav-active')
};

mobile_nav.addEventListener('click', () => toggleNabar());

// #################### STICKY NAVBAR #################### -->
const stickyNabar = () => {
    nav.classList.toggle('sticky', window.scrollY > 10)
}

window.addEventListener('scroll', () => stickyNabar());

// #################### SEARCH BAR #################### -->
const search_bar = document.querySelector('.search-bar')
const search_outside_container = document.querySelector('.search-outside-container')
const search_close = document.querySelector('#search-close')

const displaySearchBar = () => {
    search_outside_container.style.visibility = 'visible' 
    search_bar.classList.add('search-bar-active')
}

const hideSearchBar = () => {
    search_outside_container.style.visibility = 'hidden' 
    search_bar.classList.remove('search-bar-active')
}
const search_btn = document.querySelector('#search-btn');
search_btn.addEventListener('click', () => displaySearchBar());
search_close.addEventListener('click', () => hideSearchBar());
