import { useState, useEffect } from "react";
import svgPaths from "@/imports/svg-cn1bb5bfku";
import { ChevronUp } from "lucide-react";
import { DocCard } from "@/app/components/DocCard";

function RunyxLogo() {
  return (
    <div
      className="h-[40px] relative shrink-0 w-[42px]"
      data-name="RUNYX logo"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 63.5596 60.7969"
      >
        <g clipPath="url(#clip0_1_201)" id="RUNYX logo">
          <path
            d={svgPaths.p30a10b80}
            fill="url(#paint0_linear_1_201)"
            id="Union"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_201"
            x1="-90.9696"
            x2="155.324"
            y1="56.3384"
            y2="56.3384"
          >
            <stop offset="0.264423" stopColor="#9100FF" />
            <stop offset="0.783654" stopColor="#D70004" />
          </linearGradient>
          <clipPath id="clip0_1_201">
            <rect
              fill="white"
              height="60.7969"
              width="63.5596"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] =
    useState("overview");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      // Update active section based on scroll position
      const sections = [
        "overview",
        "privacy-policy",
        "privacy-collect",
        "privacy-not-collect",
        "privacy-use",
        "privacy-sharing",
        "privacy-providers",
        "privacy-controls",
        "privacy-retention",
        "privacy-rights",
        "privacy-contact",
      ];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition =
        element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#151515] min-h-screen text-[#cbcbcb] font-['Roboto_Condensed',sans-serif]">
      {/* Header */}
      <header className="bg-[#151515] border-b border-[#34322e] fixed top-0 left-0 right-0 z-50">
        <div className="max-w-[1400px] mx-auto px-8 py-4 flex items-center">
          <RunyxLogo />
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto pt-[80px] flex gap-0 pb-20">
        {/* Side Navigation */}
        <aside className="w-[220px] shrink-0 sticky top-[100px] h-fit">
          <nav className="py-4">
            <button
              onClick={() => scrollToSection("overview")}
              className={`w-full text-left px-6 py-2.5 transition-all duration-200 text-sm ${
                activeSection === "overview"
                  ? "bg-gradient-to-r from-[#4a2a5a] to-transparent text-white border-l-4 border-l-[#9100ff]"
                  : "text-[#cbcbcb]/80 hover:bg-[#1f1f1f] hover:text-white border-l-4 border-l-transparent"
              }`}
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection("privacy-policy")}
              className={`w-full text-left px-6 py-2.5 transition-all duration-200 text-sm ${
                activeSection === "privacy-policy"
                  ? "bg-gradient-to-r from-[#4a2a5a] to-transparent text-white border-l-4 border-l-[#9100ff]"
                  : "text-[#cbcbcb]/80 hover:bg-[#1f1f1f] hover:text-white border-l-4 border-l-transparent"
              }`}
            >
              Privacy Policy
            </button>

            <div className="ml-4">
              <button
                onClick={() =>
                  scrollToSection("privacy-collect")
                }
                className={`w-full text-left px-6 py-2 transition-all duration-200 text-xs ${
                  activeSection === "privacy-collect"
                    ? "text-white"
                    : "text-[#cbcbcb]/60 hover:text-white"
                }`}
              >
                What we collect
              </button>
              <button
                onClick={() =>
                  scrollToSection("privacy-not-collect")
                }
                className={`w-full text-left px-6 py-2 transition-all duration-200 text-xs ${
                  activeSection === "privacy-not-collect"
                    ? "text-white"
                    : "text-[#cbcbcb]/60 hover:text-white"
                }`}
              >
                What we do not collect/store
              </button>
              <button
                onClick={() => scrollToSection("privacy-use")}
                className={`w-full text-left px-6 py-2 transition-all duration-200 text-xs ${
                  activeSection === "privacy-use"
                    ? "text-white"
                    : "text-[#cbcbcb]/60 hover:text-white"
                }`}
              >
                How we use the data
              </button>
              <button
                onClick={() =>
                  scrollToSection("privacy-sharing")
                }
                className={`w-full text-left px-6 py-2 transition-all duration-200 text-xs ${
                  activeSection === "privacy-sharing"
                    ? "text-white"
                    : "text-[#cbcbcb]/60 hover:text-white"
                }`}
              >
                Sharing & leaderboards
              </button>
              <button
                onClick={() =>
                  scrollToSection("privacy-providers")
                }
                className={`w-full text-left px-6 py-2 transition-all duration-200 text-xs ${
                  activeSection === "privacy-providers"
                    ? "text-white"
                    : "text-[#cbcbcb]/60 hover:text-white"
                }`}
              >
                Service providers
              </button>
              <button
                onClick={() =>
                  scrollToSection("privacy-controls")
                }
                className={`w-full text-left px-6 py-2 transition-all duration-200 text-xs ${
                  activeSection === "privacy-controls"
                    ? "text-white"
                    : "text-[#cbcbcb]/60 hover:text-white"
                }`}
              >
                Controls (Stop syncing / Disconnect)
              </button>
              <button
                onClick={() =>
                  scrollToSection("privacy-retention")
                }
                className={`w-full text-left px-6 py-2 transition-all duration-200 text-xs ${
                  activeSection === "privacy-retention"
                    ? "text-white"
                    : "text-[#cbcbcb]/60 hover:text-white"
                }`}
              >
                Retention
              </button>
              <button
                onClick={() =>
                  scrollToSection("privacy-rights")
                }
                className={`w-full text-left px-6 py-2 transition-all duration-200 text-xs ${
                  activeSection === "privacy-rights"
                    ? "text-white"
                    : "text-[#cbcbcb]/60 hover:text-white"
                }`}
              >
                Your rights & requests
              </button>
              <button
                onClick={() =>
                  scrollToSection("privacy-contact")
                }
                className={`w-full text-left px-6 py-2 transition-all duration-200 text-xs ${
                  activeSection === "privacy-contact"
                    ? "text-white"
                    : "text-[#cbcbcb]/60 hover:text-white"
                }`}
              >
                Contact
              </button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-12 py-8">
          {/* Overview Section */}
          <section id="overview" className="mb-20">
            <h2
              className="text-6xl font-light mb-6 bg-clip-text bg-gradient-to-r from-[#9100ff] from-[26.875%] to-[#d70004] to-[128.13%]"
              style={{
                WebkitTextFillColor: "transparent",
                fontStyle: "italic",
              }}
            >
              Support Page
            </h2>
            <p className="text-[#cbcbcb]/90 font-light leading-relaxed text-base mb-3">
              Runyx connects with your Garmin account to
              automatically sync your running activities and
              provide personalized analytics. We prioritize your
              privacy and only collect the minimal data
              necessary to power your running experience.
            </p>
            <p className="text-[#cbcbcb]/90 font-light leading-relaxed text-base">
              Here you'll find information about how we handle
              your data, what permissions we require, and how to
              manage your Garmin connection.
            </p>
          </section>

          {/* Privacy Policy */}
          <section id="privacy-policy" className="mb-12">
            <h2
              className="text-3xl font-normal mb-3 bg-clip-text bg-gradient-to-r from-[#9100ff] from-[26.875%] to-[#d70004] to-[128.13%]"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              Privacy Policy
            </h2>
            <p className="text-[#34322e] font-light text-sm mb-6">
              Effective date: 2026-01-31
            </p>
          </section>

          {/* What we collect */}
          <section id="privacy-collect" className="mb-12">
            <h3
              className="text-2xl font-normal mb-3 bg-clip-text bg-gradient-to-r from-[#9100ff] from-[26.875%] to-[#d70004] to-[128.13%]"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              What we collect
            </h3>
            <p className="text-[#cbcbcb]/90 font-light leading-relaxed text-base">
              Account information you provide (e.g., username,
              email). If you connect Garmin: activity summary
              data required for Runyx features (e.g., distance,
              duration, cadence/pace when available, and
              activity date).
            </p>
          </section>

          {/* What we do not collect/store */}
          <section id="privacy-not-collect" className="mb-12">
            <h3
              className="text-2xl font-normal mb-3 bg-clip-text bg-gradient-to-r from-[#9100ff] from-[26.875%] to-[#d70004] to-[128.13%]"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              What we do not collect/store
            </h3>
            <p className="text-[#cbcbcb]/90 font-light leading-relaxed text-base">
              We do not store maps, routes, GPS trackpoints,
              precise locations, or photos from your activities.
            </p>
          </section>

          {/* How we use the data */}
          <section id="privacy-use" className="mb-12">
            <h3
              className="text-2xl font-normal mb-3 bg-clip-text bg-gradient-to-r from-[#9100ff] from-[26.875%] to-[#d70004] to-[128.13%]"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              How we use the data
            </h3>
            <p className="text-[#cbcbcb]/90 font-light leading-relaxed text-base">
              To show your running progress in Runyx (personal
              activity history and totals). To compute Runyx
              aggregates (daily/weekly totals), XP, streaks, and
              levels. To perform anti-cheat checks (Runner
              Integrity) using summary metrics.
            </p>
          </section>

          {/* Sharing & leaderboards */}
          <section id="privacy-sharing" className="mb-12">
            <h3
              className="text-2xl font-normal mb-3 bg-clip-text bg-gradient-to-r from-[#9100ff] from-[26.875%] to-[#d70004] to-[128.13%]"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              Sharing & leaderboards
            </h3>
            <p className="text-[#cbcbcb]/90 font-light leading-relaxed text-base">
              By default, your detailed activity list is visible
              only to you. If you opt in to
              leaderboards/parties, Runyx may share aggregated
              metrics (e.g., total distance, XP, level, rank)
              with other users in your parties/leaderboards. We
              do not share your maps/routes/precise location
              data (we do not store it).
            </p>
          </section>

          {/* Service providers */}
          <section id="privacy-providers" className="mb-12">
            <h3
              className="text-2xl font-normal mb-3 bg-clip-text bg-gradient-to-r from-[#9100ff] from-[26.875%] to-[#d70004] to-[128.13%]"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              Service providers
            </h3>
            <p className="text-[#cbcbcb]/90 font-light leading-relaxed text-base">
              We may use trusted service providers (e.g., cloud
              hosting and database services) to operate Runyx.
              They process data only to provide services to us.
            </p>
          </section>

          {/* Controls (Stop syncing / Disconnect) */}
          <section id="privacy-controls" className="mb-12">
            <h3
              className="text-2xl font-normal mb-3 bg-clip-text bg-gradient-to-r from-[#9100ff] from-[26.875%] to-[#d70004] to-[128.13%]"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              Controls (Stop syncing / Disconnect)
            </h3>
            <p className="text-[#cbcbcb]/90 font-light leading-relaxed text-base mb-3">
              <span className="font-normal">Stop syncing:</span>{" "}
              you can stop syncing at any time. Runyx will stop
              pulling new Garmin data, and your existing Runyx
              progress remains visible.
            </p>
            <p className="text-[#cbcbcb]/90 font-light leading-relaxed text-base">
              <span className="font-normal">Disconnect:</span>{" "}
              you can disconnect Garmin at any time. Runyx will
              revoke access and stop future syncing. Runyx will
              also delete Garmin-derived activity data stored in
              Runyx (and related aggregates/XP derived from that
              Garmin data).
            </p>
          </section>

          {/* Retention */}
          <section id="privacy-retention" className="mb-12">
            <h3
              className="text-2xl font-normal mb-3 bg-clip-text bg-gradient-to-r from-[#9100ff] from-[26.875%] to-[#d70004] to-[128.13%]"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              Retention
            </h3>
            <p className="text-[#cbcbcb]/90 font-light leading-relaxed text-base">
              We retain only the minimum data needed for the
              features you enable. If you request deletion, we
              delete your Garmin-imported activity summaries and
              related aggregates within a reasonable timeframe,
              subject to legal obligations.
            </p>
          </section>

          {/* Your rights & requests */}
          <section id="privacy-rights" className="mb-12">
            <h3
              className="text-2xl font-normal mb-3 bg-clip-text bg-gradient-to-r from-[#9100ff] from-[26.875%] to-[#d70004] to-[128.13%]"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              Your rights & requests
            </h3>
            <p className="text-[#cbcbcb]/90 font-light leading-relaxed text-base">
              You may request access, correction, export, or
              deletion of your data by contacting us at the
              email below. You can also withdraw Garmin
              permission by disconnecting.
            </p>
          </section>

          {/* Contact */}
          <section id="privacy-contact" className="mb-12">
            <h3
              className="text-2xl font-normal mb-3 bg-clip-text bg-gradient-to-r from-[#9100ff] from-[26.875%] to-[#d70004] to-[128.13%]"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              Contact
            </h3>
            <p className="text-[#cbcbcb]/90 font-light leading-relaxed text-base">
              Support:{" "}
              <a
                href="mailto:support@runyx.app"
                className="bg-clip-text bg-gradient-to-r from-[#9100ff] from-[26.875%] to-[#d70004] to-[128.13%] hover:opacity-80 transition-opacity"
                style={{ WebkitTextFillColor: "transparent" }}
              >
                support@runyx.app
              </a>
            </p>
          </section>
        </main>
      </div>

      {/* Floating Return to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-[#9100ff] to-[#d70004] text-[#eaeaea] p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
          aria-label="Return to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}