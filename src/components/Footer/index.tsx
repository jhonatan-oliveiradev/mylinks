import { useEffect, useState } from "react";
import { SocialLinks } from "../../components/Social";
import {
  FaBehance,
  FaDribbble,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaSpotify,
  FaTelegram,
  FaTiktok,
  FaTwitch,
  FaWhatsapp,
  FaYoutube
} from 'react-icons/fa'
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

interface SocialLinksProps {
  facebook: string;
  instagram: string;
  youtube: string;
  twitter: string;
  linkedin: string;
  github: string;
  twitch: string;
  tiktok: string;
  spotify: string;
  behance: string;
  dribbble: string;
  whatsapp: string;
  telegram: string;
  email: string;
  phone:string;
}

export function Footer() {
  const [socialLinks, setSocialLinks] = useState<SocialLinksProps>()

  useEffect(() => {
    function loadSocialLinks() {
      const docRef = doc(db, "social", "link")
      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setSocialLinks({
            facebook: snapshot.data()?.facebook,
            instagram: snapshot.data()?.instagram,
            youtube: snapshot.data()?.youtube,
            twitter: snapshot.data()?.twitter,
            linkedin: snapshot.data()?.linkedin,
            github: snapshot.data()?.github,
            twitch: snapshot.data()?.twitch,
            tiktok: snapshot.data()?.tiktok,
            spotify: snapshot.data()?.spotify,
            behance: snapshot.data()?.behance,
            dribbble: snapshot.data()?.dribbble,
            whatsapp: snapshot.data()?.whatsapp,
            telegram: snapshot.data()?.telegram,
            email: snapshot.data()?.email,
            phone: snapshot.data()?.phone,
          })
        }
      })
    }
    
    loadSocialLinks()
  }, [])

  return (
    <>
      { socialLinks && Object.keys(socialLinks).length > 0 && (
         <footer className="flex justify-center gap-3 my-4">
            <SocialLinks url={socialLinks?.instagram}>
              <FaInstagram className="transition-transform hover:scale-105" size={24} color="#fff" />
            </SocialLinks>
            <SocialLinks url={socialLinks?.facebook}>
              <FaFacebook className="transition-transform hover:scale-105" size={24} color="#fff" />
            </SocialLinks>
            <SocialLinks url={socialLinks?.youtube}>
              <FaYoutube className="transition-transform hover:scale-105" size={24} color="#fff" />
            </SocialLinks>
            <SocialLinks url={socialLinks?.linkedin}>
              <FaLinkedin className="transition-transform hover:scale-105" size={24} color="#fff" />
          </SocialLinks>
          <SocialLinks url={socialLinks?.github}>
            <FaGithub className="transition-transform hover:scale-105" size={24} color="#fff" />
          </SocialLinks>
          <SocialLinks url={socialLinks?.twitch}>
            <FaTwitch className="transition-transform hover:scale-105" size={24} color="#fff" />
          </SocialLinks>
          <SocialLinks url={socialLinks?.tiktok}>
            <FaTiktok className="transition-transform hover:scale-105 text-2xl" size={24} color="#fff" />
          </SocialLinks>
          <SocialLinks url={socialLinks?.spotify}>
            <FaSpotify className="transition-transform hover:scale-105" size={24} color="#fff" />
          </SocialLinks>
          <SocialLinks url={socialLinks?.behance}>
            <FaBehance className="transition-transform hover:scale-105" size={24} color="#fff" />
          </SocialLinks>
          <SocialLinks url={socialLinks?.dribbble}>
            <FaDribbble className="transition-transform hover:scale-105" size={24} color="#fff" />
          </SocialLinks>
          <SocialLinks url={socialLinks?.whatsapp}>
            <FaWhatsapp className="transition-transform hover:scale-105" size={24} color="#fff" />
          </SocialLinks>
          <SocialLinks url={socialLinks?.telegram}>
            <FaTelegram className="transition-transform hover:scale-105" size={24} color="#fff" />
          </SocialLinks>
          <SocialLinks url={socialLinks?.email}>
            <FaEnvelope className="transition-transform hover:scale-105" size={24} color="#fff" />
          </SocialLinks>
          <SocialLinks url={socialLinks?.phone}>
            <FaPhone className="transition-transform hover:scale-105" size={24} color="#fff" />
          </SocialLinks>
          </footer>
      )}
    </>
  )
}