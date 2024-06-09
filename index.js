//Declaring key elements in global scope
const body = document.body;
const main = body.querySelector("main");
const introContainer = document.getElementById("introCon"); 
const beachList = document.getElementById("beachList"); 

//Homepage logic
if (introContainer) {
    const introButton = document.getElementById("introButton");
    const palmTree = document.createElement("img");
    palmTree.src = "./palmtree.svg";
    palmTree.width = "100";
    palmTree.id = "palmTreeButton";
    introContainer.appendChild(palmTree);
    //Button triggers transition from Home to Map page
    if (introButton) {
        introButton.addEventListener("click", () => {
            introContainer.id = "introConDisappear";
            setTimeout( () => {
                introContainer.style.display = "none";
                main.removeChild(introContainer);
                const beachesContainer = document.getElementById("beachesCon"); 
                beachesContainer.id = "beachesConVisible";
                body.style.height = "fit-content";
        }, 1000);
        //Map page, the above event listener triggers logic
        if (beachList) {
            const beachListItems = beachList.getElementsByTagName("li");
            const showBeachInfo = [];
            //Init for loop to add ids & click event listeners to beaches
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
        })
    }
}

