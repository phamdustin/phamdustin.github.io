import React, {useState} from 'react'


const Resume = () => {
  const embedUrl = "https://docs.google.com/document/d/e/2PACX-1vRFl9ffzPe1cwIAX8HgCG66cncc3x09JiK4E7TtbJarNHXdv1Lh0o7IVn7_-qI7wQ/pub"
  

  return (
    <div>
      <iframe
        src={embedUrl}
        width="1500"
        height="600"
      ></iframe>
    </div>
  )
}

export default Resume