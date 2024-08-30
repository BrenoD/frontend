"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MenuItem {
    name: string;
    price: number;
}

interface MenuContextType {
    tableNumber: string | null;
    selectedItems: MenuItem[];
    setTableNumber: (number: string | null) => void;
    setSelectedItems: (items: MenuItem[]) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [tableNumber, setTableNumber] = useState<string | null>(null);
    const [selectedItems, setSelectedItems] = useState<MenuItem[]>([]);

    return (
        <MenuContext.Provider value={{ tableNumber, selectedItems, setTableNumber, setSelectedItems }}>
            {children}
        </MenuContext.Provider>
    );
};

export const useMenu = () => {
    const context = useContext(MenuContext);
    if (context === undefined) {
        throw new Error('useMenu must be used within a MenuProvider');
    }
    return context;
};
