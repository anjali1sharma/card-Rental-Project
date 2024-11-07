// App.tsx
import React, { FC } from 'react';
import SedanCard from './components/SedanCard';
import SuvCard from './components/SuvCard';
import LuxuryCard from './components/LuxuryCard';



const App: FC = () => (
    <div className="container">
        <SedanCard/>
        <SuvCard/>
        <LuxuryCard/>
    </div>
);

export default App;