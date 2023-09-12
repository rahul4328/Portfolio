import React from 'react'

const Header = () => {
  return (
    <>
      <nav>
        <div className='name'>
          <h1>Rahul Ranjan</h1>
        </div>
        <div className='anker'>
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="https://docs.google.com/document/d/1xoP58kh4KgN3QjUD51FBTp9E6JacIxBv4xNauWckqGc/edit?usp=sharing" target='_blank'>Resume</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <section className='middle' id='home'>
        <div className='left-content'>
              <h2>Hello, I'm Rahul Ranjan</h2>
              <h1>Frontend developer</h1>
              <p>As a front-end developer proficient in HTML, CSS, JavaScript and React JS. I am eager to learn new technologies, collaborate
with a team, and contribute to delivering high-quality products that meet end-user needs. With a strong attention to detail
and a focus on delivering engaging user experiences, I am committed to excellence in front-end development.</p>
              
              <a href="#project">Projects</a>
              
        </div>
        <div>
         <img src="./Image/photo.jpg" alt="/" className='img1'/> 
         </div>
      </section>
    </>
  )
}

export default Header
