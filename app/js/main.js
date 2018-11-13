let asideCategory = () => {
    let el = document.querySelectorAll('.chose-category');
    el.forEach((item) => {
        item.addEventListener('click', () => {
            item.classList.toggle('active')
        })
    })
};
asideCategory();
