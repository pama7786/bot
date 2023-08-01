import React,{} from "react";

function MyBotCard({bot,removeMyBot}){

    

    if (bot.length==0){
        return 
    }

    return(

        // <div className="col-3 p-1 my-2">
            <div className="card mx-1 mt-2" style={{width:"18rem"}}
            onClick={()=>removeMyBot(bot)}
            >
                <img src={bot.avatar_url} className="card-img-top "
                alt={bot.avatar_url}
                // style={{height:"200px"}}
                />
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
        // </div>
    )
}

export default MyBotCard;