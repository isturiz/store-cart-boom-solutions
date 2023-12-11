import Steps from './components/Steps'
import LogoBoomSolutions from './assets/logotipo_boom_solutions.webp'

export default function App() {
  return (
    <div className='App flex flex-col min-h-screen'>
      <header className='flex w-screen p-4 bg-gray-200 justify-between items-center mb-8'>
        <img
          src={LogoBoomSolutions}
          alt='Logo Boom Solutions'
          className='h-12'
        />
        <h1>Boom Solutions</h1>
      </header>

      <div id='container' className='flex-1'>
        <main className='flex justify-center'>
          <Steps />
        </main>
      </div>

      <footer className='p-4 bg-gray-200'>Footer test</footer>
    </div>
  )
}
