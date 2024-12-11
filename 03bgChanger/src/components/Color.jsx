import React from 'react'

const Color = ({ color ,font='white',setBgColor}) => {

    const handleBgColor = ()=> {
        setBgColor(color)
    }


    return (
        <div>
            <button style={{ backgroundColor: color , color:font}}
                className={`p-1 rounded-3xl w-[75px] mr-2 text-center border-none `}
                onClick={handleBgColor}>
                {color}</button>
        </div>
    )
}

export default Color
