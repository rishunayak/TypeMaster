import { SET_CORRECT_KEY, SET_CURRENT_KEY, SET_TIMER, SET_TOTAL_KEY, SET_TYPE } from "./actionTypes"


const initalValue={
    currentKey:"",
    time:"",
    type:"",
    totalKeyPressed:0,
    correctKeyPressed:0
}

const arr=["a","s","d","f","j","k","l",";"]

const TypeMasterReducer=(state=initalValue,action)=>
{

    switch(action.type)
    {
 
        case SET_TIMER :{console.log("hi brother"); return {...state,time:action.payload}}
        case SET_TYPE : return {...state,type:action.payload}
        case SET_CURRENT_KEY :  { 
            console.log("ss")
            if(state.type=="Easy")
            {
                let str=[]

                for(let x=0;x<3;x++)
                {
                    str.push(arr[Math.floor(Math.random() * 8)]+arr[Math.floor(Math.random() * 8)])
                }
               
              return {...state,currentKey:str.join(" ")}
              
            }
            else if(state.type=="Medium")
            {
                let str=[]

                for(let x=0;x<5;x++)
                {
                    str.push(arr[Math.floor(Math.random() * 8)]+arr[Math.floor(Math.random() * 8)]+arr[Math.floor(Math.random() * 8)]+arr[Math.floor(Math.random() * 8)]+arr[Math.floor(Math.random() * 8)])
                }
               return {...state,currentKey:str.join(" ")}

            }
            else
            {
                let str=[]

                for(let x=0;x<5;x++)
                {
                    str.push(arr[Math.floor(Math.random() * 8)]+arr[Math.floor(Math.random() * 8)]+arr[Math.floor(Math.random() * 8)]+arr[Math.floor(Math.random() * 8)]+arr[Math.floor(Math.random() * 8)]+arr[Math.floor(Math.random() * 8)]+arr[Math.floor(Math.random() * 8)])
                }
               return {...state,currentKey:str.join(" ")}

            }
        }
        case SET_TOTAL_KEY : return {...state,totalKeyPressed:action.payload}
        case SET_CORRECT_KEY : return {...state,correctKeyPressed:action.payload}

        default : return state
    }
}




export default TypeMasterReducer