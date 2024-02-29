import React from 'react'

const Child = ({data, dummy, fullData}) => {
    console.log(fullData);
  return (
    <><div>Child</div>
    {fullData?.studentDetails?.map((item, index)=>{
        return(
            <div key={item?.id}>
                <div>
                    {item?.name}
                </div>
            </div>
        )
    })}
    </>
  )
}

export default Child