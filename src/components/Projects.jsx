import React from 'react'

const Projects = () => {
  return (
    <>
      <div className="head-project" id='project'>
        <p>MY WORK</p>
        <h1>Awesome Projects</h1>
      </div>
    <div className="main-project">
    <div className="crousal-1">
    <div
  id="carouselExampleIndicators"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./Image/Project-1/podcastList.PNG" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="./Image/Project-1/createEppisodes.PNG" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="./Image/Project-1/signup.PNG" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div className="discription">
  <h3>Podcast Platform</h3>
  <ul>
    <li>Designed SPA (Single Page Application) using React.Js, utilized React Router for navigation and routing, features a responsive web design.</li>
    <li>Deployed application seamlessly combines the power of React, Firebase, and Redux Toolkit to offer a user-friendly podcast experience.</li>
    <li>Sign up, sign in, and customize your profile effortlessly.</li>
    <li>Customized the UI to maintain the core functionalities.</li>
  </ul>
  <div className="btn-all">
  <a href="https://github.com/rahul4328/Podcast-App" target='blank' rel="noreferrer"><button>Code</button></a>
    <a href="https://podcast-rahul-ranjan.netlify.app/" target="_blank" rel="noreferrer">
  <button>Live Project</button>
</a>
</div>
</div>

</div>


      <div className="crousal-2">
      <div
  id="carouselExampleCaptions"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src="./Image/Movie/movies11.PNG" className="d-block w-100" alt=".." />
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div className="carousel-item">
    <img src="./Image/Movie/movie33.PNG" className="d-block w-100" alt=".." />
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div className="carousel-item">
    <img src="./Image/Movie/king2.PNG" className="d-block w-100" alt=".." />
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div> 
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="discription">
  <h3>Movix- TMDB Clone</h3>
  <ul>
    <li>Designed SPA (Single Page Application) using React .js, utilized React Router for navigation and routing, used SCSS for styling, features a responsive web design.</li>
    <li>Implemented infinite scrolling , state management using Redux and error handling.</li>
    <li>Implemented  data filtering, enabling users to organize movie lists by release date, rating, or popularity.</li>
    <li>Integrated with a movie API to fetch real-time movie data.</li>
  </ul>
  <div className="btn-all">
  <a href="https://splendorous-panda-0ac639.netlify.app/" target='_blank' rel="noreferrer"><button>Code</button></a>
    <a href="https://splendorous-panda-0ac639.netlify.app/" target="_blank" rel="noreferrer">
  <button>Live Project</button>
</a>
</div>
</div>

      </div>
    </div>
    </>
  )
}

export default Projects
