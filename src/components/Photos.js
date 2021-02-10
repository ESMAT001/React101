import React, { Component } from 'react'

export class Photos extends Component {
    constructor(props) {
        super(props)

        this.state = {
            imgModal: true,
            imgIndex:null
        }
    }
    handleModal = (index)=>{

    }
    closeModal = () => {
        this.setState({
            imgModal: false
        })
    }
    render() {
        const { data, handleLoadMore, maxImgReached } = this.props;
        const cls = "relative min-h-screen p-4 mt-2 grid grid-cols-7 place-content-start place-items-center gap-3 ";
        const pCls = "text-3xl font-bold text-purple-700 absolute top-1/4 left-2/4 transform -translate-x-2/4";
        const btnCls = "bg-purple-600 text-white font-bold block mx-auto py-2 px-4 focus:outline-none hover:bg-purple-700 shadow transform hover:scale-105 capitalize transition duration-200 ease-in-out";
        const imgCls = "w-full object-cover";
        const imgContainerCls = "w-full shadow overflow-hidden cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg";
        const modalCls = "fixed top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 w-screen h-screen overflow-hidden bg-black bg-opacity-50 z-10";
        const noRes = (Array.isArray(data) && data.length === 0) ? true : false;
        const modalShow=this.state.imgModal && data;
        return (
            <>
                {modalShow && <div className={modalCls} onClick={this.closeModal}>
                    <div className="w-9/12 mx-auto">
                        <img className={"w-full"} src={data[2].largeImageURL} alt={data[2].tags} />
                    </div>
                </div>
                }
                <div className={cls}>
                    {!data && <p className={pCls}>Loading...</p>}
                    {noRes && <p className={pCls}>No results found!</p>}
                    {data && (data.length > 0) && data.map((img, index) => {
                        let tempCls = img.previewHeight >= 150 ? ' row-span-2' : "";
                        // tempCls = img.previewHeight === 150 && img.previewWidth === 150 ? "" : tempCls;
                        return (
                            <div className={imgContainerCls + tempCls} key={img.id} onClick={()=>{this.handleModal(index)}} >
                                <img className={imgCls} src={img.previewURL} alt={img.tags} />
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


