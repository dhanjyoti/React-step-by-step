import IconText from "../components/share/IconText";
import spotify_logo from "../images/spotify_logo_white.svg";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import StyleIcon from '@mui/icons-material/Style';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LanguageIcon from '@mui/icons-material/Language';

const Home = () => {
    return (
        <div className="h-full w-full flex">
            {/* This first div will be the left part/panel */}
            <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
                {/* This div is for the logo */}
                <div>
                    <div className="p-6">
                        <img src={spotify_logo} alt="spotify-logo" width={125} />
                    </div>
                    <div className="py-5">
                        <IconText iconName={<HomeIcon />} displayText={"Home"} />
                        <IconText iconName={<SearchIcon />} displayText={"Search"} />
                        <IconText iconName={<StyleIcon />} displayText={"Library"} />
                    </div>
                    <div className="pt-5">
                        <IconText iconName={<AddBoxIcon />} displayText={"Create Playlist"} />
                        <IconText iconName={<FavoriteIcon />} displayText={"Liked Songs"} />
                    </div>
                    <div className="px-5">
                        <div className="border border-gray-200 w-2/5 flex px-2 py-1 rounded-full items-center justify-center cursor-pointer hover:border-white hover:border-2 hover:text-base">
                            <LanguageIcon className="text-white" />
                            <div className="ml-2 text-sm font-semibold text-white">English</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* This second div will be the right part */}
            <div></div>
        </div>
    )
}

export default Home;