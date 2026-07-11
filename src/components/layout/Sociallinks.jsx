// Sociallinks.jsx
import facebookIcon from "../../assets/icons/facebook.png";
import instagramIcon from "../../assets/icons/instagram.png";
import youtubeIcon from "../../assets/icons/youtube.png";
import xIcon from '../../assets/icons/twitter.png';

/**
 * Central social links config.
 * Import this anywhere (Footer, AboutPage, ContactPage, etc.) so every
 * link + icon stays in sync across the site.
 */
export const socialLinks = [
  {
    name: 'Facebook',
    handle: 'tour.planners',
    href: 'https://www.facebook.com/tour.planners',
    icon: facebookIcon, // Now points to the image file path
    color: 'hover:bg-[#1877F2]',
  },
  {
    name: 'Instagram',
    handle: '@tour.planners',
    href: 'https://www.instagram.com/tour.planners',
    icon: instagramIcon, 
    color: 'hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888]',
  },
  {
    name: 'YouTube',
    handle: '@planners_tour',
    href: 'https://www.youtube.com/@planners_tour',
    icon: youtubeIcon, 
    color: 'hover:bg-[#FF0000]',
  },
  {
    name: 'X',
    handle: '@tour_planners',
    href: 'https://x.com/tour_planners',
    icon: xIcon, 
    color: 'hover:bg-black',
  },
];