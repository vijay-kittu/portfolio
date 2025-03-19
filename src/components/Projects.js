export const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-sections">
        <div className="project-section">
          <div className="project-section-text ">
            <h3>Food Ordering Website</h3>
            <p>
              One stop to order all your favourite fast food dishes. Login with
              your account and enjoy delicious food with free delivery!
            </p>
            <a
              href="https://fastfeast-foodorder.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
          <div>
            <img
              className="img-food-order"
              src="images/project_food-order.png"
              alt="Food Order Website Project"
            />
          </div>
        </div>
        <div className="project-section">
          <div className="project-section-text">
            <h3> Global Chat App</h3>
            <p>
              Have a blast chatting with people all over the world on our
              website. Register now and form new friendships , all while
              enjoying complete anonymity!
            </p>
            <a
              href="https://hythere.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
          <div>
            <img
              className="img-chat-app"
              src="images/project_chat-app.png"
              alt="Chat App Project"
            />
          </div>
        </div>
        {/*<div className="project-section">
          <div className="project-section-text">
            <h3>Portfolio Website</h3>
            <p>
              Perseverance is the key to success. Challenges and failures test
              determination, but persistence leads to achievement. History shows
              that great minds, like Thomas Edison, overcame setbacks through
              resilience. Success isn’t immediate; it requires patience, effort,
              and learning from mistakes. Those who never give up eventually
              reach their goals.
            </p>
          </div>
          <div>
            <img src="images/project_chat-app.png" alt="Chat App Project" />
          </div>
        </div>*/}
      </div>
    </div>
  );
};
