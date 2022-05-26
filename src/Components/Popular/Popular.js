import React, { useEffect }  from 'react'
import '../../styles/Popular.css'

export default function Popular({populars, imagesPath}){
    
    function getYear(date){
            const year = date.split("-")[0];
            return year;
    }


    return(
        <div id='popularsContainer' className='popularsContainer'>
            <div className='order'>
                <span className='text'>Ver: <strong>Populares</strong> 
                </span>
                <span className="material-symbols-outlined">expand_more</span>
            </div>
            <ul className='list'>
                {populars.map((item) => 
                    <li className={"item item" + item.id} key={item.id}>
                        <img src={imagesPath + item.backdrop_path} />
                        <span className='title'>{item.original_title}</span>
                        <div className={'icons'}>
                            <span className="material-symbols-outlined">play_arrow</span>
                        </div>
                        <div className='info'>
                        <span className="material-symbols-outlined">star</span>
                        <p className='punctuation'>{item.vote_average}</p>
                        <p className='year'>{getYear(item.release_date)}</p>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}