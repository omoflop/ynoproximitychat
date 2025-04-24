import * as Game from "./game";

export const shouldVoiceChatBeActive = () => {
    const map = Game.getMapId();
    const coords = Game.getPlayerCoords();
    const game = Game.getGameId();

    return (map && coords && game);
};