import Footer from "../component/footer/footer"
import Header from "../component/header/header"
export default function Contact(){
    return (
    
    <main> 
    <Header></Header>
    <div className="bg-[url('/bkimages.jpeg')] h-[600px] bg-no-repeat w-full bg-cover">
        <div className=" text-white semi-bold ">
        <li className="text-center semi-bold py-8">Tel: +923463863672</li>
        <li className="text-center semi-bold py-8	"> Email: s.mehnazar@yahoo.com</li>
        <li className="text-center semi-bold py-8">linkedin:linkedin.com/in/mehnazar-umair-2972ba2ba</li>
        <li className="text-center semi-bold py-8">github:https://github.com/Mehnazar</li>
        </div>
        </div>
        <Footer></Footer>
    </main>)
}