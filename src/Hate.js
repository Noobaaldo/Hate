import React, { useState, useEffect } from 'react';
import "./Flip.css";
function Hate() {
    const [response, setResponse] = useState('');
    const [isHeads, setIsHeads] = useState(true);
    const [isFuncCalled, setIsFuncCalled] = useState(false);
    const handleResponse = (answer) => {
        setResponse(answer);
    }
    const myFunction = () => {
        console.log("Function called!");
        setIsHeads((prevState) => !prevState);
    };
    const handleClick = () => {

        if (!isFuncCalled) {
            myFunction();
            setIsFuncCalled(true);
        }

    };
    useEffect(() => {
        if (isFuncCalled) {
            console.log("Function has already been called, it cannot be called again!");
        }
    }, [isFuncCalled]);

    return (
        <div>

            {response === '' && (
                <div>

                    <h1>🥰</h1>
                    <p>Hello nanu!<br></br>
                        How's your mood? Good / bad
                    </p>
                    <button onClick={() => handleResponse('Ok')}>Good</button>
                    <button onClick={() => handleResponse('no')}>Bad</button>
                </div>
            )}
            {response === 'no' && (
                <div>
                    <h1>🧿</h1>
                    <p>No problem,It will be fine shortly</p>
                    <button onClick={() => handleResponse('Ok')}>Ok</button>

                </div>
            )}
            {response === 'Ok' && (
                <div>
                    <h1>🐁</h1>
                    <p>Can I say you something</p>
                    <button onClick={() => handleResponse('HA')}>Yes</button>
                    <button onClick={() => handleResponse('NA')}>No</button>

                </div>
            )}
            {response === 'HA' && (
                <div>
                    <p>Love is like the wind, you can't see it but you can feel it</p>
                    <p>Love is not only something you feel, it is something you do</p>
                    <h1>🥺</h1>
                    <p>Do you love Me</p>
                    <button onClick={() => handleResponse('😘')}>Yes</button>
                    <button onClick={() => handleResponse('😭')}>No</button>

                </div>
            )}

            {response === 'NA' && (
                <div>
                    <h1>🤞</h1>
                    <p>Why,ok if you say yes i will give you a treat</p>
                    <button onClick={() => handleResponse('HA')}>Ok</button>
                </div>
            )}
            {response === '😘' && (
                <div>
                    <h1>😳</h1>
                    <p>Let's play Truth and Dare</p>
                    <button onClick={() => handleResponse('hou')}>Ok</button>
                </div>
            )} {response === '😭' && (
                <div>
                    <p>🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺</p>
                    <p>Please</p>
                    <button onClick={() => handleResponse('😘')}>Ok</button>
                    <button onClick={() => handleResponse('n')}>😏</button>
                </div>
            )}
            {response === 'n' && (
                <div>
                    <p>😭😭😭😭😭😭😭😭😭</p>
                    <p>Please</p>
                    <button onClick={() => handleResponse('😘')}>Ok</button>
                    <button onClick={() => handleResponse('😭')}>😒</button>
                </div>
            )}
            {response === 'hou' && (
                <div>
                    <h1>🤭</h1>
                    <p>Chose a Color for toss who play first"NO CHITING"</p>
                    <h1>🖤/❤️</h1>
                    <button onClick={() => handleResponse('black')}>black</button>
                    <button onClick={() => handleResponse('red')}>red</button>
                </div>
            )}
            {response === 'black' && (
                <div><h1>🤪 </h1>
                    <p>Press the box for start</p>
                    <div className="flip-coin-container" onClick={handleClick}>
                        <div className={`flip-coin ${isHeads ? "heads" : "tails"}`}>
                            <div className="front"></div>
                            <div className="back"></div>
                        </div>
                    </div>
                    <button onClick={() => handleResponse('bs')}>See result</button>

                </div>
            )}
            {response === 'red' && (
                <div><h1>🤪 </h1>
                    <p>Press the box for Toss</p>
                    <div className="flip-coin-container" onClick={handleClick}>
                        <div className={`flip-coin ${isHeads ? "tails" : "heads"}`}>
                            <div className="front"></div>
                            <div className="back"></div>
                        </div>
                    </div>
                    <button onClick={() => handleResponse('rs')}>See result</button>

                </div>
            )}
            {response === 'bs' && (
                <div>
                    <p>You choose black🥺 I win</p>
                    <h6>So which option you chose T/D</h6>
                    <button onClick={() => handleResponse('Truth')}>Truth</button>
                    <button onClick={() => handleResponse('Dare')}>Dare</button>
                </div>
            )}
            {response === 'rs' && (
                <div>
                    <p>You choose Red🥺 I win</p>
                    <h6>So which option you chose T/D</h6>
                    <button onClick={() => handleResponse('Truth')}>Truth</button>
                    <button onClick={() => handleResponse('Dare')}>Dare</button>
                </div>
            )}
            {response === 'Truth' && (
                <div> <h1>🥴</h1>
                    <p>Note:you must have to tell truth on Whatsup</p>
                    <h2>Write the name of the person <br></br>who is your most revered or beloved ancestor and talking to whom brings you happiness.</h2>
                    <button onClick={() => handleResponse('DONE')}>Ok</button>
                </div>
            )}
            {response === 'Dare' && (
                <div>
                    <p>Note:you must have to do dare as such as possible</p>
                    <h6>Dare:Go and watch a movie with person you like most</h6>
                    
                    <button onClick={() => handleResponse('DONE')}>Ok</button>
                </div>
            )}
              {response === 'DONE' && (
                <div>
                    <p>THANKU FOR GIVING YOUR TIME</p>
                    <h2>I am with you🧸</h2>
                   <h1>BYY LOVE YOU</h1>
                </div>
            )}
        </div>
    );
}

export default Hate
