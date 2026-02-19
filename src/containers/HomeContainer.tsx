
import React, { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { TabStrip, TabStripSelectEventArguments, TabStripTab } from '@progress/kendo-react-layout';
import * as styles from '../views/Home/styles';

const HomeContainer = () => {
    const pages = [{ title: 'О нас', path: '/about' }, { title: 'Счетчики', path: '/counters' }];

    const [selected, setSelected] = React.useState<number | undefined>(undefined);

    //для синхронизации выбранного таба и url (при клике на таб)
    const navigate = useNavigate();
    const handleSelect = (e: TabStripSelectEventArguments) => {
        if (e.selected !== null && e.selected !== undefined) {
            navigate(pages[e.selected].path);
            setSelected(e.selected);
        }
    };

    //для синхронизации выбранного таба и url (при ручном вводе url)
    const location = useLocation();
    useEffect(() => {
        const index = pages.findIndex(page => page.path === location.pathname);
        const isValidPath = index >= 0;
        if (!isValidPath && location.pathname !== '/') {
            navigate('/404');
        }
        setSelected(isValidPath ? index : undefined);
    }, [location.pathname]);

    return (
        <TabStrip selected={selected} onSelect={handleSelect}>
            {pages.map((element, index) => {
                return (
                    <TabStripTab
                        key={index}
                        title={
                            <span style={styles.getTabStyle(index === selected)}>
                                {element.title}
                            </span>
                        } >
                        <Outlet />
                    </TabStripTab>
                );
            })}
        </TabStrip>
    );
}

export default HomeContainer;




