import React from 'react'

const About = () => {
  return (
    <div>
      <div className="min-w-full h-28 bg-yellow-800 text-white  left-8 text-4xl font-bold p-8">About</div>
    <div className="container min-w-full p-40 pt-24 ">
  <div className="grid grid-cols-1 rounded md:grid-cols-2">
    <div className="hidden bg-yellow-700 rounded-sm md:block p-8">
      <img className="h-auto bg-cover bg-center bg-no-repeat p-8" src="https://source.unsplash.com/random" />
    </div>
    <div className="mt-32">
      <div className="animate-fade-in-down mb-1 text-center text-lg text-sky-600">Your Name</div>
      <div className="animate-fade-in-down mb-8 text-center text-lg text-sky-800">Webdeveloper</div>
      <blockquote>
        <p className="animate-fade-in-down mx-12 mb-9 text-center text-sm">
          Hello <br />
          my name is Taha and I am a Webdeveloper from Munich, Germany. I picked up Webdevelopment since a really young age and loved it ever since. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint?
        </p>
      </blockquote>
    </div>
  </div>
</div>
</div>
  )
}

export default About