import React, { useEffect, useState } from 'react'

function Search() {
    const apiKey = "VWPehyf15xp3fLmTRtU1WDmQynxxDj8FwICssAunvkkSeGGyT5pXAZmV"
    const query = "ocean"
    const [text, setText] = useState("")
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://api.pexels.com/v1/search?query=${query}`)
       .then(response => response.json())
       .then(data => setData(data))
       .catch(error => console.error('Error:', error))
       console.log(data);
       
    },[])
    const handdleButton = (e) => {
        e.preventDefault()
        console.log('Button clicked')
        setText("")
    }
    const handdleInput = (e) => {
        setText(e.target.value)
        console.log(text)
    }
  return (
    <div>
        <form action="" className='myForm'>
            <input type="text" className='myInp' value={text} onChange={handdleInput}/>
            <button className="myBtn"  onClick={handdleButton}>Add</button>
            {
                data.map((e) => {
                    return <div key={e.id}>{e.title}</div>
                })
            }
        </form>
    </div>
  )
}

export default Search