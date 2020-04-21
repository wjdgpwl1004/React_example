import React, { useState } from 'react';
import Tab from './Tab';

let initialTabs = [
    { id: 1, text: 'A', isOn: true, url: '/' },
    { id: 2, text: 'B', isOn: false, url: '/Mypage'},
    { id: 3, text: 'C', isOn: false, url: '/Profile' },
    { id: 4, text: 'D', isOn: false, url: '/MemberList' }
];

function TabList() {
    const [tabs, setTabs] = useState(initialTabs);

    const onClick = id => {
        setTabs(tabs.map(tab => id === tab.id ? { ...tab, isOn: true } : { ...tab, isOn: false }));
    };

    return <>
        {
            tabs.map(({ id, text, isOn, url }) => (
                <Tab
                    id={id}
                    onClick={onClick} 
                    text={text}
                    isOn={isOn}
                    url={url}
                    key={id}
                />
            ))
        }
    </>
}

export default TabList; 