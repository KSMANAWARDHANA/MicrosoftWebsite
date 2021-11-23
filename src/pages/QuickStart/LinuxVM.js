/* eslint-disable jsx-a11y/anchor-is-valid */
import Wrapper from "../../components/NavBar/Wrapper";
function LinuxVM() {
  return (
    <>
      <Wrapper>
      <div className="Overview -ml-48">
        <h1 className="font-semibold text-3xl mt-10 ">Linux Virtual Machines In Azure</h1>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div className="md:flex">
                  <div className="md:flex-shrink-0"> </div>
                    <div className="p-8">
                      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                          <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
                          <p className="mt-2 text-black">
                                <ul className=" ml-10 list-none md:list-disc font-semibold">
                                  <li >Development and test</li>
                                  <li >Applications in the cloud</li>
                                  <li >Extended datacenter</li>
                                </ul>

                               
                          </p>
                    </div>
              </div>
        </div>
        
       
    </div>
      </Wrapper>
    </>
    
  );
}

export default LinuxVM;
