import React,{ useEffect, useState } from "react";
import BotCard from "./BotCard";

const API = "https://bot-battlr-db-json.vercel.app/api/bots"

function BotCollection({addMyBot,removeMyBot}){

    const [bots,setBots] = useState([]);
    const [fetchStatus,setFetchStatus] = useState("pending");

    useEffect(()=>{
        fetch(API)
        .then(resp=>resp.json())
        .then(data=>{
            setBots(data)
        })
        // console.log("in useeffect")
        
    },[])

    function deleteBot(bot){
        fetch(`${API}/${bot.id}`,{
            method:"DELETE"
        })
        .then(resp=>resp.json())
        .then(data=>console.log(data))
        const newBots = bots.filter((item)=>item.id!==bot.id)
        setBots(newBots);
    }

    const botsList = bots?.map((bot)=>{
        return(
            <BotCard
            key={`botsList`+bot.id}
            bot={bot}
            addMyBot={addMyBot}
            removeMyBot={removeMyBot}
            deleteBot={deleteBot}
            />
        )
    })

    return(
        <div className="container mt-2 border-3" >
            <h2>BOT COLLECTION</h2>
            <div className="row border-0" >
                {botsList}
            </div>
        </div>
    )
}

export default BotCollection