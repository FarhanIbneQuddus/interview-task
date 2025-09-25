// product thumbnail
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('mainImage');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    // remove
    thumbnails.forEach(thumb => thumb.classList.remove('active'));

    // add
    thumbnail.classList.add('active');

    // update
    const bgImage = thumbnail.style.backgroundImage;
    mainImage.style.backgroundImage = bgImage;
  });
});

// dropdown
const dropdownItems = document.querySelectorAll('.dropdown-item');
dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
        const arrow = item.querySelector('.dropdown-arrow');
        arrow.style.transform = arrow.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
    });
});

// shop now button 
const shopNowBtn = document.querySelector('.shop-now-btn');
shopNowBtn.addEventListener('click', () => {
    document.querySelector('.product-section').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

