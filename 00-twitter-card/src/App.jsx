import { TwitterFollowCard } from "../TwitterFollowCard";
import "./app.css";

function App() {
  const formatUserName = (userName) => `@${userName}`;
  return (
    <>
      <TwitterFollowCard
        formatUserName={formatUserName}
        name={"Kevo"}
        userName={"elkevo"}
        initialFollowing={true}
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        name={"Rita"}
        userName={"larit"}
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        name={"Sara"}
        userName={"sarinha"}
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        name={"Si"}
        userName={"siempresi"}
      />
    </>
  );
}

export default App;
