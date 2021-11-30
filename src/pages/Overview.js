/* eslint-disable jsx-a11y/anchor-is-valid */
import Wrapper from "../components/NavBar/Wrapper";
import FooterSmall from "../components/NavBarNavigations/FooterSmall";
function Overview() {
  return (
    <>
    <Wrapper>
    <div className="Overview ml-32">
       
       <div className="max-w-md mx-auto bg-white shadow-md overflow-hidden md:max-w-4xl">
           <div className="md:flex">
               <div className="md:flex-shrink-0"> </div>
                 <div className="p-8">
                   <div className="-mt-8 tracking-wide text-sm text-Black font-semibold">
                   
                   {/*Paragraph One*/}
                   <h1 className="font-semibold text-3xl text-red-800 -mt-4">Bethel Overview</h1>
                   </div>

                   <p className="mt-2 text-black leading-relaxed">
                       As Bethel, a containerized, decentralized, multi-language blockchain development platform, encourages software developers to move their existing solutions to blockchain technology and utilize its robust capabilities when it comes to transparency, security, 
                    </p>

                    <h5 className="mt-4 text-red-800 text-lg">Bethel</h5>

                    <p className="mt-2 text-black leading-relaxed">
                      Bethel, a containerized, decentralized, multi-language blockchain development platform,
                      encourages software developers to move their existing solutions to blockchain technology and utilize its robust
                      capabilities. It is one of the best creations so far, which enables users to satisfy all their blockchain development 
                       needs with advanced technology. With BETHEL, users can now effortlessly integrate blockchain technology into their projects
                       without having to worry about getting used to the environment. With multi-language support and enhanced scalability, developers 
                       can seamlessly use and customize this blockchain development platform to fit their needs accordingly. A highly innovative 
                       blockchain development kit that provides the basis to all other projects under the FutureCX umbrella, BETHEL assists and supports
                       all blockchain-driven innovations and projects, reiterating our commitment towards blockchain development 
                    </p>

                       {/*Paragraph Two*/}
                       <h1 className="font-semibold text-2xl text-red-800 mt-4">For Developers</h1>

                     <p className="mt-4 mt-4 text-red-800 text-lg leading-relaxed">
                              <ul className="mt-4 ml-10 list-none md:list-disc font-semibold">
                               <li className="mt-2" >Decentralized MIddle-Ware Development</li> 
                               <p className="mt-2 text-black text-md  font-normal">
                                Middle-ware development and hosting in a decentralized space is first of its kind attempt in revolutionizing undisturbed and highly compatible platform-to-platform communications.
                               </p>

                               <li className="mt-2">NFT based Smart Container Subscription</li>
                               <p className="mt-4 text-black text-md  font-normal">
                               NFT (Non-Fungible Token) based smart container subscription system assists any party requiring to input information into a blockchain the ability to do so via a subscription based system, where an NFT deployed within the blockchain decides the time frame of the subscription and all the abilities it possesses.
                               </p>

                               <li  className="mt-2">Decentralized Certificate Authority</li>
                               <p className="mt-4 text-black text-md  font-normal">
                              A dedicated decentralized certificate authority directly embedded within nodes is responsible for all node access and container deployment permissions, allowing two-way access verification abilities providing a cohesive security mechanism.
                              </p>

                               <li  className="mt-2">Private & Public Networks</li>
                               <p className="mt-4 text-black text-md  font-normal">
                               The ability to exchange information between private and public networks securely with the ability of decentralized bridges and decentralized middle-ware applications becomes the next level of reliability and scalability.
                               </p>
                             </ul>
                       </p>
                </div>
           </div>
     </div>
    </div>
    </Wrapper>
    <FooterSmall/>
    </>
  );
}

export default Overview;
