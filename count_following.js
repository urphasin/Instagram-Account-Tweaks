let v2 = document.querySelector(".x1qnrgzn");

let v3 = document.querySelectorAll(".x1qnrgzn");
console.log(v3.length)

for (let i = 0; i < 5; i++) {
    let x3 = v3[i].children[0].children[0].children[0];
    let userName    = x3.children[1].children[0].children[0].children[0].children[0].textContent;
    let profileName = x3.children[1].children[0].children[0].children[1].children[0].textContent;
    console.log(userName);
    console.log(profileName);
    console.log("\n");
}

let p2 = v2.parentElement
// console.log(p2);

function scrollToBottom(p2, runTime, runInterval) {
    // store the scroll banner
    let scrollElement = document.querySelector(".x6nl9eh.x1a5l9x9.x7vuprf.x1mg3h75.x1lliihq.x1iyjqo2.xs83m0k.xz65tgg.x1rife3k.x1n2onr6")
    // console.log(scrollElement);

    // move to bottom
    let interval = setInterval( () => {
        console.log("Running...");
        scrollElement.scrollTop = scrollElement.scrollHeight;

        // count
        let count = p2.children.length
        console.log(count);
    }
    , runInterval);

    setTimeout( () => {
        clearInterval(interval);
        console.log("Stopped!");
    }
    , runTime);
}

function checkScrollable(p2) {
    let el = p2;

    while (el) {
        console.log({
            element: el,
            scrollHeight: el.scrollHeight,
            clientHeight: el.clientHeight,
            scrollable: el.scrollHeight > el.clientHeight,
            overflowY: getComputedStyle(el).overflowY
        });

        el = el.parentElement;
    }
}
