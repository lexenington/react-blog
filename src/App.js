import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";

let navLinks = [{name: "Home", local: "http://www.wired.com"}, {name: "About", local: "http://www.leverage.com"}, {name: "Contact", local: "http://www.readwrite.com"}];

let articleData = [
  {
    author: "Bryant Fisher",
    date: "Sept 6, 2017",
    title: "2016 African Blogger Award winners announced",
    article: "The winners of the annual African Blogger Awards have been announced, with the competition receiving over 2,000 entries from across the continent, more than doubling the number of entries from 2015. The awards saw particularly strong growth in entries from West Africa. Entries were open in five main categories including Africa’s Top Blogger, Top Instagrammer, Top Twitter Profile, Best Facebook Page and Top YouTuber, as well as across 20 sub-categories. Categories that saw the highest growth in entries included the Top Blog in Africa category which grew by 191 percent compared to 2015, and the Marketing, Media and Brand category, which grew by nearly 80 percent.",
    img: "http://www.africa-ontherise.com/wp-content/uploads/2016/06/WINNER-African-Blogger-Awards-Best-Blog-About-Africa-BANNER.png"
  }, {
    author: "George Doe",
    title: "Trying To Make a Meaning",
    date: "September 4, 2017",
    article: "Entries were open in five main categories including Africa’s Top Blogger, Top Instagrammer, Top Twitter Profile, Best Facebook Page and Top YouTuber, as well as across 20 sub-categories. Categories that saw the highest growth in entries included the Top Blog in Africa category which grew by 191 percent compared to 2015, and the Marketing, Media and Brand category, which grew by nearly 80 percent.",
    img: "https://i.ytimg.com/vi/NglZpVcQ3Ww/maxresdefault.jpg"
  },
  {
    author: "Bryant Fisher",
    date: "Sept 6, 2017",
    title: "2016 African Blogger Award winners announced",
    article: "The winners of the annual African Blogger Awards have been announced, with the competition receiving over 2,000 entries from across the continent, more than doubling the number of entries from 2015. The awards saw particularly strong growth in entries from West Africa. Entries were open in five main categories including Africa’s Top Blogger, Top Instagrammer, Top Twitter Profile, Best Facebook Page and Top YouTuber, as well as across 20 sub-categories. Categories that saw the highest growth in entries included the Top Blog in Africa category which grew by 191 percent compared to 2015, and the Marketing, Media and Brand category, which grew by nearly 80 percent.",
    img: "http://www.africa-ontherise.com/wp-content/uploads/2016/06/WINNER-African-Blogger-Awards-Best-Blog-About-Africa-BANNER.png"
  }, {
    author: "George Doe",
    title: "Trying To Make a Meaning",
    date: "September 4, 2017",
    article: "Entries were open in five main categories including Africa’s Top Blogger, Top Instagrammer, Top Twitter Profile, Best Facebook Page and Top YouTuber, as well as across 20 sub-categories. Categories that saw the highest growth in entries included the Top Blog in Africa category which grew by 191 percent compared to 2015, and the Marketing, Media and Brand category, which grew by nearly 80 percent.",
    img: "https://i.ytimg.com/vi/NglZpVcQ3Ww/maxresdefault.jpg"
  },
  {
    author: "Bryant Fisher",
    date: "Sept 6, 2017",
    title: "2016 African Blogger Award winners announced",
    article: "The winners of the annual African Blogger Awards have been announced, with the competition receiving over 2,000 entries from across the continent, more than doubling the number of entries from 2015. The awards saw particularly strong growth in entries from West Africa. Entries were open in five main categories including Africa’s Top Blogger, Top Instagrammer, Top Twitter Profile, Best Facebook Page and Top YouTuber, as well as across 20 sub-categories. Categories that saw the highest growth in entries included the Top Blog in Africa category which grew by 191 percent compared to 2015, and the Marketing, Media and Brand category, which grew by nearly 80 percent.",
    img: "http://www.africa-ontherise.com/wp-content/uploads/2016/06/WINNER-African-Blogger-Awards-Best-Blog-About-Africa-BANNER.png"
  }, {
    author: "George Doe",
    title: "Trying To Make a Meaning",
    date: "September 4, 2017",
    article: "Entries were open in five main categories including Africa’s Top Blogger, Top Instagrammer, Top Twitter Profile, Best Facebook Page and Top YouTuber, as well as across 20 sub-categories. Categories that saw the highest growth in entries included the Top Blog in Africa category which grew by 191 percent compared to 2015, and the Marketing, Media and Brand category, which grew by nearly 80 percent.",
    img: "https://i.ytimg.com/vi/NglZpVcQ3Ww/maxresdefault.jpg"
  },
  {
    author: "Bryant Fisher",
    date: "Sept 6, 2017",
    title: "2016 African Blogger Award winners announced",
    article: "The winners of the annual African Blogger Awards have been announced, with the competition receiving over 2,000 entries from across the continent, more than doubling the number of entries from 2015. The awards saw particularly strong growth in entries from West Africa. Entries were open in five main categories including Africa’s Top Blogger, Top Instagrammer, Top Twitter Profile, Best Facebook Page and Top YouTuber, as well as across 20 sub-categories. Categories that saw the highest growth in entries included the Top Blog in Africa category which grew by 191 percent compared to 2015, and the Marketing, Media and Brand category, which grew by nearly 80 percent.",
    img: "http://www.africa-ontherise.com/wp-content/uploads/2016/06/WINNER-African-Blogger-Awards-Best-Blog-About-Africa-BANNER.png"
  }, {
    author: "George Doe",
    title: "Trying To Make a Meaning",
    date: "September 4, 2017",
    article: "Entries were open in five main categories including Africa’s Top Blogger, Top Instagrammer, Top Twitter Profile, Best Facebook Page and Top YouTuber, as well as across 20 sub-categories. Categories that saw the highest growth in entries included the Top Blog in Africa category which grew by 191 percent compared to 2015, and the Marketing, Media and Brand category, which grew by nearly 80 percent.",
    img: "https://i.ytimg.com/vi/NglZpVcQ3Ww/maxresdefault.jpg"
  },
];

let socialLinks = [
  {
    iconName: "facebook",
    local: "http://www.facebook.com"
  },
  {
    iconName: "twitter",
    local: "http://www.twitter.com"
  },
  {
    iconName: "instagram",
    local: "http://www.instagram.com"
  }
]

let footerLinks = [
  {
    name: "Writers",
    local: "#"
  },
  {
    name: "Support",
    local: "#"
  },
  {
    name: "Legal Terms",
    local: "#"
  },
  {
    name: "About",
    local: "#"
  }
]

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Navbar logo="boa-me-na-me-mmoa-wo" links={navLinks} brand="The African Pespective"/>
        <Header/>
        <Article data={articleData}/>
        <Footer social={socialLinks} footer={footerLinks}/>
      </div>
    )
  }
}

export default App;
