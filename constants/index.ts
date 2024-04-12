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
    href: "/category/Jogos",
  },
  {
    label: "Web Relacionamento",
    icon: FaHeart,
    href: "/category/Web-Relacionamento",
  },
  {
    label: "Aulas Particulares Online",
    icon: FaChalkboardTeacher,
    href: "/category/Aulas-Particulares-Online",
  },
  {
    label: "Nudez",
    icon: MdNoAdultContent,
    href: "/category/Nudez",
  },
  {
    label: "Edição de Vídeos",
    icon: FaFilm,
    href: "/category/Edição-de-Vídeos",
  },
  {
    label: "Design Gráfico",
    icon: FaPaintBrush,
    href: "/category/Design-Gráfico",
  },
  {
    label: "Trabalhos Acadêmicos",
    icon: HiOutlineAcademicCap,
    href: "/category/Trabalhos-Acadêmicos",
  },
  {
    label: "Assistência em Redação",
    icon: FaFileAlt,
    href: "/category/Assistência-em-Redação",
  },
  {
    label: "Suporte Técnico Remoto",
    icon: FaLaptop,
    href: "/category/Suporte-Técnico-Remoto",
  },
  {
    label: "Consultoria de Mídias Sociais",
    icon: FaShareAlt,
    href: "/category/Consultoria-de-Mídias-Sociais",
  },
  {
    label: "Desenvolvimento Web",
    icon: FaCode,
    href: "/category/Desenvolvimento-Web",
  },
  {
    label: "Tradução Online",
    icon: FaLanguage,
    href: "/category/Tradução-Online",
  },
  {
    label: "Criação de Conteúdo para Blogs/Vlogs",
    icon: FaBlog,
    href: "/category/Criação-de-Conteúdo-para-Blogs/Vlogs",
  },
  {
    label: "Assistência Virtual",
    icon: FaUserSecret,
    href: "/category/Assistência-Virtual",
  },
  {
    label: "Programação de Jogos",
    icon: FaGamepad,
    href: "/category/Programação-de-Jogos",
  },
  {
    label: "Música",
    icon: FaMusic,
    href: "/category/Música",
  },
  {
    label: "Desenvolvimento de Aplicativos",
    icon: FaMobileAlt,
    href: "/category/Desenvolvimento-de-Aplicativos",
  },
  {
    label: "Serviços de Marketing Digital",
    icon: FaChartLine,
    href: "/category/Serviços-de-Marketing-Digital",
  },
  {
    label: "Treinamento de Fitness Online",
    icon: FaDumbbell,
    href: "/category/Treinamento-de-Fitness-Online",
  },
  {
    label: "Coaching de Carreira Online",
    icon: FaBriefcase,
    href: "/category/Coaching-de-Carreira-Online",
  },
  {
    label: "Suporte em Programação",
    icon: FaCode,
    href: "/category/Suporte-em-Programação",
  },
  {
    label: "Suporte em Design de Sites",
    icon: FaPaintBrush,
    href: "/category/Suporte-em-Design-de-Sites",
  },
  {
    label: "Serviços de SEO (Otimização para Mecanismos de Busca)",
    icon: FaSearch,
    href: "/category/Serviços-de-SEO-(Otimização-para-Mecanismos-de-Busca)",
  },
  {
    label: "Suporte em Tecnologia da Informação (TI)",
    icon: FaDesktop,
    href: "/category/Suporte-em-Tecnologia-da-Informação-(TI)",
  },
  {
    label: "Aconselhamento Psicológico Online",
    icon: FaBrain,
    href: "/category/Aconselhamento-Psicológico-Online",
  },
  {
    label: "Serviços de Produção de Podcasts",
    icon: FaMicrophone,
    href: "/category/Serviços-de-Produção-de-Podcasts",
  },
  {
    label: "Desenvolvimento de Cursos Online",
    icon: FaGraduationCap,
    href: "/category/Desenvolvimento-de-Cursos-Online",
  },
  {
    label: "Revisão e Edição de Textos",
    icon: FaEdit,
    href: "/category/Revisão-e-Edição-de-Textos",
  },
  {
    label: "Design de Logotipo e Identidade Visual",
    icon: FaPalette,
    href: "/category/Design-de-Logotipo-e-Identidade-Visual",
  },
  {
    label: "Transcrição de Áudio",
    icon: FaFileAudio,
    href: "/category/Transcrição-de-Áudio",
  },
  {
    label: "Consultoria Financeira Online",
    icon: FaMoneyBillAlt,
    href: "/category/Consultoria-Financeira-Online",
  },
  {
    label: "Suporte em Marketing de Afiliados",
    icon: FaHandshake,
    href: "/category/Suporte-em-Marketing-de-Afiliados",
  },
  {
    label: "Design de Interfaces de Usuário (UI)",
    icon: FaDesktop,
    href: "/category/Design-de-Interfaces-de-Usuário-(UI)",
  },
  {
    label: "Suporte em Ciência de Dados",
    icon: FaFlask,
    href: "/category/Suporte-em-Ciência-de-Dados",
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
