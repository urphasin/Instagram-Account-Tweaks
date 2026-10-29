// each p2 child is a follower or following
let p2 = document.querySelector(".x1qnrgzn").parentElement;
let v3 = document.querySelectorAll(".x1qnrgzn");

// scrollToBottom(p2, 100000, 7000);

removeFollowerNum(94);

function removeFollowerNum(num) {
    let i = 0;

    function next() {
        if (i >= num) {
            console.log("Finished processing accounts");
            return;
        }

        let x3 = v3[i].children[0].children[0].children[0];

        let userName = x3.children[1].children[0].children[0].children[0].children[0].textContent;
        let profileName = x3.children[1].children[0].children[0].children[1].children[0].textContent;
        let followingButton = x3.children[2].children[0].children[0];

        // Click the Following button to open the confirmation dialog
        followingButton.click();

        console.log(`Remove: ${userName}`);
        console.log("Username: ", userName);
        console.log("ProfileName: ", profileName);
        console.log("\n");

        // Wait 2 seconds before checking the confirmation dialog
        setTimeout(() => {
            let unfollow = document.querySelector(
                "button._a9--._ap36._a9-_"
            );

            if (unfollow) {
                unfollow.click();
                console.log("Button clicked");
            } else {
                console.log("Button not found");
            }

            // Move to the next account after checking
            i++;
            setTimeout(next, 3000);

        }, 7000);
    }

    next();
}

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
