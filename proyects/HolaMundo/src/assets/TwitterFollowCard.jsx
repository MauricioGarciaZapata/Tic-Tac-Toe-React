import { useState } from 'react' 
// eslint-disable-next-line react/prop-types
export function TwitterFollowCard({ arroba, userName, name,inicialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(inicialIsFollowing);
  console.log(inicialIsFollowing)
  const text = isFollowing ? "Siguiendo" : "seguir";
  const buttonClassName = isFollowing
    ? "tw-card-button is-following"
    : "tw-card-button";

  const handleClick = () =>{
    setIsFollowing(!isFollowing)
    
  }
  return (
    <article className="tw-card">
      <header className="tw-card-header">
        <img
          className="tw-card-header-img"
          src={`https://unavatar.io/${userName}/`}
          alt=""
        />
        <div className="tw-card-header-div">
          <strong>{name}</strong>
          <span className="tw-card-header-span">{arroba(userName)}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>{text}</button>
        
      </aside>
    </article>
  );
}
