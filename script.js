/* ==========================
   ELEMENTS
========================== */

const themeBtn =
document.getElementById(
    "themeBtn"
);

const body =
document.body;

const heroButton =
document.querySelector(
    ".primary-btn"
);

const skeletonCards =
document.querySelectorAll(
    ".skeleton-card"
);

/* ==========================
   THEME SYSTEM
========================== */

const savedTheme =
localStorage.getItem(
    "theme"
);

if(
    savedTheme === "light"
){

    body.classList.add(
        "light-mode"
    );
}

themeBtn.addEventListener(
    "click",
    () => {

        body.classList.toggle(
            "light-mode"
        );

        if(
            body.classList.contains(
                "light-mode"
            )
        ){

            localStorage.setItem(
                "theme",
                "light"
            );

        }else{

            localStorage.setItem(
                "theme",
                "dark"
            );
        }
    }
);

/* ==========================
   FAKE LOADING DEMO
========================== */

function simulateLoading(){

    skeletonCards.forEach(
        card => {

            card.classList.add(
                "loading"
            );
        }
    );

    setTimeout(
        () => {

            skeletonCards.forEach(
                card => {

                    card.classList.remove(
                        "loading"
                    );
                }
            );

        },
        3000
    );
}

/* ==========================
   DEMO BUTTON
========================== */

heroButton.addEventListener(
    "click",
    () => {

        simulateLoading();
    }
);

/* ==========================
   STARTUP
========================== */

window.addEventListener(
    "load",
    () => {

        simulateLoading();
    }
);

console.log(
    "Skeleton Loader Pro Ready"
);

/* ==========================
   LOADING SPEED
========================== */

let loadingSpeed =
3000;

/* ==========================
   SPEED CONTROL
========================== */

function setLoadingSpeed(
    speed
){

    loadingSpeed =
    speed;
}

/* ==========================
   RELOAD DEMO
========================== */

function reloadDemo(){

    document
    .querySelectorAll(
        ".shimmer"
    )
    .forEach(
        item => {

            item.style.display =
            "none";

            setTimeout(
                () => {

                    item.style.display =
                    "";

                },
                50
            );
        }
    );

    simulateLoading();
}

/* ==========================
   AUTO DEMO
========================== */

let autoDemo =
false;

let demoInterval;

/* Start */

function startAutoDemo(){

    if(
        autoDemo
    ) return;

    autoDemo = true;

    demoInterval =
    setInterval(
        () => {

            reloadDemo();

        },
        6000
    );
}

/* Stop */

function stopAutoDemo(){

    autoDemo = false;

    clearInterval(
        demoInterval
    );
}

/* ==========================
   STATS COUNTER
========================== */

function animateCounter(
    element,
    target
){

    let current = 0;

    const speed =
    target / 60;

    const timer =
    setInterval(
        () => {

            current += speed;

            if(
                current >= target
            ){

                current =
                target;

                clearInterval(
                    timer
                );
            }

            element.textContent =
            Math.floor(
                current
            );

        },
        20
    );
}

const statNumbers =
document.querySelectorAll(
    ".stat-card h3"
);

window.addEventListener(
    "load",
    () => {

        if(
            statNumbers[0]
        ){

            animateCounter(
                statNumbers[0],
                12
            );
        }
    }
);

/* ==========================
   RANDOM RELOAD
========================== */

function randomDemo(){

    const cards =
    document.querySelectorAll(
        ".skeleton-card"
    );

    const random =
    Math.floor(
        Math.random() *
        cards.length
    );

    cards[
        random
    ]
    .classList.add(
        "active-demo"
    );

    setTimeout(
        () => {

            cards[
                random
            ]
            .classList.remove(
                "active-demo"
            );

        },
        2500
    );
}

/* ==========================
   AUTO RANDOM
========================== */

setInterval(
    randomDemo,
    5000
);

console.log(
    "Dynamic Demo Loaded"
);

/* ==========================
   SCROLL REVEAL
========================== */

const revealElements =
document.querySelectorAll(
    ".skeleton-card, .youtube-skeleton, .product-skeleton, .dashboard-skeleton, .feature-card"
);

function revealOnScroll(){

    const trigger =
    window.innerHeight * 0.85;

    revealElements.forEach(
        element => {

            const top =
            element
            .getBoundingClientRect()
            .top;

            if(
                top < trigger
            ){

                element.classList.add(
                    "show"
                );
            }
        }
    );
}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

/* ==========================
   THEME ICON CHANGE
========================== */

const themeIcon =
themeBtn.querySelector(
    "svg"
);

function updateThemeIcon(){

    if(
        body.classList.contains(
            "light-mode"
        )
    ){

        themeBtn.title =
        "Dark Mode";

    }else{

        themeBtn.title =
        "Light Mode";
    }
}

updateThemeIcon();

themeBtn.addEventListener(
    "click",
    updateThemeIcon
);

/* ==========================
   CARD INTERACTION
========================== */

document
.querySelectorAll(
    ".skeleton-card"
)
.forEach(
    card => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.style.transform =
                "translateY(-10px) scale(1.02)";
            }
        );

        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                "";
            }
        );
    }
);

/* ==========================
   MOUSE GLOW EFFECT
========================== */

const glow =
document.createElement(
    "div"
);

glow.className =
"mouse-glow";

document.body.appendChild(
    glow
);

document.addEventListener(
    "mousemove",
    e => {

        glow.style.left =
        e.clientX + "px";

        glow.style.top =
        e.clientY + "px";
    }
);

/* ==========================
   LIVE STATUS
========================== */

const statusText =
document.createElement(
    "div"
);

statusText.className =
"live-status";

statusText.innerHTML =
"● Loading System Active";

document.body.appendChild(
    statusText
);

/* ==========================
   STATUS UPDATE
========================== */

setInterval(
    () => {

        statusText.innerHTML =
        "● Skeleton Running";

        setTimeout(
            () => {

                statusText.innerHTML =
                "● Loading System Active";

            },
            1500
        );

    },
    5000
);

/* ==========================
   FEATURE CARD EFFECT
========================== */

document
.querySelectorAll(
    ".feature-card"
)
.forEach(
    card => {

        card.addEventListener(
            "mousemove",
            e => {

                const rect =
                card.getBoundingClientRect();

                const x =
                e.clientX -
                rect.left;

                const y =
                e.clientY -
                rect.top;

                card.style.background =
                `
                radial-gradient(
                circle at ${x}px ${y}px,
                rgba(139,92,246,.18),
                rgba(255,255,255,.04)
                )
                `;
            }
        );

        card.addEventListener(
            "mouseleave",
            () => {

                card.style.background =
                "rgba(255,255,255,.04)";
            }
        );
    }
);

/* ==========================
   WELCOME MESSAGE
========================== */

setTimeout(
    () => {

        console.log(
            "Welcome to Skeleton Loader Pro"
        );

    },
    1000
);

/* ==========================
   REAL CONTENT DEMO
========================== */

function showRealContent(){

    const cards =
    document.querySelectorAll(
        ".skeleton-card"
    );

    cards.forEach(
        (
            card,
            index
        ) => {

            card.innerHTML =
            `
            <img
            src="https://picsum.photos/500/300?random=${index}"
            style="
            width:100%;
            height:220px;
            object-fit:cover;
            ">

            <div
            style="
            padding:20px;
            ">

            <h3>
            Modern UI Design
            </h3>

            <p>
            Beautiful content
            loaded successfully.
            </p>

            </div>
            `;
        }
    );
}

/* ==========================
   FAKE API
========================== */

function fakeApiRequest(){

    console.log(
        "Fetching Data..."
    );

    setTimeout(
        () => {

            showRealContent();

            console.log(
                "Data Loaded"
            );

        },
        4000
    );
}

/* ==========================
   RESET DEMO
========================== */

function resetDemo(){

    location.reload();
}

/* ==========================
   AUTO CONTENT SWITCH
========================== */

setTimeout(
    () => {

        fakeApiRequest();

    },
    5000
);

/* ==========================
   KEYBOARD SHORTCUTS
========================== */

document.addEventListener(
    "keydown",
    e => {

        /* R = Reload */

        if(
            e.key === "r"
        ){

            resetDemo();
        }

        /* L = Load */

        if(
            e.key === "l"
        ){

            fakeApiRequest();
        }
    }
);

/* ==========================
   SHOWCASE REFRESH
========================== */

function refreshShowcase(){

    document
    .querySelectorAll(
        ".skeleton-card"
    )
    .forEach(
        card => {

            card.style.opacity =
            ".6";

            setTimeout(
                () => {

                    card.style.opacity =
                    "1";

                },
                500
            );
        }
    );
}

setInterval(
    refreshShowcase,
    8000
);

/* ==========================
   PERFORMANCE INFO
========================== */

window.addEventListener(
    "load",
    () => {

        console.log(
            "Skeleton Loader Pro Started"
        );

        console.log(
            "Animations Loaded"
        );

        console.log(
            "Responsive UI Active"
        );

        console.log(
            "Theme System Active"
        );
    }
);

/* ==========================
   FINAL STARTUP
========================== */

console.log(
    "🚀 Skeleton Loader Pro Ready"
);