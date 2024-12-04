let soundSetup = () => {
    document.addEventListener("click", () => {
        const audio = document.getElementById("audio");
        audio.loop = true
        const soundWave = document.getElementById("soundWave");
        const indictorLines = document.querySelectorAll(".indicatorLine")

        // — Play the audio and start animation on first click anywhere.
        if (audio.paused) {
            audio.play();
        }
        indictorLines.forEach(line => {
            line.style.animationPlayState = 'running'
        });

        soundWave.addEventListener("click", event => {
            event.stopPropagation();
            if (audio.muted) {
                audio.muted = false;
                indictorLines.forEach(line => {
                    line.style.animationPlayState = 'running'
                });

            } else {
                audio.muted = true;
                indictorLines.forEach(line => {
                    line.style.animationPlayState = 'paused'
                })
            }
        })

        indictorLines.forEach(line => {
            const randomDelay = Math.random() * 2.5;
            line.style.animationDelay = `${randomDelay}s`
        })

    }, { once: true })
}; /* soundSetup(); */

let elemToLinkHover = () => {
    const links = document.querySelectorAll('.navLink');
    const hoverBg = document.querySelector('.hover-bg');

    links.forEach((link) => {
        link.addEventListener('mouseenter', () => {
            const { offsetLeft, offsetWidth } = link;
            hoverBg.style.left = `${offsetLeft}px`;
            hoverBg.style.width = `${offsetWidth}px`;

            const svg = hoverBg.querySelector('svg');
            svg.style.visibility = 'visible';
            svg.style.opacity = '1';
        });

        link.addEventListener('mouseleave', () => {

            const svg = hoverBg.querySelector('svg');
            svg.style.visibility = 'hidden';
            svg.style.opacity = '0';
        });
    });
}; elemToLinkHover();

let navbarProductBTN = () => {
    // Navar product SVG updown toggle animation
    let productBtnNav = document.querySelector('.btn__main');
    let productSVGNav = document.querySelector('.btn__main .btnMain__top svg')
    productBtnNav.addEventListener("click", () => {
        productSVGNav.classList.toggle('btnMain__topSvg')
    })


    // NAVBAR Product SVG path aniamtion
    let path1 = "M84.71041666666667,5.214374999999999 L84.71041666666667,5.214374999999999 Q101.3125,5.214374999999999,101.3125,21.81645833333333 L101.3125,18.49604166666667 Q101.3125,35.098125,84.71041666666667,35.098125 L17.602083333333333,35.098125 Q1,35.098125,1,18.49604166666667 L1,21.81645833333333 Q1,5.214374999999999,17.602083333333333,5.214374999999999 Z";
    let path2 = "M93.075695854225,3.6872502478587443 L93.075695854225,3.6872502478587443 Q97.0753603243739,3.739058801481466,97.2856507744634,7.733527217503948 L98.58531360270638,32.42063077682113 Q98.79560405279588,36.415099192843606,94.79621861697066,36.485214353180716 L9.37540429437708,37.98276796196889 Q5.376018858551859,38.052883122306,5.1960795134051425,34.05693244292216 L3.956371960613178,6.526487482276402 Q3.7764326154664616,2.5305368028925628,7.776097085615367,2.5823453565152845 Z";

    const path = document.querySelector('.btnMain__shapePath');

    const hoverAnimation = gsap.timeline({ paused: true });
    hoverAnimation.to(path, {
        duration: 1.3,
        morphSVG: path2,
        ease: "elastic.out(1, 0.3)",
    });

    const leaveAnimation = gsap.timeline({ paused: true });
    leaveAnimation.to(path, {
        duration: 0.7,
        morphSVG: path1,
        ease: "sine.inOut",
    });

    document.querySelector('.btnMain__shapeIcon').addEventListener('mouseenter', () => {
        leaveAnimation.pause(0);
        hoverAnimation.restart();
    });

    document.querySelector('.btnMain__shapeIcon').addEventListener('mouseleave', () => {
        hoverAnimation.pause();
        leaveAnimation.restart();
    });

}; navbarProductBTN();

let heroTrailerBtn = () => {
    const path1 = "M144.79084027015855,6.378188603440325 L144.79084027015855,6.378188603440325 Q166.032062361658,6.37169741490564,166.03373022528868,27.61292043275854 L166.0334024442853,23.438436820166867 Q166.03507030791596,44.67965983801977,144.79384752929894,44.676061908879326 L22.33068335095185,44.65531857448562 Q1.0894605723348292,44.65172064534518,1.0882817517641687,23.41049759472225 L1.0885177702961382,27.663326571771243 Q1.0873389497254777,6.4221035211483155,22.328561041224926,6.41561233261363 Z"
    const path2 = "M150.2415035922925,5.378617911370697 L150.2415035922925,5.378617911370697 Q154.2402539814322,5.47859453541356,154.44943844800946,9.473121022863955 L156.1577094668308,42.093773713179026 Q156.36689393340805,46.08830020062942,152.36759305445108,46.16308308352341 L12.390652219547569,48.7805103517229 Q8.391351340590589,48.855293234616894,8.22830994352609,44.85861742804423 L6.63415765321036,5.78075128232636 Q6.471116256145862,1.7840754757536956,10.469866645285574,1.8840520997965584 Z"

    const path = document.querySelector('.heroBtnBottomSVGpath');

    const hoverAnimation = gsap.timeline({ paused: true });
    hoverAnimation.to(path, {
        duration: 1.3,
        morphSVG: path2,
        ease: "elastic.out(1, 0.3)",
    });

    const leaveAnimation = gsap.timeline({ paused: true });
    leaveAnimation.to(path, {
        duration: 0.7,
        morphSVG: path1,
        ease: "sine.inOut",
    });

    document.querySelector('.heroBtnBottomSVG').addEventListener('mouseenter', () => {
        leaveAnimation.pause(0);
        hoverAnimation.restart();
    });

    document.querySelector('.heroBtnBottomSVG').addEventListener('mouseleave', () => {
        hoverAnimation.pause();
        leaveAnimation.restart();
    });
}; heroTrailerBtn();

let section2GsapVigour = () => {
    let sectionTwo = document.querySelector("#section_2")
    let element = document.querySelector(".expandableTile")
    let image = document.querySelector(".tileImage")

    // animation for Heading
    function fortitle() {
        let title = document.querySelector(".s2title")
        gsap.fromTo(title, {
            opacity: 0,
            y: 100,
            x: -100,
            rotateY: -60,
            rotateX: -50
        }, {
            opacity: 1,
            y: 0,
            x: 0,
            rotateX: 0,
            rotateY: 0,
            duration: 5,
            stagger: 0.1,
            ease: "power1.in",
            scrollTrigger: {
                trigger: title,
                start: "top bottom",
                end: "top bottom",
                scrub: 1,
            }
        })
    } fortitle();

    // animation for tile (bottom coming)
    function forTileBottomComing() {
        gsap.fromTo(element, {
            y: 100,
            opacity: 0,
            scale: 0.8,
        }, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "circ.out",
            scrollTrigger: {
                trigger: element,
                start: "top bottom",
                end: "top bottom",
            },
        })

    } forTileBottomComing();

    // animation for tile (distort on Mousemove)
    function forTileDistortion() {
        document.body.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            const tiltX = ((clientY / innerHeight) - 0.5) * 15;
            const tiltY = ((clientX / innerWidth) - 0.5) * -15;

            gsap.to(element, {
                rotationX: tiltX,
                rotationY: tiltY,
                duration: 0.3,
                ease: 'power1.out',
                transformPerspective: 500,
            });

            const imageX = ((clientX / innerWidth) - 0.5) * 7.5;
            const imageY = ((clientY / innerHeight) - 0.5) * -7.5;

            gsap.to(image, {
                x: imageX,
                y: imageY,
                duration: 0.3,
                ease: 'power1.out',
            });
        });
    } forTileDistortion();

    // animtaion for tile (Expand of Tile)
    function forTileExpand() {
        gsap.to(element, {
            width: '100vw',
            height: '100vh',
            transform: 'none',
            scrollTrigger: {
                trigger: sectionTwo,
                scroller: "body",
                start: 'top 0',
                end: 'top -100%',
                scrub: 2,
                pin: true,
                markers: true

            }
        })
    }

    // clear the distortion Container Transform
    function toClearTransform() {
        let distortSection = document.querySelector(".distortionContainer")
        gsap.to(distortSection, {
            transform: 'none',
            ease: "power1.out",
            scrollTrigger: {
                trigger: sectionTwo,
                scroller: 'body',
                start: 'top 0',
                end: 'top -100%',
                scrub: 2,
            }
        })
    }

    // animation for clowns image
    function forClownsImages() {
        let clownImage = document.querySelector(".clownsImage");
        document.body.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            const moveX = ((clientX / innerWidth) - 0.5) * 20;
            const moveY = ((clientY / innerHeight) - 0.5) * 20;

            gsap.to(clownImage, {
                x: moveX,
                y: moveY,
                duration: 0.3,
                ease: 'power1.out',
            });
        });
    } forClownsImages();



}; section2GsapVigour();