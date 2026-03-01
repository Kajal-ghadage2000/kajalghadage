import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from './hooks/useTheme';
import { useMousePosition } from './hooks/useMousePosition';
import { useActiveSection } from './hooks/useActiveSection';

function App() {
    const { isDarkMode, toggleTheme } = useTheme();
    const mousePos = useMousePosition();
    const activeSection = useActiveSection();

    return (
        <div className="relative min-h-screen bg-transparent">
            {/* Theme Toggle Button */}
            <button
                onClick={toggleTheme}
                className="fixed top-1 right-1 md:top-8 md:right-12 z-50 p-3 bg-transparent backdrop-blur-md transition-all hover:scale-110 group flex items-center justify-center w-12 h-12"
                title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
                <div className="relative w-5 h-5">
                    <FiSun className={`absolute inset-0 w-5 h-5 text-[var(--accent)] transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) transform ${isDarkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'}`} />
                    <FiMoon className={`absolute inset-0 w-5 h-5 text-[var(--accent)] transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) transform ${isDarkMode ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
                </div>
            </button>

            {/* Spotlight Effect */}
            <div
                className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 lg:block"
                style={{
                    background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, ${isDarkMode ? 'rgba(94, 234, 212, 0.15)' : 'rgba(13, 148, 136, 0.1)'}, transparent 80%)`,
                }}
            />

            <div className="mx-auto max-w-screen-xxl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
                <div className="lg:flex lg:justify-between lg:gap-4">
                    <Sidebar activeSection={activeSection} />
                    <MainContent />
                </div>
            </div>
        </div>
    );
}

export default App;
