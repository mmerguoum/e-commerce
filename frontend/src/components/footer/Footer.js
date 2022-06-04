import React from 'react'

const Footer = () => {
  return (
<div className="bg-yellow-700">
	<div className="h-32"></div>
		<div className="relative bg-gray-50 text-black-500 pt-8 pb-6">
			<div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
				style={{height: "80px"}}>
				<svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
				version="1.1" viewBox="0 0 2560 100" x="0" y="0">
				<polygon className="text-gray-50 fill-current" points="2560 0 2560 100 0 100"></polygon>
				</svg>
			</div>
			<hr className="my-6 border-gray-400" />
			<div className=" flex flex-wrap items-center md:justify-between justify-center">
				<div className="w-full md:w-4/12 px-4 mx-auto text-center">
					<div className=" text-sm text-gray-600 font-semibold py-1">
						Created By
						<a href="https://github.com/mmerguoum"
							className="text-gray-600 hover:text-gray-900"> © 2022 Artshop All right Reserved</a>.
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Footer;
