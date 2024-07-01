document.addEventListener('DOMContentLoaded', () => {
    const collageContainer = document.querySelector('.collage-container');
    const collageImages = document.querySelectorAll('.collage-image');
    const titleContainer = document.querySelector('.title-container');
    const enterPrompt = document.querySelector('.enter-prompt');
    const scrollIcon = document.querySelector('.scroll-icon');

    // Fade in collage images from left to right
    collageImages.forEach((image, index) => {
        setTimeout(() => {
            image.style.opacity = '1';
        }, index * 2000);
    });

    // Start moving the collage after all images have faded in
    setTimeout(() => {
        collageContainer.style.transform = 'translateX(-66.66%)';
    }, 6000);

    // Fade in title
    setTimeout(() => {
        titleContainer.style.opacity = '1';
        titleContainer.style.transform = 'translateY(0)';
    }, 7000);

    // Fade in enter prompt and scroll icon
    setTimeout(() => {
        enterPrompt.style.opacity = '1';
        enterPrompt.style.transform = 'translateY(0)';
    }, 9000);

    setTimeout(() => {
        scrollIcon.style.opacity = '1';
    }, 9500);

    // Enter the memorial
    const enterMemorial = () => {
        // Add your navigation logic here
        console.log('Entering the memorial');
    };

    // Event listeners for entering the memorial
    window.addEventListener('scroll', enterMemorial, { once: true });
    document.addEventListener('click', enterMemorial, { once: true });
});