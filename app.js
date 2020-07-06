const id_selector = document.querySelector("#logo");
const logo = document.querySelectorAll("#logo path");

let seconds = 0;

for (let i = 0; i < logo.length; i++) {
    const pathLength = logo[i].getTotalLength();

    const animations = [
        { strokeDashoffset: pathLength },
        { strokeDashoffset: 0 },
    ];

    logo[i].style.strokeDasharray = pathLength;
    logo[i].style.strokeDashoffset = pathLength;
    logo[i].animate(animations, {
        duration: 2000,
        delay: seconds,
        easing: "ease",
        fill: "forwards",
    });

    seconds = seconds + 300;

    console.log(seconds);

    console.log(`${i} is ${logo[i].getTotalLength()}`);
}

const fill_animation = [{ fill: "transparent" }, { fill: "white" }];

id_selector.animate(fill_animation, {
    duration: 500,
    delay: seconds + 500,
    easing: "ease",
    fill: "forwards",
});
