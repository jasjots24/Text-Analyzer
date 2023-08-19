
import './style.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React ,{ useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Main ,Route ,Routes } from 'react-router-dom';

const App = () => {   
    const[mode , setMode]= useState('light');

    const[alert , setAlert]= useState(null);

    const showAlert=(message ,type)=>{
          setAlert({
            msg:message,
            type:type
    })
          setTimeout(()=>{
              setAlert(null);
          },1500);
    }

    const toggleMode=()=>{
      if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor= '#343434';
        showAlert('\tDRAK MODE HAVE BEEN INITALIZED',"Success\t")
        document.title="TextUtil-DarkMode";
      }
      else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('\tLIGHT MODE HAVE BEEN INITALIZED',"Success\t");
      document.title="TextUtil-LightMode";
      }
    }

  return (
    
    <Main>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtil->Word Counter,Character Counter,Edit Your Text Here" mode={mode} />} />
        </Routes>
      </div>
    </Main>
  
);
}

export default App
