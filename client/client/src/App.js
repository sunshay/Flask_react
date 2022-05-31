// useState contain the state variable wich conatain the data retrieved from the back end, and the same varaible will be use to render the data on the page
// useEffect will be use to fetch the backend API on the first render
import React,{useState,useEffect} from 'react'

function App(){
                  
    // const setData: React.Dispatch<React.SetStateAction<{}[]>>
  
    const[data, setData] = useState([{}])

    useEffect(() => {
        fetch("/members").then(
            res => res.json()
        ).then(
              data => {
                    setData(data)
                    console.log(data)
            }
        )
      }, [])

      return(
        <div>

           {(typeof data.members === 'undefined') ? (
                <p>Loading...</p>
           ) : (
                data.members.map((member, i)) => (
                   <p key={i}>{member}</p>
                ))
           )}    
      </div>
  )
}

// 4. cd client ; npm start ( will open a web page :3000)
// 5.create a state variable "Data" then fetch this bckend api with a json data response
// setData is use to manipulate the state variable before we use use effect to fetch the backend api
