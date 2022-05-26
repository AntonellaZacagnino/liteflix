import React from 'react'
import '../../styles/Featured.css'

export default function Featured({title}) {
    return(
        <div className='featured-container'>
            <div className='caption'>
                <span>Original de <strong>Liteflix</strong></span>
            </div>
            <div className='title-container'>
                <div><div className='title'>{title}</div></div>
            </div>
            <div className='buttons'>
                <div className='play'>
                    <button>
                        <span className='text'>
                            <span className="material-symbols-outlined">play_arrow</span>
                            Reproducir
                        </span>
                    </button>
                </div>
                <div className='my-list'>
                <button >
                    <span>
                        <span className='text'>
                            <i className="material-symbols-outlined">add</i>
                            Mi lista
                        </span>
                    </span>
                </button>
                </div>
            </div>
        </div>
    )
}