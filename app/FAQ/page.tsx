import Footer from "../component/footer/footer";
import Header from "../component/header/header";

function FAQ(){

     
        return(
            <main>
              <Header></Header>
              
              <div className="bg-[url('/bkimages.jpeg')] h-[600px] bg-no-repeat w-full bg-cover">
            <div className="text-justify px-8 py-6 content-between-5 text-white">
              
            <h1 className=" text 3x1 bold">FAQ</h1>
            
            
      <li>Question: "What is Artificial Intelligence (AI)?",</li>
      <p>answer:
        "Artificial Intelligence refers to the simulation of human intelligence in machines that are programmed to think, learn, and perform tasks typically requiring human cognition.",
        </p>
    
      <li>Question: "What are the types of AI?", </li>
    <p>
      answer:
        "AI can be broadly categorized into three types: Narrow AI (specific tasks), General AI (human-level intelligence), and Superintelligent AI (beyond human intelligence).",
        </p>
    
      <li> Question: "What are common applications of AI?",</li>
      <p>
        answer:
        "AI is used in many areas, including virtual assistants, self-driving cars, facial recognition, recommendation systems, medical diagnosis, and natural language processing.",
        </p>
    
      <li>Question: "Is AI safe?",</li>
      <p>
      answer:
        "AI offers many benefits but also presents challenges. Ethical considerations, biases, and misuse must be addressed to ensure AI is developed and used responsibly.",
        </p>
      <li> Question: "How does AI learn?",</li>
      <p>
      answer:
        "AI systems learn through algorithms and data. Machine learning, a subset of AI, allows machines to improve their performance by analyzing data patterns and making predictions.",
        </p>
            
          </div>
          </div>
          <Footer></Footer>
    </main>
  );
};

export default FAQ;
