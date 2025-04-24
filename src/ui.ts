import * as PageUtil from "./pageutil";

export const setPanelVisbility = (state: boolean): void => {
    voiceContainer.hidden = !state;
};

export const updatePlayerList = (): void => {
    
};



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
