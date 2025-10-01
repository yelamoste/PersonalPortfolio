import React from 'react'

const ProjectContainers = ({expand}) => {

    console.log("pc", expand )

    let heightExpand, borderExpand, containerHeight;

    if (expand === "max"){

        containerHeight = "0%";
        heightExpand = "0%";
        borderExpand = "0";
    } else { 

        containerHeight = "90%";
        heightExpand = "65%"; 
        borderExpand = "0.25px";
    }


    console.log('second',heightExpand)
  return (
    <div className={`bg-gray-900 w-[25%] h-[${containerHeight}] rounded-[5px] border-[${borderExpand}] flex flex-col overflow-hidden`}>
        <div className={`rounded-[2px]  w-[96.5%] h-[${heightExpand}] border-[${borderExpand}]`}></div>
        {/* <h3 className="text-sm font-alan text-gray-400 self-center ml-[5px]mr-[5px]">{titleName}</h3>
        <p className="text-xs text-gray-500 lowercase ml-[5px] mr-[5px] overflow-ellipsis h-[25%] ">{briefDescription}</p>  {webLinks, titleName, briefDescription} */}
    </div>
  )
}

export default ProjectContainers