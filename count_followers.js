// each p2 child is a follower or following
let p2 = document.querySelector(".x1qnrgzn").parentElement;

scrollToBottom(p2, 100000, 7000);

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
