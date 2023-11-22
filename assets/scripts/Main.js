document.addEventListener('DOMContentLoaded', () => {
    let sliderLineReviews = document.querySelector('.slider_line_reviews');
    let reviewBlock = document.querySelectorAll('.review_block');
    let xSliderReviews = 0;
    let oneRewiewWidth = reviewBlock[0].clientWidth;
    let allRewiewWidth = reviewBlock.length * reviewBlock[0].clientWidth;

    setInterval(() => {
        if (getComputedStyle(reviewBlock[0]).minWidth != '100%') {
            xSliderReviews <= (-allRewiewWidth + (oneRewiewWidth * 3)) ? xSliderReviews = 0 : xSliderReviews -= oneRewiewWidth;
            sliderLineReviews.style.left = `${xSliderReviews}px`;
        } else {
            xSliderReviews <= -allRewiewWidth + oneRewiewWidth ? xSliderReviews = 0 : xSliderReviews -= oneRewiewWidth;
            sliderLineReviews.style.left = `${xSliderReviews}px`;
        }
    }, 2500);

    window.addEventListener('resize', () => {
        xSliderReviews = 0;
        oneRewiewWidth = reviewBlock[0].clientWidth;
        allRewiewWidth = reviewBlock.length * reviewBlock[0].clientWidth;
    });

    let hamb = document.querySelector('.hamb');
    let headerPhone = document.querySelector('.header_phone');
    const form = document.querySelector('form');
    const closeForm = document.querySelector('.close_form');

    hamb.addEventListener('click', () => {
        if (getComputedStyle(hamb).top == '25px') {
            hamb.style.top = `${headerPhone.clientHeight + 25}px`;
            hamb.style.position = `fixed`;
            headerPhone.classList.add('header_phone_an');
        } else {
            hamb.style.top = `25px`;
            headerPhone.classList.remove('header_phone_an');
            hamb.style.position = `absolute`;
        }
    });

    let navLi = document.querySelectorAll('.li-nav');

    navLi[0].addEventListener('click', () => {
        let block = document.querySelector(".intro");
        block.scrollIntoView({ behavior: "smooth" });
    });

    navLi[1].addEventListener('click', () => {
        let block = document.querySelector(".premium");
        block.scrollIntoView({ behavior: "smooth" });
    });

    navLi[2].addEventListener('click', () => {
        let block = document.querySelector(".menu");
        block.scrollIntoView({ behavior: "smooth" });
    });

    navLi[3].addEventListener('click', () => {
        form.style.display = `flex`;
    });

    let navLiPhone = document.querySelectorAll('.li_nav_phone');

    navLiPhone[0].addEventListener('click', () => {
        headerPhone
        let block = document.querySelector(".intro");
        block.scrollIntoView({ behavior: "smooth" });
        hamb.style.top = `25px`;
        headerPhone.classList.remove('header_phone_an');
        hamb.style.position = `absolute`;
    });

    navLiPhone[1].addEventListener('click', () => {
        let block = document.querySelector(".premium");
        block.scrollIntoView({ behavior: "smooth" });
        hamb.style.top = `25px`;
        headerPhone.classList.remove('header_phone_an');
        hamb.style.position = `absolute`;
    });

    navLiPhone[2].addEventListener('click', () => {
        let block = document.querySelector(".menu");
        block.scrollIntoView({ behavior: "smooth" }); hamb.style.top = `25px`;
        headerPhone.classList.remove('header_phone_an');
        hamb.style.position = `absolute`;
    });

    navLiPhone[3].addEventListener('click', () => {
        form.style.display = `flex`;
        hamb.style.top = `25px`;
        headerPhone.classList.remove('header_phone_an');
        hamb.style.position = `absolute`;
    });


    closeForm.addEventListener('click', () => {
        form.style.display = `none`;
    });

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const errorMessages = Array.from(document.getElementsByClassName('error-message'));

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        resetErrorMessages();

        if (isEmpty(nameInput.value)) {
            showError(nameInput, 'Пожалуйста, введите имя');
        }

        if (!isEmailValid(emailInput.value)) {
            showError(emailInput, 'Пожалуйста, введите корректный email');
        }

        if (isEmpty(messageInput.value)) {
            showError(messageInput, 'Пожалуйста, введите сообщение');
        }

        if (isFormValid()) {
            form.submit();
        }
    });

    function isEmpty(value) {
        return value.trim() === '';
    }

    function isEmailValid(email) {
        return true;
    }

    function showError(input, message) {
        input.classList.add('error');
        const errorMessage = input.parentElement.querySelector('.error-message');
        errorMessage.innerText = message;
    }

    function resetErrorMessages() {
        errorMessages.forEach((errorMessage) => {
            errorMessage.innerText = '';
        });
        const errorInputs = Array.from(document.getElementsByClassName('error'));
        errorInputs.forEach((errorInput) => {
            errorInput.classList.remove('error');
        });
    }

    function isFormValid() {
        return !document.getElementsByClassName('error').length;
    }

    var idleTimeout = setTimeout(function () {
        showModal();
    }, 10000);

    function showModal() {
        document.querySelector('.modal').classList.add('modal_an');
    }

    window.addEventListener('scroll', () => {
        clearTimeout(idleTimeout);
        document.querySelector('.modal').classList.remove('modal_an');

        idleTimeout = setTimeout(function () {
            showModal();
        }, 10000);
    });

    document.addEventListener('click', function () {
        clearTimeout(idleTimeout);
        document.querySelector('.modal').classList.remove('modal_an');

        idleTimeout = setTimeout(function () {
            showModal();
        }, 10000);
    });
}); 