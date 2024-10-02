import Head from "./components/Header/Header.jsx";
import DifferencesSection from "./components/DifferencesSection.jsx";
import TeachingSection from "./components/TeachingSection.jsx";
import FeedbackSection from "./components/FeedbackSection.jsx";
import IntroSection from "./components/IntroSection.jsx";
import TabsSection from "./components/TabsSection.jsx";
import {useState} from "react";
import EffectSection from "./components/EffectSection.jsx";


export default function App() {
    const [activeTab, setActiveTab] = useState('effect');

    return (
        <>
            <Head/>
            <main>
                <IntroSection/>
                <TabsSection active={activeTab} onChange={(current) => setActiveTab(current)}/>
                {activeTab === 'main' &&
                    <>
                        <TeachingSection/>
                        <DifferencesSection/>
                    </>}
                {activeTab === 'feedback' && <FeedbackSection/>}
                {activeTab === 'effect' && <EffectSection/>}


            </main>
        </>
    )
}

