
import React, {useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { TabStripSelectEventArguments } from '@progress/kendo-react-layout';
import HomeView, {HomeProps} from "../views/Home";

const HomeContainer = () => {
    const pages = [{ title: 'О нас', path: '/about' }, { title: 'Счетчики', path: '/counters' }];

    const [selected, setSelected] = useState(-1);

    //для синхронизации выбранного таба и url (при клике на таб)
    const navigate = useNavigate();
    const handleSelect = (e: TabStripSelectEventArguments) => {
        navigate(pages[e.selected].path);
        setSelected(e.selected);
    };

    //для синхронизации выбранного таба и url (при ручном вводе url)
    const location = useLocation();
    useEffect(() => {
        const index = pages.findIndex(page => page.path === location.pathname);
        const isValidPath = index >= 0;
        if (!isValidPath && location.pathname !== '/') {
            navigate('/404');
        }
        setSelected(isValidPath ? index : -1);
    }, [location.pathname]);

    const props: HomeProps = {
        pages: pages,
        selectedIndex: selected,
        onSelect: handleSelect
    }

    return (< HomeView {...props} />);
}

export default HomeContainer;




