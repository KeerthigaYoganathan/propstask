import React from 'react'

const Secondchild = ({details, eventFunc}) => {

    const selectStudFn = (id) =>{
        
    }
    console.log("sample");
    eventFunc("id :4")
 

  return (
    <><div>Secondchild</div>
    
   



    {details?.map((item)=>{
        if(item?.mark>75){
            return (
                <div key={item?.id}>
                <div onClick={()=>selectStudFn(item.id)}>
                    {item?.name}
                </div>
            </div>
            )
        }
    })

    }

    </>
  )
}

export default Secondchild