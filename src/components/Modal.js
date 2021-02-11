import React from 'react';
function Modal({ closeModal, src, alt }) {
    const modalCls = "fixed  top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 w-screen h-screen overflow-hidden bg-black bg-opacity-50 z-10 flex items-center justify-center z-10";
    return (
        <div className={modalCls} onClick={closeModal}>
            <div className="w-9/12 mx-auto ">
                <a className="absolute top-10 right-10 bg-purple-600 text-white font-bold px-2 py-2" href={src} download target="_blank" rel="noreferrer"
                >Download</a>
                <img
                    className={"max-h-screen mx-auto cursor-pointer"}
                    src={src}
                    alt={alt}
                    onClick={e => { e.stopPropagation() }}
                />
            </div>
        </div>
    )
}

export default Modal
