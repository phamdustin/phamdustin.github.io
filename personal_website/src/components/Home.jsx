import { ThemeIcon } from '@mantine/core';
import { IconBrandGithub, IconMailbox } from '@tabler/icons-react';

const Home = () => {
  return(
    <div>
      <img src="/me.JPG" alt="Self portrait" width="230" height="345"/>\
      <h1>Dustin Pham</h1> 

      <h3>About me</h3>
      <p>A software engineer excited about building software that solves real problems. 
        Over the past few years, I’ve worked on projects from the ground up—always aiming for simple, 
        scalable, and user-friendly results.</p>
      <h3>Software Engineer at Boeing '21-'25</h3>
      <img src="boeing_logo.svg" alt="Boeing Logo"/>
      
      <h3>Seattle University - BS Computer Engineering</h3>
      <img src="Seattle_University_Logo.svg" alt="Seattle University Logo"/>

      <h3>Leadership</h3>
      <h7>President of Seattle University Vietnamese Student Association</h7>
      <img src="suvsa.jpg" alt="Seattle University Vietnamese Student Association Group Picture" width="500"/>
      {/* Insert some responsibilities, events coordinated with statistics here */}
      <h3>hobbies</h3>
      <b>volleyball, food, gym</b>

      <div className="flex-container">
          <ThemeIcon>
            <IconMailbox style={{ width: '70%', height: '70%' }} />
            
          </ThemeIcon>
        <div>
          <h4>dustinpham07@gmail.com</h4>
        </div>
      </div>

      <div className="flex-container">
        <ThemeIcon>
          <IconBrandGithub style={{ width: '70%', height: '70%' }} />
        </ThemeIcon>
        <h4>https://github.com/phamdustin</h4>
      </div>

      

    </div>


  )
}


export default Home