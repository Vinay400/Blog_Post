import { dividerClasses } from '@mui/material/Divider';
import './styles/App.css';
import Homepage from './homepage';
import ContactForm from './components/Contact/ContactForm';
function App() {
  return (
    <div>
    <Homepage />
    <ContactForm />
    </div>
  );
}

export default App;
