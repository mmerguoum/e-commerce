import React from 'react'

const ProductItems = () => {
  return (
    <Layout>
    <main className="flex items-center p-10 w-full h-full bg-white">
	<div className="border-t border-b pt-16 grid grid-cols-2 gap-8">
		<div className="flex flex-col justify-start">
			<div className="flex flex-col w-full object-cover h-4/6 justify-items-start border rounded-lg overflow-hidden"
				style={{minHeigth:"320px"}}>
				<img className="w-full h-full object-cover" src='https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' alt='nike shoes' />
            </div>
			</div>
			<div className="flex flex-col">
				<div className="flex flex-col gap-4">
					<h1 className="capitalize text-4xl font-extrabold">Nike shoes</h1>
					<h2 className="text-3xl">$44</h2>
					<p className="text-lg text-gray-500	">Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Voluptatibus voluptatum nisi maxime obcaecati impedit? Ratione error eum qui quidem? Veniam
						accusamus ea repudiandae itaque, explicabo quidem perspiciatis. Culpa, asperiores deserunt.</p>
					<div className="flex items-center gap-4 my-6 cursor-pointer ">
						<div className="bg-blue-600 px-5 py-3 text-white rounded-lg w-2/4 text-center">Add to bag</div>
	
					</div>
				</div>
			</div>
		</div>
</main>
</Layout>
  )
}

export default ProductItems