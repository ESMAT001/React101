import React, { Component } from 'react';
import Modal from './Modal';

export class Photos extends Component {
    constructor(props) {
        super(props)

        this.state = {
            imgModal: false,
            imgIndex: null
        }
    }
    handleModal = (index) => {
        this.setState({
            imgModal: true,
            imgIndex: index
        })
    }
    closeModal = () => {
        this.setState({
            imgModal: false
        })
    }
    render() {
        const { data, handleLoadMore, maxImgReached } = this.props;
        const { imgIndex, imgModal } = this.state;
        const cls = "relative min-h-screen p-4 mt-2 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 place-content-start place-items-center gap-3 ";
        const pCls = "text-3xl font-bold text-purple-700 absolute top-1/4 left-2/4 transform -translate-x-2/4";
        const btnCls = "bg-purple-600 text-white font-bold block mx-auto py-2 px-4 focus:outline-none hover:bg-purple-700 shadow transform hover:scale-105 capitalize transition duration-200 ease-in-out";
        const imgCls = "w-full object-cover";
        const imgContainerCls = "w-full shadow overflow-hidden cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg";
        const noRes = (Array.isArray(data) && data.length === 0) ? true : false;
        const modalShow = imgModal && Array.isArray(data);
        console.log()
        return (
            <>
                {modalShow && <Modal
                    closeModal={this.closeModal}
                    src={data[imgIndex].webformatURL}
                    downloadLink={data[imgIndex].largeImageURL}
                    alt={data[imgIndex].tags}
                />
                }
                <div className={cls}>
                    {!data && <p className={pCls}>Loading...</p>}
                    {noRes && <p className={pCls}>No results found!</p>}
                    {data && (data.length > 0) && data.map((img, index) => {
                        let tempCls = img.previewHeight >= 150 ? ' row-span-2' : "";
                        // tempCls = img.previewHeight === 150 && img.previewWidth === 150 ? "" : tempCls;
                        return (
                            <div className={imgContainerCls + tempCls} key={img.id} onClick={() => { this.handleModal(index) }} >
                                <img
                                    className={imgCls}
                                    src={img.previewURL}
                                    alt={img.tags}
                                />
                            </div>
                        )
                    })
                    }
                </div>
                { !maxImgReached && <button className={btnCls} onClick={handleLoadMore} >load more</button>}

            </>
        )
    }
}

export default Photos


