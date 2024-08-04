document.addEventListener("DOMContentLoaded", function(){
    const gif = document.querySelector('.gif');
    const staticImage = document.querySelector('.static');
    const gifDuration = 3000;
    const pauseDuration = 1000;

    function toggleGif(){
        gif.classList.add('hidden');
        staticImage.classList.remove('hidden');
        setTimeout(()=> {
            gif.classList.remove('hidden');
            staticImage.classList.add('hidden');
            setTimeout(toggleGif, gifDuration);
        }, pauseDuration); 
    }
    setTimeout(toggleGif, gifDuration);
});