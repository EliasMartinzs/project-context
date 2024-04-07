import {
  FaChalkboardTeacher,
  FaFilm,
  FaPaintBrush,
  FaFileAlt,
  FaLaptop,
  FaShareAlt,
  FaCode,
  FaLanguage,
  FaBlog,
  FaUserSecret,
  FaGamepad,
  FaMusic,
  FaMobileAlt,
  FaChartLine,
  FaDumbbell,
  FaBriefcase,
  FaSearch,
  FaDesktop,
  FaBrain,
  FaMicrophone,
  FaGraduationCap,
  FaEdit,
  FaPalette,
  FaFileAudio,
  FaMoneyBillAlt,
  FaHandshake,
  FaFlask,
  FaHeart,
  FaRegPaperPlane,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { MdOutlineGames, MdNoAdultContent } from "react-icons/md";
import { HiOutlineAcademicCap } from "react-icons/hi";

import { IoHomeOutline, IoPaperPlaneOutline } from "react-icons/io5";

import { IoMdNotificationsOutline } from "react-icons/io";

export const menuIcons: { icon: IconType; href: string }[] = [
  {
    icon: IoHomeOutline,
    href: "/explorer",
  },
  {
    icon: IoMdNotificationsOutline,
    href: "/notifications",
  },
  {
    icon: IoPaperPlaneOutline,
    href: "/direct",
  },
] as const;

export const categoriesServices: {
  label: string;
  icon: IconType;
  href: string;
}[] = [
  {
    label: "Jogos",
    icon: MdOutlineGames,
    href: "/category/games",
  },
  {
    label: "Web Relacionamento",
    icon: FaHeart,
    href: "/category/web-relationship",
  },
  {
    label: "Aulas Particulares Online",
    icon: FaChalkboardTeacher,
    href: "/category/online-private-lessons",
  },
  {
    label: "Nudez",
    icon: MdNoAdultContent,
    href: "/category/nudez",
  },
  { label: "Edição de Vídeos", icon: FaFilm, href: "/category/video-editing" },
  {
    label: "Design Gráfico",
    icon: FaPaintBrush,
    href: "/category/graphic-design",
  },
  {
    label: "Trabalhos Acadêmicos",
    icon: HiOutlineAcademicCap,
    href: "/category/academic-work",
  },
  {
    label: "Assistência em Redação",
    icon: FaFileAlt,
    href: "/category/writing-assistance",
  },
  {
    label: "Suporte Técnico Remoto",
    icon: FaLaptop,
    href: "/category/remote-tech-support",
  },
  {
    label: "Consultoria de Mídias Sociais",
    icon: FaShareAlt,
    href: "/category/social-media-consulting",
  },
  {
    label: "Desenvolvimento Web",
    icon: FaCode,
    href: "/category/web-development",
  },
  {
    label: "Tradução Online",
    icon: FaLanguage,
    href: "/category/online-translation",
  },
  {
    label: "Criação de Conteúdo para Blogs/Vlogs",
    icon: FaBlog,
    href: "/category/blog-vlog-content-creation",
  },
  {
    label: "Assistência Virtual",
    icon: FaUserSecret,
    href: "/category/virtual-assistance",
  },
  {
    label: "Programação de Jogos",
    icon: FaGamepad,
    href: "/category/game-programming",
  },
  {
    label: "Música",
    icon: FaMusic,
    href: "/category/music",
  },
  {
    label: "Desenvolvimento de Aplicativos",
    icon: FaMobileAlt,
    href: "/category/app-development",
  },
  {
    label: "Serviços de Marketing Digital",
    icon: FaChartLine,
    href: "/category/digital-marketing-services",
  },
  {
    label: "Treinamento de Fitness Online",
    icon: FaDumbbell,
    href: "/category/online-fitness-training",
  },
  {
    label: "Coaching de Carreira Online",
    icon: FaBriefcase,
    href: "/category/online-career-coaching",
  },
  {
    label: "Suporte em Programação",
    icon: FaCode,
    href: "/category/coding-support",
  },
  {
    label: "Suporte em Design de Sites",
    icon: FaPaintBrush,
    href: "/category/website-design-support",
  },
  {
    label: "Serviços de SEO (Otimização para Mecanismos de Busca)",
    icon: FaSearch,
    href: "/category/seo-services",
  },
  {
    label: "Suporte em Tecnologia da Informação (TI)",
    icon: FaDesktop,
    href: "/category/it-support",
  },
  {
    label: "Aconselhamento Psicológico Online",
    icon: FaBrain,
    href: "/category/online-psychological-counseling",
  },
  {
    label: "Serviços de Produção de Podcasts",
    icon: FaMicrophone,
    href: "/category/podcast-production-services",
  },
  {
    label: "Desenvolvimento de Cursos Online",
    icon: FaGraduationCap,
    href: "/category/online-course-development",
  },
  {
    label: "Revisão e Edição de Textos",
    icon: FaEdit,
    href: "/category/text-review-editing",
  },
  {
    label: "Design de Logotipo e Identidade Visual",
    icon: FaPalette,
    href: "/category/logo-identity-design",
  },
  {
    label: "Transcrição de Áudio",
    icon: FaFileAudio,
    href: "/category/audio-transcription",
  },
  {
    label: "Consultoria Financeira Online",
    icon: FaMoneyBillAlt,
    href: "/category/online-financial-consulting",
  },
  {
    label: "Suporte em Marketing de Afiliados",
    icon: FaHandshake,
    href: "/category/affiliate-marketing-support",
  },
  {
    label: "Design de Interfaces de Usuário (UI)",
    icon: FaDesktop,
    href: "/category/user-interface-design",
  },
  {
    label: "Suporte em Ciência de Dados",
    icon: FaFlask,
    href: "/category/data-science-support",
  },
] as const;

export const languages: { label: string; value: string }[] = [
  { label: "Português", value: "Portuguese" },
  { label: "Inglês", value: "English" },
  { label: "Espanhol", value: "Spanish" },
  { label: "Francês", value: "French" },
  { label: "Alemão", value: "German" },
  { label: "Mandarim", value: "Mandarin" },
  { label: "Hindi", value: "Hindi" },
  { label: "Árabe", value: "Arabic" },
  { label: "Bengali", value: "Bengali" },
  { label: "Russo", value: "Russian" },
  { label: "Japonês", value: "Japanese" },
  { label: "Lahnda", value: "Lahnda" },
  { label: "Javanês", value: "Javanese" },
  { label: "Telugu", value: "Telugu" },
  { label: "Marathi", value: "Marathi" },
  { label: "Vietnamita", value: "Vietnamese" },
  { label: "Tâmil", value: "Tamil" },
  { label: "Urdu", value: "Urdu" },
  { label: "Turco", value: "Turkish" },
  { label: "Italiano", value: "Italian" },
] as const;
