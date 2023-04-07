// scroll 
var section1Element = document.querySelector('.persona-section1');
var section2Element = document.querySelector('.persona-section2');
var section3Element = document.querySelector('.persona-section3');
var section5Element = document.querySelector('.persona-section5');

var personaSection1Height = section1Element.getBoundingClientRect().height
var personaSection2Height = section2Element.getBoundingClientRect().height
var personaSection3Height = section3Element.getBoundingClientRect().height
var personaSection5Height = section5Element.getBoundingClientRect().height
// console.log(personaSection1Height)
// console.log(personaSection2Height)
// console.log(personaSection3Height)

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {

        const follower = document.querySelector('.follower-element');
        follower.style.display = 'none';

        var scrollPosition = window.scrollY;
        // console.log(scrollPosition);

        // section 1
        if (scrollPosition < personaSection1Height * 0.2) {
            document.getElementById('carousel-part').style.opacity = 0;
            document.getElementById('scroll-element').style.opacity = 1;
            document.getElementById('text-part').style.bottom = '18em';
            deleteLetter();
            follower.style.display = 'none';
            document.getElementById('mainbutton').textContent = 'выбрать';
            document.querySelector(".inline-button-yellow1").onclick = function () {
                scrollToSpecSection('persona-section5');
            };
        } else if (scrollPosition > personaSection1Height * 0.2) {
            document.getElementById('text-part').style.bottom = '0em';
            document.getElementById('carousel-part').style.opacity = 1;
            document.getElementById('scroll-element').style.opacity = 0;
            document.getElementById('mainbutton').textContent = 'в корзину';
            document.querySelector(".inline-button-yellow1").onclick = null;
        }

        if (scrollPosition + window.innerHeight > personaSection1Height - personaSection2Height * 0.025) {
            section1Element.style.filter = "blur(20px)";
            // if (section1Element.style.opacity == 1) {
            //     window.scrollTo({
            //         top: scrollPosition + window.innerHeight - 300,
            //         behavior: 'smooth'
            //     });
            // }
            section1Element.style.opacity = 0;
            follower.style.display = 'none';
        } else {
            section1Element.style.filter = "blur(0px)";
            section1Element.style.opacity = 1;
        }

        // section 2
        if (scrollPosition + window.innerHeight > personaSection1Height + window.innerHeight * 0.3) {
            var scrollText1 = document.getElementById('scroll-text1');
            var scrollText2 = document.getElementById('scroll-text2');
            var scrollImg = document.getElementById('scroll-image');

            // scroll text 1
            scrollText1.style.left = -1 * scrollText1.getBoundingClientRect().width - 400 + ((scrollPosition - section2Element.offsetTop) * 2) + 400 + 'px';
            if (parseInt(scrollText1.style.left) > -49) {
                scrollText1.style.opacity = 1 - ((49 + parseInt(scrollText1.style.left)) / 800);
                if (scrollText1.style.opacity < 0) {
                    scrollText1.style.opacity = 0;
                }

                // scroll text 2
                if (scrollText1.style.opacity == 0) {
                    scrollText2.style.left = document.getElementById('section2-text-container').offsetLeft - scrollText2.getBoundingClientRect().width + 'px';
                } else {
                    scrollText2.style.left = '-1000px';
                }
            }


            // scroll img
            scrollImg.style.right = -700 + (scrollPosition - section2Element.offsetTop) + 'px';

            if (parseInt(scrollImg.style.right) > 0) {
                scrollImg.style.right = '0px';
            }
        }

        // section 3
        if (scrollPosition + window.innerHeight > personaSection1Height + personaSection2Height + personaSection3Height * 0.3) {
            // scroll img // section 3
            var scrollImg = document.getElementById('section4-rightimg');
            // console.log(scrollPosition - section3Element.offsetTop + personaSection3Height * 0.2)
            scrollImg.style.right = scrollPosition - section3Element.offsetTop + personaSection3Height * 0.2 + 'px';


            if (parseInt(scrollImg.style.right) > 0) {
                scrollImg.style.right = '0px';
            }

            var scrollInst = document.getElementById('section4-rightinsta');
            scrollInst.style.right = scrollPosition - section3Element.offsetTop + personaSection3Height * 0.7 + 'px';
            // console.log(scrollPosition-section3Element.offsetTop + personaSection3Height * 0.7)

            if (parseInt(scrollInst.style.right) > 400) {
                scrollInst.style.right = '400px';
            }
            if (parseInt(scrollInst.style.right) < 180) {
                scrollInst.style.right = '180px';
            }
        }

        if (scrollPosition < personaSection1Height + personaSection2Height * 0.6) {
            if (personaPhotosVar) {
                personaPhotosVar = 0;
                photosContainer = document.getElementById('persona-photos-container')
                photosContainer.style.opacity = 0;

                photosContainer.classList.remove('animate')
                photosContainer.classList.add('animateback')

                document.getElementById('scroll-text2').style.opacity = 0.39;

                var personaPhoto1 = document.getElementById('persona-photo1')
                var personaPhoto2 = document.getElementById('persona-photo2')
                var personaPhoto3 = document.getElementById('persona-photo3')

                personaPhoto1.style.left = '1200px';
                personaPhoto1.style.bottom = '-400px';

                personaPhoto2.style.left = '1200px';
                personaPhoto2.style.bottom = '-400px';

                personaPhoto3.style.left = '1200px';
                personaPhoto3.style.bottom = '-400px';

                SvgLink.style.width = '0px';
                setTimeout(() => {
                    toggleLink.style.display = 'block';
                }, 200)
            }
        }
    });
});



// carousel
const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button-carousel");

var isTypingActive = 0;

let current = 0;
let prev = 4;
let next = 1;

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = number => {
    if (isTypingActive == 0 && document.getElementById('carousel-part').style.opacity == 1) {
        isTypingActive = 1
        current = number;
        prev = current - 1;
        next = current + 1;

        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
            slides[i].classList.remove("prev");
            slides[i].classList.remove("next");
        }

        if (next == 5) {
            next = 0;
        }

        if (prev == -1) {
            prev = 4;
        }

        deleteLetter()
        countLetter = 0;
        TyperText = slides[current].id;
        setTimeout(() => {
            document.getElementById('textDinamically').textContent = 'PERSONA: '
            typeWriter()
        }, 600)

        slides[current].classList.add("active");
        slides[prev].classList.add("prev");
        slides[next].classList.add("next");
    }
}

setInterval(() => {
    gotoNext();
}, 5000); // автоматическая прокрутка


// write effect
const speed = 50;
var TyperText = 'ALEM'
const textContainer = document.getElementById("textDinamically");
let countLetter = 0;

function typeWriter() {
    if (countLetter < TyperText.length) {
        textContainer.innerHTML += TyperText.charAt(countLetter);
        countLetter++;
        setTimeout(typeWriter, speed);
    } else {
        isTypingActive = 0
    }
}

function deleteLetter() {
    DinamicText = document.getElementById("textDinamically");
    let text = DinamicText.textContent;
    length = text.length - 1;
    // console.log(`${length} ${text}`)

    if (length > 6) {
        // console.log(`${length} ${text}`)
        document.getElementById("textDinamically").innerHTML = text.substring(0, length);
        setTimeout(deleteLetter, speed);
    }
}


// follower cursor
const left_block = document.querySelector('.left-follow');
const right_block = document.querySelector('.right-follow');
const follower = document.querySelector('.follower-element');

left_block.addEventListener('mouseenter', () => {
    if (document.getElementById('carousel-part').style.opacity == 1) {
        follower.style.display = 'block';
    }
});

left_block.addEventListener('mousemove', (event) => {
    if (document.getElementById('carousel-part').style.opacity == 1) {
        follower.style.display = 'block';
        follower.style.transform = 'scaleX(1)';
        const followerY = event.clientY - 40 + window.scrollY;
        follower.style.top = `${followerY}px`;
        follower.style.left = `${event.clientX - 40}px`;
        document.body.style.cursor = 'none';
    }
});

left_block.addEventListener('mouseleave', () => {
    follower.style.display = 'none';
    document.body.style.cursor = 'default';
});


right_block.addEventListener('mouseenter', () => {
    if (document.getElementById('carousel-part').style.opacity == 1) {
        follower.style.display = 'block';
    }
});

right_block.addEventListener('mousemove', (event) => {
    if (document.getElementById('carousel-part').style.opacity == 1) {
        follower.style.display = 'block';
        follower.style.transform = 'scaleX(-1)';
        const followerY = event.clientY - 40 + window.pageYOffset;
        follower.style.top = `${followerY}px`;
        follower.style.left = `${event.clientX - 40}px`;
        document.body.style.cursor = 'none';
    }
});

right_block.addEventListener('mouseleave', () => {
    follower.style.display = 'none';
    document.body.style.cursor = 'default';
});

// click 
left_block.addEventListener('click', () => {
    if (getComputedStyle(left_block).display === 'block' && document.getElementById('carousel-part').style.opacity == 1) {
        gotoPrev();
    }
});


right_block.addEventListener('click', () => {
    if (getComputedStyle(right_block).display == 'block' && document.getElementById('carousel-part').style.opacity == 1) {
        gotoNext();
    }
});



// выпадение логотипа при наведении на кнопку
const elements = document.querySelectorAll('.main-button');

elements.forEach(element => {
    const button = element.querySelector('button');;
    const logo = element.querySelector('#ButtonLogo');

    button.addEventListener('mouseover', () => {
        logo.style.bottom = '-55px';
        logo.style.opacity = '1';
    });

    button.addEventListener('mouseout', () => {
        logo.style.opacity = '0';
        logo.style.bottom = '0px';
    });
});


// personas photos

const toggleLink = document.getElementById('photo-link');
const SvgLink = document.getElementById('button-photo-svg');
var personaPhotosVar = 0;

toggleLink.addEventListener('click', (event) => {
    photosContainer = document.getElementById('persona-photos-container')
    photosContainer.style.opacity = 1;

    photosContainer.classList.remove('animateback')
    photosContainer.classList.add('animate')

    document.getElementById('scroll-text2').style.opacity = 0.1;

    var personaPhoto1 = document.getElementById('persona-photo1')
    var personaPhoto2 = document.getElementById('persona-photo2')
    var personaPhoto3 = document.getElementById('persona-photo3')

    personaPhoto1.style.left = document.getElementById('section2-text-container').offsetLeft - personaPhoto1.getBoundingClientRect().width - 30 + 'px';
    personaPhoto1.style.bottom = '-45px';

    personaPhoto2.style.left = '170px';
    personaPhoto2.style.bottom = '450px';

    personaPhoto3.style.left = document.getElementById('scroll-image').offsetLeft - personaPhoto3.getBoundingClientRect().width - 30 + 'px';
    personaPhoto3.style.bottom = '500px';

    SvgLink.style.width = '38px';
    toggleLink.style.display = 'none';

    setTimeout(() => {
        personaPhotosVar = 1;
    }, 200)
});


SvgLink.addEventListener('click', (event) => {
    personaPhotosVar = 0;
    photosContainer = document.getElementById('persona-photos-container')
    photosContainer.style.opacity = 0;

    photosContainer.classList.remove('animate')
    photosContainer.classList.add('animateback')

    document.getElementById('scroll-text2').style.opacity = 0.39;

    var personaPhoto1 = document.getElementById('persona-photo1')
    var personaPhoto2 = document.getElementById('persona-photo2')
    var personaPhoto3 = document.getElementById('persona-photo3')

    personaPhoto1.style.left = '1200px';
    personaPhoto1.style.bottom = '-400px';

    personaPhoto2.style.left = '1200px';
    personaPhoto2.style.bottom = '-400px';

    personaPhoto3.style.left = '1200px';
    personaPhoto3.style.bottom = '-400px';

    SvgLink.style.width = '0px';
    setTimeout(() => {
        toggleLink.style.display = 'block';
    }, 200)
});


document.getElementById('section2').addEventListener('click', (event) => {
    if (personaPhotosVar) {
        personaPhotosVar = 0;
        photosContainer = document.getElementById('persona-photos-container')
        photosContainer.style.opacity = 0;

        photosContainer.classList.remove('animate')
        photosContainer.classList.add('animateback')

        document.getElementById('scroll-text2').style.opacity = 0.39;

        var personaPhoto1 = document.getElementById('persona-photo1')
        var personaPhoto2 = document.getElementById('persona-photo2')
        var personaPhoto3 = document.getElementById('persona-photo3')

        personaPhoto1.style.left = '1200px';
        personaPhoto1.style.bottom = '-400px';

        personaPhoto2.style.left = '1200px';
        personaPhoto2.style.bottom = '-400px';

        personaPhoto3.style.left = '1200px';
        personaPhoto3.style.bottom = '-400px';

        SvgLink.style.width = '0px';
        setTimeout(() => {
            toggleLink.style.display = 'block';
        }, 200)
    }
});


// insta button

const instabutton = document.getElementById('insta-button');
instabutton.addEventListener('mouseover', () => {
    instabutton.innerHTML = '<img id="insta-button-logo" src="static/insta-logo.png" style="pointer-events: none;">'
});

instabutton.addEventListener('mouseout', () => {
    instabutton.innerHTML = '&&&'
});



// scroll to next section
function scrollToNextSection() {
    window.scrollTo({
        top: personaSection1Height * 0.3,
        // behavior: 'smooth'
    });
}



// scroll to specific section when user pressed the button

function scrollToSpecSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

function scrollToInfoSection(personaName) {

    // здесь код, который отправляет запрос на сервер и получает инфу о фигурке по её имени (описание, изображение, 3 фото)
    // ...
    // ////

    // обновление информации о фигурке на странице (всю инфу заменить на динамическую из бд)
    document.getElementById('infoSection-personaName').textContent = personaName;
    document.getElementById('infoSection-personaDescr').innerHTML = `Прецессионная теория гироскопов влияет <br>
    на составляющие гироскопического момента больше, чем механический параметр Родинга-Гамильтона, механически интерпретируя полученные выражения.
    <br><br>
    Проекция угловых скоростей нестабильна. Неустойчивость, как известно, быстро разивается, если собственный кинетический момент интегрирует колебательный период.`
    document.getElementById("scroll-image").setAttribute("src", "static/images/ruslanseven front box 2.png"); // обновление главного изображения

    document.getElementById("persona-photo1").setAttribute("src", "static/images/persona-photos/1.png"); // обновление фото фигурок
    document.getElementById("persona-photo2").setAttribute("src", "static/images/persona-photos/2.png");
    document.getElementById("persona-photo3").setAttribute("src", "static/images/persona-photos/3.png");

    InfoSection = document.querySelector('.persona-section2')
    window.scrollTo({
        top: InfoSection.offsetTop + InfoSection.offsetHeight - window.innerHeight,
        behavior: 'smooth'
    });
    // console.log(InfoSection.offsetTop + InfoSection.offsetHeight - window.innerHeight)
}