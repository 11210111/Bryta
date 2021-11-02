export default function ActorProfile({ actor }) {
  return (
    <div id="actorprofile-container">
      <h3>프로필</h3>
      <div className="actorprofile-name">
        배우이름: {actor && actor?.actorName}
      </div>
      <div className="actorprofile-company">
        소속사: {actor && actor?.company}
      </div>
      <div className="actorprofile-body">신체: {actor && actor?.bodySize}</div>
      <div className="actorprofile-debut">데뷔: {actor && actor?.debut}</div>
    </div>
  );
}
