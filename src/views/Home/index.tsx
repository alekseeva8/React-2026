import React from "react";
import { Outlet } from "react-router-dom";
import { TabStrip, TabStripSelectEventArguments, TabStripTab } from "@progress/kendo-react-layout";
import * as styles from "./styles";

export type Page = {
  title: string;
  path: string;
};

export type HomeProps = {
  pages: Page[];
  selectedIndex: number;
  onSelect: (e: TabStripSelectEventArguments) => void;
};

const HomeView = ({ pages, selectedIndex, onSelect }: HomeProps) => {
  return (
    <>
      <TabStrip
        selected={selectedIndex >= 0 ? selectedIndex : undefined}
        onSelect={onSelect}
        style={styles.tabStrip}
      >
        {pages.map((element, index) => {
          return (
            <TabStripTab
              key={index}
              title={
                <span style={styles.getTabStyle(index === selectedIndex)}>{element.title}</span>
              }
            >
              <Outlet />
            </TabStripTab>
          );
        })}
      </TabStrip>
    </>
  );
};

export default HomeView;
