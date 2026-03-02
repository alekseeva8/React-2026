import { useNavigate, useLocation } from "react-router-dom";
import { TabStripSelectEventArguments } from "@progress/kendo-react-layout";
import HomeView, { HomeProps } from "../views/Home";

const HomeContainer = () => {
  const pages = [
    { title: "О нас", path: "/about" },
    { title: "Счетчики", path: "/counters" },
    { title: "Войти", path: "/login" },
    { title: "Войти c помощью redux", path: "/login-redux" },
    { title: "Войти c помощью formik", path: "/login-formik" },
  ];

  const location = useLocation();
  const selectedIndex = pages.findIndex((page) => page.path === location.pathname);

  //при клике на таб снавигировать программно на соответсвующую страницу
  const navigate = useNavigate();
  const handleSelect = (e: TabStripSelectEventArguments) => {
    navigate(pages[e.selected].path);
  };

  const props: HomeProps = {
    pages: pages,
    selectedIndex: selectedIndex,
    onSelect: handleSelect,
  };

  return <HomeView {...props} />;
};

export default HomeContainer;
