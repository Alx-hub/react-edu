import Head from "./components/Header/Header.jsx";
import TabsSection from "./components/TabsSection.jsx";
import TeachingSection from "./components/TeachingSection.jsx";
import FeedbackSection from "./components/FeedbackSection.jsx";


export default function App() {

    return (
        <>
            <Head/>
            <main>
                <TeachingSection/>
                <TabsSection/>
                <FeedbackSection />
            </main>
        </>
    )
}

