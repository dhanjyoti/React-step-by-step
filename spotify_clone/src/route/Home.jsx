import IconText from "../components/shared/IconText";
import spotify_logo from "../images/spotify_logo_white.svg";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import StyleIcon from '@mui/icons-material/Style';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LanguageIcon from '@mui/icons-material/Language';
import TextHover from "../components/shared/TextHover";
import { useNavigate } from "react-router-dom";
import useUser from "../utils/use-user";
import { useEffect } from "react";

// Focus
const focusCardsData = [
    {
      title: "Piano",
      description: "Relax and Indulge music, peaceful music",
      imgUrl: "https://picsum.photos/id/230/160/140",
    },
    {
      title: "Piano",
      description: "Relax and Indulge music, peaceful music",
      imgUrl: "https://picsum.photos/id/230/160/140",
    },
    {
      title: "Piano",
      description: "Relax and Indulge music, peaceful music",
      imgUrl: "https://picsum.photos/id/230/160/140",
    },
    {
      title: "Piano",
      description: "Relax and Indulge music, peaceful music",
      imgUrl: "https://picsum.photos/id/230/160/140",
    },
    {
      title: "Piano",
      description: "Relax and Indulge music, peaceful music",
      imgUrl: "https://picsum.photos/id/230/160/140",
    },
  ];
  
  // Spotify Playlist
  const spotifyPlaylistsCardData = [
    {
      title: "This is One",
      description: "Relax and indulge with piano music",
      imgUrl: "https://picsum.photos/id/230/160/140",
    },
  ];

  const Home = () => {
    const navigate = useNavigate()
    const {user} = useUser()
    useEffect(()=>{
      if(!user){
        navigate('/login')
      }
    })

    if(!user){
      return null
    }

    return (
      <div className="h-full w-full flex">
        {/* This first div will be the left part/panel */}
        <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
          {/* This div is for logo */}
          <div>
            <div className="p-6">
              <img src={spotify_logo} alt="spotify-logo" width={125} />
            </div>
            <div className="py-5">
              <IconText active iconName={<HomeIcon />} displayText={"Home"} />
  
              <IconText iconName={<SearchIcon />} displayText={"Search"} />
  
              <IconText iconName={<StyleIcon />} displayText={"Library"} />
            </div>
            <div className="pt-5">
              <IconText
                iconName={<AddBoxIcon />}
                displayText={"Create Playlist"}
              />
  
              <IconText iconName={<FavoriteIcon />} displayText={"Liked Songs"} />
            </div>
          </div>
          <div className="px-5">
            <div className="border border-gray-200 w-2/5 flex px-2 py-1 rounded-full items-center justify-center cursor-pointer hover:border-white hover:border-2 hover:text-base">
              <LanguageIcon className="text-white" />
              <div className="ml-2 text-sm font-semibold text-white">English</div>
            </div>
          </div>
        </div>
  
        {/* This second div will be the right part */}
        <div className="h-full w-4/5 bg-app-black overflow-auto">
          <div className="navbar w-full h-20 bg-black bg-opacity-30 flex items-center justify-end">
            <div className="w-1/2 flex h-full">
              <div className="w-3/5 flex justify-around items-center">
                <TextHover displayText={"Premium"} />
                <TextHover displayText={"Support"} />
                <TextHover displayText={"Download"} />
                <div className="h-1/2 border-r border-white"></div>{" "}
                {/* This will create the | line in the navbat near Sign up option */}
              </div>
              <div className="w-2/5 flex justify-around h-full items-center">
                <TextHover displayText={"Sign up"} />
                <div className="bg-white h-2/3 px-8 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                  Log in
                </div>
              </div>
            </div>
          </div>
          <div className="context p-8 pt=O overflow-auto">
            <PlaylistView titleText="Focus" cardsData={focusCardsData} />
            <PlaylistView
              titleText="Spotify Playlist"
              cardsData={spotifyPlaylistsCardData}
            />
            <PlaylistView titleText="Sound of India" cardsData={focusCardsData} />
          </div>
        </div>
      </div>
    );
  };
  
  const PlaylistView = ({ titleText, cardsData }) => {
    return (
      <div className="text-white mb-4">
        <div className="text-2xl font-semibold mb-5">{titleText}</div>
        <div className="w-full flex justify-between space-x-4">
          {" "}
          {/* This space-x will give space between the cards */}
          {cardsData.map((item) => {
            return (
              <Card
                title={item.title}
                description={item.description}
                imgUrl={item.imgUrl}
              />
            );
          })}
          {/* <Card
            title="Piano"
            description="Relax and Indulge music, peaceful music"
            imgUrl="https://picsum.photos/id/230/160/140"
          />
          <Card
            title="Piano"
            description="Relax and Indulge music, peaceful music"
            imgUrl="https://picsum.photos/id/230/160/140"
          />
          <Card
            title="Piano"
            description="Relax and Indulge music, peaceful music"
            imgUrl="https://picsum.photos/id/230/160/140"
          />
          <Card
            title="Piano"
            description="Relax and Indulge music, peaceful music"
            imgUrl="https://picsum.photos/id/230/160/140"
          />
          <Card
            title="Piano"
            description="Relax and Indulge music, peaceful music"
            imgUrl="https://picsum.photos/id/230/160/140"
          /> */}
        </div>
      </div>
    );
  };
  
  const Card = ({ title, description, imgUrl }) => {
    return (
      <div className="bg-black bg-opacity-40 w-30 w-1/5 p-4 rounded-lg">
        <div className="pb-4 pt-2">
          <img className="w-full rounded-md" src={imgUrl} alt="label" />
        </div>
        <div className="text-white font-semibold py-3">{title}</div>
        <div className="text-gray-500 text-sm">{description}</div>
      </div>
    );
  };
  
  export default Home;