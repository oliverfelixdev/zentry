let soundSetup = () => {
    document.addEventListener(
        "click",
        () => {
            const audio = document.getElementById("audio");
            audio.loop = true;
            const soundWave = document.getElementById("soundWave");
            const indictorLines = document.querySelectorAll(".indicatorLine");

            // — Play the audio and start animation on first click anywhere.
            if (audio.paused) {
                audio.play();
            }
            indictorLines.forEach((line) => {
                line.style.animationPlayState = "running";
            });

            soundWave.addEventListener("click", (event) => {
                event.stopPropagation();
                if (audio.muted) {
                    audio.muted = false;
                    indictorLines.forEach((line) => {
                        line.style.animationPlayState = "running";
                    });
                } else {
                    audio.muted = true;
                    indictorLines.forEach((line) => {
                        line.style.animationPlayState = "paused";
                    });
                }
            });

            indictorLines.forEach((line) => {
                const randomDelay = Math.random() * 2.5;
                line.style.animationDelay = `${randomDelay}s`;
            });
        },
        { once: true }
    );
}; /* soundSetup(); */

let elemToLinkHover = () => {
    const links = document.querySelectorAll(".navLink");
    const hoverBg = document.querySelector(".hover-bg");

    links.forEach((link) => {
        link.addEventListener("mouseenter", () => {
            const { offsetLeft, offsetWidth } = link;
            hoverBg.style.left = `${offsetLeft}px`;
            hoverBg.style.width = `${offsetWidth}px`;

            const svg = hoverBg.querySelector("svg");
            svg.style.visibility = "visible";
            svg.style.opacity = "1";
        });

        link.addEventListener("mouseleave", () => {
            const svg = hoverBg.querySelector("svg");
            svg.style.visibility = "hidden";
            svg.style.opacity = "0";
        });
    });
}; elemToLinkHover();

let navbarProductBTN = () => {
    // Navar product SVG updown toggle animation
    let productBtnNav = document.querySelector(".btn__main");
    let productSVGNav = document.querySelector(".btn__main .btnMain__top svg");
    productBtnNav.addEventListener("click", () => {
        productSVGNav.classList.toggle("btnMain__topSvg");
    });

    // NAVBAR Product SVG path aniamtion
    let path1 =
        "M84.71041666666667,5.214374999999999 L84.71041666666667,5.214374999999999 Q101.3125,5.214374999999999,101.3125,21.81645833333333 L101.3125,18.49604166666667 Q101.3125,35.098125,84.71041666666667,35.098125 L17.602083333333333,35.098125 Q1,35.098125,1,18.49604166666667 L1,21.81645833333333 Q1,5.214374999999999,17.602083333333333,5.214374999999999 Z";
    let path2 =
        "M93.075695854225,3.6872502478587443 L93.075695854225,3.6872502478587443 Q97.0753603243739,3.739058801481466,97.2856507744634,7.733527217503948 L98.58531360270638,32.42063077682113 Q98.79560405279588,36.415099192843606,94.79621861697066,36.485214353180716 L9.37540429437708,37.98276796196889 Q5.376018858551859,38.052883122306,5.1960795134051425,34.05693244292216 L3.956371960613178,6.526487482276402 Q3.7764326154664616,2.5305368028925628,7.776097085615367,2.5823453565152845 Z";

    const path = document.querySelector(".btnMain__shapePath");

    const hoverAnimation = gsap.timeline({ paused: true });
    hoverAnimation.to(path, {
        duration: 2,
        morphSVG: path2,
        ease: "elastic.out(1,0.2)",
    });

    const leaveAnimation = gsap.timeline({ paused: true });
    leaveAnimation.to(path, {
        duration: 0.7,
        morphSVG: path1,
        ease: "sine.inOut",
    });

    document
        .querySelector(".btnMain__shapeIcon")
        .addEventListener("mouseenter", () => {
            leaveAnimation.pause(0);
            hoverAnimation.restart();
        });

    document
        .querySelector(".btnMain__shapeIcon")
        .addEventListener("mouseleave", () => {
            hoverAnimation.pause();
            leaveAnimation.restart();
        });
}; navbarProductBTN();

let heroTrailerBtn = () => {
    const path1 =
        "M144.79084027015855,6.378188603440325 L144.79084027015855,6.378188603440325 Q166.032062361658,6.37169741490564,166.03373022528868,27.61292043275854 L166.0334024442853,23.438436820166867 Q166.03507030791596,44.67965983801977,144.79384752929894,44.676061908879326 L22.33068335095185,44.65531857448562 Q1.0894605723348292,44.65172064534518,1.0882817517641687,23.41049759472225 L1.0885177702961382,27.663326571771243 Q1.0873389497254777,6.4221035211483155,22.328561041224926,6.41561233261363 Z";
    const path2 =
        "M150.2415035922925,5.378617911370697 L150.2415035922925,5.378617911370697 Q154.2402539814322,5.47859453541356,154.44943844800946,9.473121022863955 L156.1577094668308,42.093773713179026 Q156.36689393340805,46.08830020062942,152.36759305445108,46.16308308352341 L12.390652219547569,48.7805103517229 Q8.391351340590589,48.855293234616894,8.22830994352609,44.85861742804423 L6.63415765321036,5.78075128232636 Q6.471116256145862,1.7840754757536956,10.469866645285574,1.8840520997965584 Z";

    const path = document.querySelector(".heroBtnBottomSVGpath");

    const hoverAnimation = gsap.timeline({ paused: true });
    hoverAnimation.to(path, {
        duration: 2,
        morphSVG: path2,
        ease: "elastic.out(1, 0.2)",
    });

    const leaveAnimation = gsap.timeline({ paused: true });
    leaveAnimation.to(path, {
        duration: 0.7,
        morphSVG: path1,
        ease: "sine.inOut",
    });

    document
        .querySelector(".heroBtnBottomSVG")
        .addEventListener("mouseenter", () => {
            leaveAnimation.pause(0);
            hoverAnimation.restart();
        });

    document
        .querySelector(".heroBtnBottomSVG")
        .addEventListener("mouseleave", () => {
            hoverAnimation.pause();
            leaveAnimation.restart();
        });
}; heroTrailerBtn();

let section2GsapVigour = () => {
    let sectionTwo = document.querySelector("#section_2");
    let element = document.querySelector(".expandableTile");
    let image = document.querySelector(".tileImage");

    // animation for tile (bottom coming)
    function forTileBottomComing() {
        gsap.fromTo(
            element,
            {
                y: 100,
                opacity: 0,
                scale: 0.8,
            },
            {
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
            }
        );
    }
    forTileBottomComing();

    // animation for tile (distort on Mousemove)
    function forTileDistortion() {
        document.body.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            const tiltX = (clientY / innerHeight - 0.5) * 15;
            const tiltY = (clientX / innerWidth - 0.5) * -15;

            gsap.to(element, {
                rotationX: tiltX,
                rotationY: tiltY,
                duration: 0.3,
                ease: "power1.out",
                transformPerspective: 500,
            });

            const imageX = (clientX / innerWidth - 0.5) * 3.5;
            const imageY = (clientY / innerHeight - 0.5) * -3.5;

            gsap.to(image, {
                x: imageX,
                y: imageY,
                duration: 0.3,
                ease: "power1.out",
            });
        });
    }
    forTileDistortion();

    // animation for clowns image
    function forClownsImages() {
        let clownImage = document.querySelector(".clownsImage");
        document.body.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            const moveX = (clientX / innerWidth - 0.5) * 20;
            const moveY = (clientY / innerHeight - 0.5) * 20;

            gsap.to(clownImage, {
                x: moveX,
                y: moveY,
                duration: 0.3,
                ease: "power1.out",
            });
        });
    }
    forClownsImages();
}; section2GsapVigour();

let launchSiteBtn = () => {
    const path1 = "M89.47156852711427,4.471282315617644 L89.47156852711427,4.471282315617644 Q103.16219344763192,4.469807077922436,103.16219344763192,18.160432077922437 L103.16219344763192,15.433317922077563 Q103.16219344763192,29.123942922077564,89.47156852711429,29.122467684382357 L14.714672640980366,29.11441223100252 Q1.0240477204627254,29.112936993307315,1.0240477204627254,15.422311993307314 L1.0240477204627254,18.171438006692686 Q1.0240477204627254,4.480813006692685,14.71467264098037,4.4793377689974765 Z";

    const path2 = "M94.47515467761433,3.270176261287161 L94.47515467761433,3.270176261287161 Q98.47486496461093,3.318317928203655,98.68312722344808,7.312892602877298 L99.66942939679575,26.23066342332639 Q99.8776916556329,30.225238098000034,95.87807500344438,30.280615309344764 L9.70867221676836,31.47368495689609 Q5.709055564579842,31.52906216824082,5.531073210774131,27.533023844884326 L4.580108084566903,6.1820696224906015 Q4.402125730761192,2.1860312991341075,8.401836017757802,2.2341729660506013 Z";

    const path = document.querySelector(".nexBtn__shapePath");

    const hoverAnimation = gsap.timeline({ paused: true });
    hoverAnimation.to(path, {
        duration: 1.5,
        morphSVG: path2,
        ease: "elastic.out(1,0.3)",
    });

    const leaveAnimation = gsap.timeline({ paused: true });
    leaveAnimation.to(path, {
        duration: 0.7,
        morphSVG: path1,
        ease: "expo.out",
    });

    document
        .querySelector(".nexusBtn")
        .addEventListener("mouseenter", () => {
            leaveAnimation.pause(0);
            hoverAnimation.restart();
        });

    document
        .querySelector(".nexusBtn")
        .addEventListener("mouseleave", () => {
            hoverAnimation.pause();
            leaveAnimation.restart();
        });
}; launchSiteBtn();

let titlGridItems = () => {
    const items = document.querySelectorAll(".grid-item");
    items.forEach((item) => {
        item.addEventListener("mousemove", (e) => {

            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left; // Mouse X
            const y = e.clientY - rect.top; // Mouse Y

            const xTilt = ((y / rect.height) - 0.5) * 10;
            const yTilt = ((x / rect.width) - 0.5) * -10;
            gsap.to(item, {
                rotationX: xTilt,
                rotationY: yTilt,
                transformPerspective: 2000,
                scale: .98,
                ease: "power3.out",
                duration: 0.4,
            });
        });

        item.addEventListener("mouseleave", () => {
            gsap.to(item, {
                rotationX: 0,
                rotationY: 0,
                transformPerspective: 2000,
                scale: 1,
                ease: "power3.out",
                duration: 0.6,
            });
        });
    })
}; titlGridItems()

let playVideoOnHover = () => {
    const gridItems = document.querySelectorAll(".grid-item");

    gridItems.forEach((item) => {
        const gridVideo = item.querySelector(".grid-item video")
        item.addEventListener("mouseenter", () => {
            gridVideo.play()
        })
        item.addEventListener("mouseleave", () => {
            gridVideo.pause();
        })
    })


}; playVideoOnHover()

function fortitleALL() {
    let title = document.querySelectorAll(".title-lg");
    title.forEach((head) => {

        gsap.fromTo(
            head,
            {
                opacity: 0,
                y: 100,
                x: -100,
                rotateY: -60,
                rotateX: -50,
            },
            {
                opacity: 1,
                y: 0,
                x: 0,
                rotateX: 0,
                rotateY: 0,
                duration: 5,
                stagger: 0.1,
                ease: "power1.in",
                scrollTrigger: {
                    trigger: head,
                    start: "top bottom",
                    end: "top bottom",
                    scrub: 1,
                },
            }
        );
    })

} fortitleALL();

function imageFrameZentry() {
    let imageFrame = document.querySelectorAll(".image-frame");
    imageFrame.forEach((head) => {

        gsap.fromTo(
            head,
            {
                opacity: 0,
                y: 100,
                x: -100,
                rotateY: 60,
                rotateX: -50,
            },
            {
                opacity: 1,
                y: 0,
                x: 0,
                rotateX: 0,
                rotateY: 0,
                duration: 5,
                stagger: 0.1,
                ease: "power1.in",
                scrollTrigger: {
                    trigger: head,
                    start: "top bottom",
                    end: "top bottom",
                    scrub: 1,
                },
            }
        );
    })

} imageFrameZentry();