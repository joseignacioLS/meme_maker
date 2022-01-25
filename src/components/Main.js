import React, {useState, useEffect} from "react"


export default function Main()
{
    const [meme, setMeme] = useState({
        "topText":"",
        "bottomText":"",
        "randomImage":""
    });

    const [memeData, setMemeData] = useState([])

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setMemeData(data.data.memes))
    },[])


    function handleInput(event)
    {
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }
    function SelectRandomMeme()
    {
        setMeme(prevMeme => {
                let r = Math.floor(Math.random() * memeData.length);
                return {
                    ...prevMeme,
                    "randomImage": memeData[r].url
                };
            })
    }
    return (
        <div className="container">
            <div className="container--input">
                <input type="text" placeholder="Shut up" name="topText" onChange={handleInput} value={meme.topText}></input>
                <input type="text" placeholder="And take my meme" name="bottomText" onChange={handleInput} value={meme.bottomText}></input>
            </div>
            <div className="container--button">
                <button onClick={SelectRandomMeme}>Get a new meme image</button>
            </div>
            <div className="container--meme">
                {meme.randomImage && <h2 className="meme--text topText">{meme.topText}</h2>}
                {meme.randomImage && <h2 className="meme--text bottomText">{meme.bottomText}</h2>}
                <img id="meme--image" src={meme.randomImage} />
            </div>
        </div>
    )
}