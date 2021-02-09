import React from 'react'

function Photos({ data }) {
    const cls = "relative min-h-screen p-4 mt-2 grid grid-cols-6 grid-flow-row";
    const pCls = "text-3xl font-bold text-purple-700 absolute top-1/4 left-2/4 transform -translate-x-2/4";
    const imgCls = "w-full";
    const noRes = (Array.isArray(data) && data.length === 0) ? true : false;
    return (
        <div className={cls}>
            {!data && <p className={pCls}>Loading...</p>}
            {noRes && <p className={pCls}>No results found!</p>}
            {data && (data.length > 0) && data.map((img) => {
                return (<img key={img.id} className={imgCls} src={img.previewURL} alt={img.tags} />)
            })
            }
        </div>
    )
}

export default Photos

