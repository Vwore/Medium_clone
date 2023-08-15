import Top_bar from "../top_bar"
import React from "react";
import Stripe from "../stripe/Stripe";
import { useState } from "react";
const Subscription =() => {

    const [showForm, setShowForm] = useState(false)

    return(
        <>
        <Top_bar />
        <div className="container-fluid d-flex flex-column justify-items-center ">

            <div className="d-flex align-self-center display-4 mb-5">Subscribe Now:</div>
            <div className="d-flex align-self-center">
            <div className="p-2 m-3 align-self-center text-light bg-dark rounded">
                silver
                <div>
                3 posts per day - $3
                </div>
                {showForm? <Stripe />:<button onClick={()=>setShowForm(true)}>subscribe</button>}
            </div>
            <div className="p-2 m-3 align-items-center text-light bg-dark rounded">
                gold
                <div>
                5 posts per day - $5
                </div>
                <button>subscribe</button>
            </div>
            <div className="p-2 m-3 align-self-center text-light bg-dark rounded">
                Diamond
                <div>
                10 posts per day - $10
                </div>
                <button>subscribe</button>
            </div>
            </div >

        </div>
        </>
    )
}

export default Subscription;