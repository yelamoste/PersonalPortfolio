import React, { useState } from 'react'
import ProjectContainers from './ProjectContainers';

const ExpandableContainer = ({ projectCategoryName, btnColor, initialState }) => {

    console.log(initialState)
    
    const [expand, setExpand] = useState(`${initialState}`);
    const expandFormula = () => { setExpand(expand === `max` ? `45%` : `max`) };
    return (
        <div className={`w-[calc(100% - 20px)] h-[${expand}] border-[0.5px] m-[10px] rounded-2xl bg-gray-900 overflow-hidden`}>
            <button className={`m-[10px] text-gray-400  bg-gray-950 h-max p-[5px] w-[15%] rounded-2xl text-xs  border-gray-800 border-[0.5px] cursor-pointer hover:text-${btnColor}-600 hover:border-${btnColor}-900`} onClick={expandFormula}>{projectCategoryName}</button>
            
            <div className="bg-gray-950 h-[80%] w-[calc(100% - 20px)] ml-[10px] mr-[10px] rounded-2xl flex flex-row justify-around items-center">
                <div className="flex flex-row h-[100%] w-[95%] justify-around items-center">
                   <ProjectContainers expand={expand}/>
                   <ProjectContainers expand={expand}/>
                   <ProjectContainers expand={expand}/>
                </div>
            </div>
        </div>
    )
}

export default ExpandableContainer