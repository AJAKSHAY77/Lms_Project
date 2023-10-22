import HomeLayout from  "../Layouts/Homelayout"




function Homepage() {
 
    return (
        <HomeLayout>
            <div className="pt-10 text-white flex items-center justify-center mx-16 h-[90vh]">
                <div className="w-1/2 space-y-6">

                  <h1 className="text-5xl font-semibold" >

                    Find out best

                    <span className='text-yellow-500 font-bold'>

                        online courses
                    </span>
                    </h1>


                    <p className="text-xl text-gray-200" >
                        We have  a large  library  of courses taught  by highly skilled  and qualified  faculties at very affordable cost
                    </p>
                    
                    
                </div>
             
            </div>
        </HomeLayout>
    )
}
export default Homepage