import people from "../data"
import { useState } from 'react'


export const Home = () => {

  const [ loading, setLoading ] = useState({})
  const [ candidato, setCandidato ] = useState(people)
  const [ jobs, setJobs ] = useState({})
  const [ value, setValue ] = useState(1)


  const { id, image, name, title, quote } = candidato[value]

  console.log(id)
  return (
    <div className="flex items-center justify-center flex-col p-12">
      <h1 className="text-lg font-bold text-gray-600 pb-12">Clique na foto do candidato para saber mais sobre ele.</h1> 
      <div className="flex items-center gap-10 flex-wrap">
        {candidato.map((item, index) => (
          <div className="w-24 h-24 rounded-full bg-cover bg-center cursor-pointer hover:animate-pulse" style={{backgroundImage: `url(${item.image})`}} onClick={() => setValue(index)}>
            
          </div>
        ))}
      </div>

      {/* Jobs container */}
      <div className="mt-24 w-34 my-0 mx-auto flex items-center flex-col shadow-md p-10">
      <div className="mb-3 w-24 h-24 rounded-full bg-cover bg-center cursor-pointer hover:animate-pulse" style={{backgroundImage: `url(${image})`}}></div>
        <h1 className="text-3xl font-bold font-gray-800 pb-1">{name}</h1>
        <p className="text-md font-semibold text-gray-500 pb-4">{title}</p>
        <p className="max-w-md">{quote}</p>
      </div>
    </div>
  )
}