import logo from './logo.svg';
import './App.css';

// import react module
import { useState,useEffect } from 'react';
import { filterType , Projects } from './data';

const App = () => {
  const [filterProject , setFilterProject] = useState(null);

  const getProject = () => {
    const projectList = Projects;
    return projectList
  };

  const filterProjectType = (Type) => {
    const filteredProject = getProject().filter(item => item.type === Type);
    return filteredProject;
  }

  useEffect( () => {
    setFilterProject(getProject());
  },[])

  const onClickHandler = (event) => {
    const typeEvent = event.target.value;
    alert(typeEvent + '  event!')
    typeEvent !== "all" ? 
    setFilterProject(filterProjectType(typeEvent)) : setFilterProject(getProject());
  };

  return (
    <>
      {filterType && filterType.map(({name,value},index) => (
        <div className='flex flex-wrap'>
          <button key={index} value={value} 
          onClick={onClickHandler} 
          className="flex  mx-3 p-2 border border-black">
            {name}
          </button>
        </div>
      ))}

      <div className="flex justify-between items-center contents-center 
            gap-x-30 gap-y-30 h-[100px] w-[800px] border border-black my-5 mx-auto">
        <div className=' h-[80px] w-[160px] m-2 border border-black
                            flex flex-col items-center justify-center'>
                                
          <p><button>
              Done
              </button></p>
                              
        </div>
        <div className=' h-[80px] w-[160px] m-2 border border-black
                            flex flex-col items-center justify-center'>
                            
          <p className='items-center contents-center'><button>
              report
              </button></p>

        </div>
        <div className=' h-[80px] w-[160px] m-2 border border-black
                            flex flex-col items-center justify-center'>
                               
          <p className='items-center contents-center'>
          <button value='standby' onClick={onClickHandler}>
              standby2ERP
              </button></p>
                               
        </div>
        <div className=' h-[80px] w-[160px] m-2 border border-black
                            flex flex-col items-center justify-center'>
                              
          <p className='items-center contents-center'>
            <button value='Remained' onClick={onClickHandler}>
              remain
              </button>
          </p>
        </div>
      </div>

      {filterProject && 
      filterProject.map(type => (
        <div className='flex flex-col h-[200px] m-4 p-4 border border-black'>
          <ul key={type.id}>
            <li>{type.title}</li>
            <li>{type.info}</li>
            <li>{type.desc.foreman}</li>
          </ul>
        </div>
      ))}
    </>
  );
}

export default App;
