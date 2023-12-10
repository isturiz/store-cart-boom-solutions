import Steps from './components/Steps'

import LogoBoomSolutions from './assets/logotipo_boom_solutions.webp'

export default function App() {
  return (
    <div className='App'>
      <header className='App-header flex w-screen p-4 bg-gray-200 rounded justify-between items-center'>
        <img src={LogoBoomSolutions} alt='Logo Boom Solutions' className='h-12'/>
        <h1>Boom Solutions</h1>
      </header>
      <main className=''>
        <Steps />
      </main>
    </div>
  )
}
