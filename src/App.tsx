import { useState } from 'react';
import Alert from './components/Alert'; 
import Button from './components/Button';

function App(){
  const [alertVisible, setAlertVisible] = useState(false);
  return (
  <div>
    {alertVisible && <Alert onClose = {() => setAlertVisible(false)}> My alert</Alert>}
    <Button color = 'primary' onClick={() => setAlertVisible(true)}>My Button</Button>
  </div>
  )
}

export default App;