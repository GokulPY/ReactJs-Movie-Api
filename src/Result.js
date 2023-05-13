import React from "react";
 
function Result(props){
    const boxes = props.movies.map((item,index)=>{
        return <Box key={index} image={item.poster_path} title={item.original_title} rating={item.vote_average}/>
    })
    return(
        <>
        <div className="result">
        {boxes}
        </div>
        </>
    )
}
export {Result};

const Box = (props)=>{
    const IMGPATH ="https://image.tmdb.org/t/p/w1280";
    return(
        <>
        <div className="box">
            <img className="img" src={IMGPATH + props.image}/>
            <div className="names">
                <span className="mname">{props.title}</span>
                <span className="rating">{props.rating}</span>
            </div>
        </div>
        </>
    )
}