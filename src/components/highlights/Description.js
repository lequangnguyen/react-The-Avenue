import React from 'react';
import Fade from 'react-reveal/Fade';

const Description = () => {
    return (
        <Fade>
            <div className="center_wrapper">
                <h2>Highlights</h2>
                <div className="highlight_description">
                    We recommend that you check out the tic-tac-toe game before continuing with the tutorial. One of the features that you’ll notice is that there is a numbered list to the right of the game’s board. This list gives you a history of all of the moves that have occurred in the game, and is updated as the game progresses.
            </div>
            </div>
        </Fade>
    );
};

export default Description;