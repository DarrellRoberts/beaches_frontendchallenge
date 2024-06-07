const body = document.body;

const introContainer = document.getElementById("introCon"); 
const introButton = document.getElementById("introButton");
const beachesContainer = document.getElementById("beachesCon"); 
const beachList = document.getElementById("beachList"); 
const palmTree = document.createElement("img");
palmTree.src = "./palmtree.svg";
palmTree.width = "100";
palmTree.id = "palmTreeButton";
introContainer.appendChild(palmTree);

introButton.addEventListener("click", () => {
    introContainer.id = "introConDisappear";
    setTimeout( () => {
    introContainer.style.display = "none";
}, 1000);
    setTimeout( () => {
    beachesContainer.id = "beachesConVisible";
    body.style.height = "fit-content";
    }, 2000)
})

if (beachList) {
    const beachListItems = beachList.getElementsByTagName("li");
    const showBeachInfo = [];
    for (let i = 0; i < beachListItems.length; i++) {
        const beachListItem = beachListItems[i]; 
        const beach = beachListItem.querySelector("h3");
        const beachInfo = beachListItem.querySelector("p");
        beachListItem.id = beach.textContent.split(" ")[0];
        beachListItem.className = "beachListItemVisible";
        beach.id = "beachInvisible";
        beachInfo.id = "beachInfoInvisible"; 
        beach.addEventListener("click", () => {
            if (showBeachInfo.length === 0) {
                beach.id = "beachVisible";
                beachInfo.id = "beachInfoVisible";
                beachListItem.className = "beachListItemInvisible";
                showBeachInfo.push(beach.textContent);
                beachInfo.addEventListener("click", () => {
                    beach.id = "beachInvisible";
                    beachInfo.id = "beachInfoInvisible";
                    beachListItem.className = "beachListItemVisible";
                    showBeachInfo.pop(beach.textContent);
                })
            } else {
                beach.id = "beachInvisible";
                beachInfo.id = "beachInfoInvisible";
                beachListItem.className = "beachListItemVisible";
                showBeachInfo.pop(beach.textContent);
            }
        })
    }
}
