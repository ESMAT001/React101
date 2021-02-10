import React from 'react'

function Photos({ data ,handleLoadMore}) {
    const cls = "relative min-h-screen p-4 mt-2 grid grid-cols-7 place-content-start place-items-center gap-2";
    const pCls = "text-3xl font-bold text-purple-700 absolute top-1/4 left-2/4 transform -translate-x-2/4";
    const btnCls=""
    const imgCls = "w-full object-cover";
    const imgContainerCls = "w-full shadow overflow-hidden";
    const noRes = (Array.isArray(data) && data.length === 0) ? true : false;
    return (
        <div className={cls}>
            {!data && <p className={pCls}>Loading...</p>}
            {noRes && <p className={pCls}>No results found!</p>}
            {data && (data.length > 0) && data.map((img) => {
                let tempCls = img.previewHeight >= 150 ? ' row-span-2' : "";
                // tempCls = img.previewHeight === 150 && img.previewWidth === 150 ? "" : tempCls;
                return (
                    <div className={imgContainerCls + tempCls} key={img.id}>
                        <img  className={imgCls} src={img.previewURL} alt={img.tags} />
                    </div>
                )
            })
            }
             <button className={btnCls} onClick={handleLoadMore} >load more</button>
        </div>
    )
}

export default Photos

