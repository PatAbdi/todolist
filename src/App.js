
import './App.css';
import Categories from './Components/Category/Categories';
import Inputform from './Components/Inputform';

function App() {
  return (
    <div className="w-full h-screen top-0  bg-gradient-to-t from-purple-500 via-purple-400 to-purple-300 text-white flex flex-col-reverse justify-center">
      
      <Inputform/>

      <Categories/>

      
    </div>
  );
}

export default App;
