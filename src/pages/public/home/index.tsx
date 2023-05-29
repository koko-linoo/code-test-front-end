import CampusTechnologySection from "./components/CampusTechSection";
import ServiceSection from "./components/ServiceSection";
import PostSection from "./components/PostSection";
import ContactSection from "./components/ContactSection";
import FootPrintSection from "./components/FootPrintSection";
import SolutionSection from "./components/SolutionSection";
import StandOutSection from "./components/StandOutSection";
import ChallengeSection from "./components/ChallengeSection";
import WelcomeSection from "./components/WelcomeSection";
import PreviewTagSection from "./components/PreviewTagSection";

import './components/styles.css';

export default function HomePage() {
    return (
        <div className="grid grid-column">
            <WelcomeSection />
            <PreviewTagSection />
            <ChallengeSection />
            <SolutionSection />
            <StandOutSection />
            <ServiceSection />
            <FootPrintSection />
            <CampusTechnologySection />
            <PostSection />
            <ContactSection />
        </div>
    )
}