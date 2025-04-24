import * as PageUtil from "./pageutil";
import * as Game from "./game";
import { version } from "../version.json";
import * as Ui from "./ui";

const updatesPerSecond = 10;
let wasGameLoaded = false;

const update = () => {
    if (!wasGameLoaded && Game.isGameLoaded()) {
        wasGameLoaded = true;
        const metadataUrl = `https://raw.githubusercontent.com/omoflop/ynoproximitychat/refs/heads/main/version.json`;
        fetch(metadataUrl)
            .then(response => {
                if (!response.ok) throw new Error(`Failed to reach to asset server (${metadataUrl})`);
                return response.json();
            })
            .then(json => {
                if (version < json.version) {
                    showToastMessage("There is an update available for YnoMinimap! <a href='https://github.com/omoflop/ynoproximitychat' target='_blank'>Download here</a>", "info", true, undefined, true)
                }
            })
            .catch(error => {
                console.error(error);
            });
    }

    setTimeout(update, 1000 / updatesPerSecond);
};

// Begin the update loop
setTimeout(update, 1000 / updatesPerSecond);
