import React, {useState} from "react"
import data from "../memesData"


export default function Main()
{
    const [meme, setMeme] = useState({
        "topText":"",
        "bottomText":"",
        "randomImage":""
    });


    const meme_list = data.data.memes;


    function SelectRandomMeme()
    {
        setMeme(prevMeme => {
                let r = Math.floor(Math.random() * meme_list.length);
                return {
                    ...prevMeme,
                    "randomImage": meme_list[r].url
                };
            })
    }
    return (
        <div className="container">
            <div className="container--input">
                <input type="text" placeholder="Shut up"></input>
                <input type="text" placeholder="And take my meme"></input>
            </div>
            <div className="container--button">
                <button onClick={SelectRandomMeme}>Get a new meme image</button>
            </div>
            <div className="container--meme">
                <img id="meme" src={meme.randomImage} />
            </div>
        </div>
    )
}