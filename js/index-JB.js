(function () {
    Intro()
    B_Port()
})();

function Intro() {
    let TL2 = gsap.timeline({
        scrollTrigger: {
            trigger: '#intro',
            pin: true,
            scrub: 1,
            end: () => '+=' + document.querySelector('#intro').offsetWidth * 1.5,
        }
    });

    TL2
        .to('#header', { x: '-100%', ease: "none", autoAlpha: 0, duration: 20})
        .to('.A_Tittle .a_wrap', { y: '-100%', ease: "none", duration: 14, delay: 10})

        .from('.A_Tittle .a_wrap .a_top .a_text .tag .word .sp01', {x: 400, autoAlpha: 0, duration: 10})
        .from('.A_Tittle .a_wrap .a_top .a_text .tag .word .sp02', {x: 500, autoAlpha: 0, duration: 10})
        .from('.A_Tittle .a_wrap .a_top .a_text .tag .word .sp03', {x: 500, autoAlpha: 0, duration: 10})
        .from('.A_Tittle .a_wrap .a_top .a_text .tag .word .sp04', {x: 500, autoAlpha: 0, duration: 10})
        .to('.A_Tittle .a_wrap .a_top .a_text .tag', { y: -10, duration: 1 })
        .from('.A_Tittle .a_wrap .a_top .a_text .tag .word2 > strong', { y: 50, autoAlpha: 0, duration: 20 })
        .to('.A_Tittle .a_wrap .a_top .a_text .tag .word2 .box', { width: 1000, duration: 10 })

        .to('.A_Tittle .a_wrap .a_bottom', { x: '-100%', ease: "none", duration: 20 })
        .from('.A_Tittle .a_wrap .a_bottom .clock', { autoAlpha: 0, duration: 2 })

        .from('.A_Tittle #Line .g01 path', { strokeDashoffset: 2036, delay: 5, duration: 10, autoAlpha: 0 })
        .to('.A_Tittle #Line .g01 #pick', { opacity: 1, scale: 3, transformOrigin: "50% 50%", delay: 5, duration: 5 })
        .to('.A_Tittle #Line .g01 .imm', { opacity: 1, delay: 5, duration: 7 })
        .from('.A_Tittle #Line .g01 text', { opacity: 1, delay: 5, duration: 5, autoAlpha: 0 })

        .from('.A_Tittle #Line .g02 path', { strokeDashoffset: 2036, delay: 5, duration: 10, autoAlpha: 0 })
        .to('.A_Tittle #Line .g02 #pick', { opacity: 1, scale: 3, transformOrigin: "50% 50%", delay: 5, duration: 5 })
        .to('.A_Tittle #Line .g02 .imm', { opacity: 1, delay: 5, duration: 7 })
        .from('.A_Tittle #Line .g02 text', { opacity: 1, delay: 5, duration: 5, autoAlpha: 0 })

        .from('.A_Tittle #Line .g03 path', { strokeDashoffset: 2036, delay: 5, duration: 10, autoAlpha: 0 })
        .to('.A_Tittle #Line .g03 #pick', { opacity: 1, scale: 3, transformOrigin: "50% 50%", delay: 5, duration: 5 })
        .to('.A_Tittle #Line .g03 .imm', { opacity: 1, delay: 5, duration: 7 })
        .from('.A_Tittle #Line .g03 text', { opacity: 1, delay: 5, duration: 5, autoAlpha: 0 })

        .from('.A_Tittle #Line .g04 path', { strokeDashoffset: 2036, delay: 5, duration: 10, autoAlpha: 0 })
        .to('.A_Tittle #Line .g04 #pick', { opacity: 1, scale: 3, transformOrigin: "50% 50%", delay: 5, duration: 5 })
        .from('.A_Tittle #Line .g04 text', { opacity: 1, delay: 5, duration: 5, autoAlpha: 0 })
        .to('.A_Tittle #Line .g04 .imm', { opacity: 1, delay: 5, duration: 7 })
    .set({}, {}, "+=100")
}

function B_Port() {
    const wrap = gsap.utils.toArray(".B_Port .b_wrap .cont");
    const page = gsap.to(wrap, {
        xPercent: -100 * (wrap.length + 1),
        ease: "none",
        scrollTrigger: {
            trigger: '.B_Port',
            pin: true,
            scrub: 1,
            snap: 1 / (wrap.length + 1),//scrub: 0일 경우 작동하지 않음
            start: 'top top',
            end: '1000% center'
        }
    })

    const b_soH = gsap.utils.toArray(".B_Port .b_wrap .cont .inner .sogae h3");
    b_soH.forEach((BB, hihi) => {
        const gp1 = gsap.from(BB, {
            x: 200,
            autoAlpha: 0,
            delay: 0.5,
            scrollTrigger: {
                trigger: BB,
                containerAnimation: page,
                toggleActions: 'restart reverse restart reverse',
            }
        })
    });

    const b_soP = gsap.utils.toArray(".B_Port .b_wrap .cont .inner .sogae > p");
    b_soP.forEach((BB, hihi) => {
        const gp2 = gsap.from(BB, {
            x: 200,
            autoAlpha: 0,
            delay: 1,
            scrollTrigger: {
                trigger: BB,
                containerAnimation: page,
                toggleActions: 'restart reverse restart reverse',
            }
        })
    });

    const b_soTXT = gsap.utils.toArray(".B_Port .b_wrap .cont .inner .sogae .text");
    b_soTXT.forEach((BB, hihi) => {
        const gp3 = gsap.from(BB, {
            x: 200,
            autoAlpha: 0,
            delay: 1.5,
            scrollTrigger: {
                trigger: BB,
                containerAnimation: page,
                toggleActions: 'restart reverse restart reverse',
            }
        })
    });

    const b_soLINK = gsap.utils.toArray(".B_Port .b_wrap .cont .inner .sogae .link");
    b_soLINK.forEach((BB, hihi) => {
        const gp4 = gsap.from(BB, {
            x: 200,
            autoAlpha: 0,
            delay: 2,
            scrollTrigger: {
                trigger: BB,
                containerAnimation: page,
                toggleActions: 'restart reverse restart reverse',
            }
        })
    });

    const b_view = gsap.utils.toArray(".B_Port .b_wrap .cont .inner .view");
    b_view.forEach((BB, hihi) => {
        const gp5 = gsap.from(BB, {
            x: 200,
            autoAlpha: 0,
            delay: 1,
            scrollTrigger: {
                trigger: BB,
                containerAnimation: page,
                toggleActions: 'restart reverse restart reverse',
            }
        })
    });
};


//타이머
function watch() {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();

    document.querySelector('.A_Tittle .a_wrap .a_bottom .clock .hour').style.transform = `rotate(${h * (360 / 12)}deg)`
    document.querySelector('.A_Tittle .a_wrap .a_bottom .clock .minuite').style.transform = `rotate(${m * (360 / 60)}deg)`
    document.querySelector('.A_Tittle .a_wrap .a_bottom .clock .second').style.transform = `rotate(${s * (360 / 60)}deg)`

};
setInterval(watch, 1000)