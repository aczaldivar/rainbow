import './App.css';

import { useState } from 'react'
// Make sure to import the component we just built:
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm';

function App() {
      const [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red']);
      const colorMap = colors.map((color, i) => <ColorBlock color={color} key={i} /> );
    

    const addColor = (newColor)=> {
    setColors([...colors,newColor])
      
    };
    
    return (
        <div className="App">
           {colorMap}
           <ColorForm addColor={addColor} />
           
        </div>
    )
}




export default App;
