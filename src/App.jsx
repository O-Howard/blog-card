import './App.css'
import cactusPic from './assets/Cactus.jpg'

function App() {
  return (
        <div className='card'>
          <div className='img'>
            <img src={cactusPic} alt="blog pic" />
          </div>
          <div className='tag'>Design</div>
          <div>
            <p className='title'>Embracing Minimalism</p>
            <p className='text'>From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.</p>
          </div>
          <hr className='boderLine'/>
          <div className='name'>
            <p>Ofek Howard</p>
          </div>
        </div>
  )
}

export default App
