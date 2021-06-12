const span = document.querySelectorAll('.span');


document.addEventListener('click', e => {
    const el = e.target;
    for(let i of span){
        const faq1 = i.parentElement;
        faq1.childNodes[4].classList.remove('active');
        faq1.childNodes[2].style.transform = "rotate(0deg)";

        if(i === el){
            faq1.childNodes[4].classList.add('active');
            faq1.childNodes[2].style.transform = "rotate(180deg)";
            return
        }
    }
})
