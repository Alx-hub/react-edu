import Head from "./components/Header.jsx";
import TabsSection from "./components/TabsSection.jsx";
import TeachingSection from "./components/TeachingSection.jsx";


export default function App() {

    return (
        <>
            <Head/>
            <main>
                <TeachingSection/>
                <TabsSection/>
            </main>
        </>
    )
}

