import React from 'react'

function NavLinks({ navLinks,handleNavLinks }) {
    const cls = "flex flex-row ";
    const btnCls = "capitalize bg-purple-600 text-white font-bold px-5 py-2 rounded focus:outline-none hover:bg-purple-700 ml-2";
    return (
        <div className={cls} >
            {
                navLinks.map((link, i) => {
                    return (
                        <button key={i} className={btnCls} onClick={()=>handleNavLinks(i)}>
                            {link}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default NavLinks
