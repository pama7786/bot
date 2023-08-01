import React,{ useState } from "react";

function BotCard({bot,addMyBot,removeMyBot,deleteBot}){

    // console.log(bot)
    const [isAdded,setIsAdded] = useState(false);

    function cardClicked(){
        addMyBot(bot);
    }

    function deleteClicked(e){
        e.stopPropagation()
        if(window.confirm('Are you sure you wish to continue with this permanent operation?'))
        {
            removeMyBot(bot);
            deleteBot(bot);
        }
        
    }

    return(

        <div className="col-3 p-1 my-2">
            <div
            className="card h-100" style={{width:"18rem"}}
            onClick={cardClicked}
            >
                <div className="card-header d-flex justify-content-end" >
                    <button className="btn btn-danger btn-sm"
                    onClick={deleteClicked}
                    >X</button>
                </div>
                <img src={bot.avatar_url} className="card-img-top " alt={bot.avatar_url}/>
                <div className="card-body">
                    <h5 className="card-title">{bot.name}</h5>
                    <p className="card-text">{bot.catchphrase}</p>
                </div>
                <div className="card-footer d-flex justify-content-center" >
                    <span className="mx-2" >{`♥${bot.health}`}</span>
                    <span className="mx-2" >{`💥${bot.damage}`}</span>
                    <span className="mx-2" >{`🛡${bot.armor}`}</span>

                    {/* {`♥${bot.health} 💥${bot.damage} 🛡${bot.armor} `} */}
                </div>
            </div>
        </div>
    )
}

export default BotCard;