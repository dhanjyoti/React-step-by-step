import HomeIcon from '@mui/icons-material/Home';
import { Search } from '@mui/icons-material';
import './componentStyles/homepage.css';

const HomePage = () => {
  return (
    <div className='HomeComponent'>
        <div>Logo</div>
        <div><HomeIcon />Home</div>
        <div>Search</div>
        <Search/>
    </div>
  )
}

export default HomePage