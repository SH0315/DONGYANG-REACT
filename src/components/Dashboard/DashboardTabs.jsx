import "./DashboardTabs.css";

function DashboardTabs({
  currentTab,
  setCurrentTab,
}) {
  return (
    <div className="tabs">
      <button
        className={
          currentTab === "all"
            ? "tab active"
            : "tab"
        }
        onClick={() => setCurrentTab("all")}
      >
        전체
      </button>

      <button
        className={
          currentTab === "domestic"
            ? "tab active"
            : "tab"
        }
        onClick={() =>
          setCurrentTab("domestic")
        }
      >
        국내 배송
      </button>

      <button
        className={
          currentTab === "international"
            ? "tab active"
            : "tab"
        }
        onClick={() =>
          setCurrentTab("international")
        }
      >
        해외 직구
      </button>
    </div>
  );
}

export default DashboardTabs;