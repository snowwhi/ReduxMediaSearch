
import ResultGrid from './ResultGrid'
import Searchbox from './Searchbox'
import Tabs from './Tabs'
const HomePage = () => {
  return (
    <div className=' w-full min-h-screen'>
    <Searchbox/>
     <Tabs/>
     <ResultGrid/>
    </div>
  )
}

export default HomePage