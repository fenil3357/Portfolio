import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Icon(props) {
  let { logo,url, i } = props;
  if(logo === 'Github') logo = faGithub;
  if(logo === 'Instagram') logo = faInstagram;
  if(logo === 'Linkedin') logo = faLinkedin;
  if(logo === 'Twitter') logo = faTwitter;
  if(logo === 'Email') logo = faEnvelope;

  return (
    <motion.div
      initial={{ scale: 0, y: 10 * 0.5 * (i ?? 1) }}
      animate={{ scale: 1, y: 0 }}
      whileHover={{ scale: 1.2 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5, delay: i * 0.35 }}
      className="scale-100"
    >
      <a
        target="_blank"
        rel="noreferrer"
        href={url}
        className="rounded-full p-2 m-2 border-[0.6px] transition-all 
        ease-in-out border-slate-400 group
          hover:bg-blue-100 hover:border-blue-300"
      >
        <FontAwesomeIcon
          className="group-hover:text-blue-700 group-hover:scale-110"
          icon={logo}
        />
      </a>
    </motion.div>
  );
}
