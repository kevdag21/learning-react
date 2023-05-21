import { useState } from "react";

export function TwitterFollowCard({name, userName, formatUserName, initialFollowing}) {

   const [isFollowing, setIsFollowing] = useState(initialFollowing);

  const text = isFollowing ? "Siguiendo" : "Seguir"
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleFollow = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="Avatar de kikobeats"
          src={`https://unavatar.io/${name}`}
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName ">{formatUserName(userName)}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleFollow}>{text}</button>
      </aside>
    </article>
  );
}
