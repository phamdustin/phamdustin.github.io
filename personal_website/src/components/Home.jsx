import { ThemeIcon } from '@mantine/core';
import { IconBrandGithub, IconMailbox } from '@tabler/icons-react';

const Home = () => {
  return(
    <div>
      <img src="/me.JPG" alt="Self portrait" width="230" height="345"/>\
      <h1>Dustin Pham</h1> 

      <h3>About me</h3>
      <b>short professional description and my interests</b>

      <h3>Seattle University - BS Computer Engineering</h3>

      <h3>Leadership</h3>
      <h4>President of Vietnamese Student Association</h4>

      <h3>hobbies</h3>
      <b>volleyball, food, gym</b>

      <div class="flex-container">
          <ThemeIcon>
            <IconMailbox style={{ width: '70%', height: '70%' }} />
            
          </ThemeIcon>
        <div>
          <h4>dustinpham07@gmail.com</h4>
        </div>
      </div>

      <div class="flex-container">
      <ThemeIcon>
        <IconBrandGithub style={{ width: '70%', height: '70%' }} />
      </ThemeIcon>
    <h4>https://github.com/phamdustin</h4>
    </div>

      

    </div>


  )
}


export default Home