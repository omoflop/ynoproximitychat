import * as PageUtil from "./pageutil";
import * as Users from "./users";
import { clamp } from "./util";

export const setPanelVisbility = (state: boolean): void => {
    voiceContainer.hidden = !state;
};

export const updatePlayerList = (): void => {
    
};

const addPlayerToList = (username: string): void => {
    const playerListEntry = document.createElement("div");
    playerListEntry.style.width = "100%";

    const usernameDisplay = document.createElement("div");
    usernameDisplay.textContent = username;

    playerListEntry.appendChild(usernameDisplay)    
    playerListEntry.appendChild(createVolumeSlider(username));

    playerListEntry.appendChild(ySpacer("20px"));

    voiceContainer.appendChild(playerListEntry);
}

const createVolumeSlider = (username: string): Element => {
    const updateValueDisplay = () => {
        const data = Users.getUserData(username);
        valueDisplay.textContent = `${data.volume}%`;
    };

    const slider = document.createElement("div");
    slider.style.display = "inline-flex";
    slider.style.width = "100%";

    const downButton = intervalButton(() => {
        const data = Users.getUserData(username);
        data.volume = clamp(data.volume - 5, 0, 100);
        Users.markDirty();
        updateValueDisplay();
    });
    downButton.textContent = "<";

    const valueDisplay = document.createElement("div");
    valueDisplay.style.lineHeight = "30px";

    setTimeout(updateValueDisplay, 10);

    const upButton = intervalButton(() => {
        const data = Users.getUserData(username);
        data.volume = clamp(data.volume + 5, 0, 100);
        Users.markDirty();
        updateValueDisplay();
    });
    upButton.textContent = ">";

    slider.appendChild(downButton);
    slider.appendChild(flexGrow("1"));
    slider.appendChild(valueDisplay);
    slider.appendChild(flexGrow("1"));
    slider.appendChild(upButton);

    return slider;
}

const flexGrow = (value: string): Element => {
    const grow = document.createElement("div");

    grow.style.flexGrow = value;

    return grow;
};

const ySpacer = (height: string) => {
    const div = document.createElement("div");
    div.style.height = height;

    return div;
};

const intervalButton = (callback: Function): Element => {
    const button = document.createElement("button");
    let counter: number;

    button.onclick = callback as any; // remove the as any and see what happens

    button.onmousedown = () => {
        counter = setInterval(callback, 125);
    };

    button.onmouseup = () => clearInterval(counter);
    return button;
};

/*
<div style="display:inline-flex">
    omoflop
  <input type="checkbox"></div>
*/


const layout = document.getElementById("layout");

const voiceContainer = document.createElement("div");
voiceContainer.id = "voiceContainer";
voiceContainer.classList.add("container");

layout?.prepend(voiceContainer);

const toggleVisbilityButton = PageUtil.createButton("🗣️", PageUtil.ButtonSide.Left, "privateModeButton")
toggleVisbilityButton.id = "toggleVoiceChatContainerVisibilityButton";
toggleVisbilityButton.onclick = (ev) => {
    setPanelVisbility(voiceContainer.hidden);
};

addPlayerToList("omoflop");
addPlayerToList("booblover");
addPlayerToList("ts foomin");
addPlayerToList("pureko");
addPlayerToList("somsnsonsa");
addPlayerToList("yugaminMEANa");