const likeImgElements = document.querySelectorAll('.js-like');

const likeImgFilledUrl = 'https://res.cloudinary.com/intellectfox/image/upload/v1629752958/fe/foxgram/posts/like-filled_zurlii.svg';
const likeImgUrl = 'https://res.cloudinary.com/intellectfox/image/upload/v1629752957/fe/foxgram/posts/like_xw2apm.svg';

likeImgElements.forEach((likeImgEl) => {
    likeImgEl.addEventListener('click', (event) => {
        const LikeCountEl = event.target.parentElement.querySelector('.js-like-count');
        const LikeCount = +LikeCountEl.textContent;
        if (event.target.src === likeImgUrl) {
            event.target.src = likeImgFilledUrl;
            LikeCountEl.textContent = LikeCount + 1;
        } else {
            event.target.src = likeImgUrl;
            LikeCountEl.textContent = LikeCount - 1;
        }
    });
});

