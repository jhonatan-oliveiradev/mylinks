import { SocialLinks } from "../../components/Social";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

export function Footer() {
  return (
     <footer className="flex justify-center gap-3 my-4">
          <SocialLinks url="https://instagram.com/jhonoliveira">
            <FaInstagram className="transition-transform hover:scale-105" size={24} color="#fff" />
          </SocialLinks>
          <SocialLinks url="https://facebook.com/eujhonatanoliveira">
            <FaFacebook className="transition-transform hover:scale-105" size={24} color="#fff" />
          </SocialLinks>
          <SocialLinks url="https://facebook.com/eujhonatanoliveira">
            <FaYoutube className="transition-transform hover:scale-105" size={24} color="#fff" />
          </SocialLinks>
          <SocialLinks url="https://facebook.com/eujhonatanoliveira">
            <FaLinkedin className="transition-transform hover:scale-105" size={24} color="#fff" />
          </SocialLinks>
        </footer>
  )
}