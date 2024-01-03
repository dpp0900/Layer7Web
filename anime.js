import Letterize from "https://cdn.skypack.dev/letterizejs@2.0.0";
import anime from "https://cdn.skypack.dev/animejs";
const test = new Letterize({
    targets: ".animate-me",
});

const animation = anime.timeline({
    targets: test.listAll,
    delay: anime.stagger(50, {
        grid: [test.list[0].length, test.list.length],
        from: "center",
    }),
    loop: true,
});

animation
    .add({
        letterSpacing: "15px",
        scale: 0.05,
    })
    .add({
        scale: 1,
        letterSpacing: "40px",
    })
    .add({
        letterSpacing: "15px",
        duration: 4000,
    });


