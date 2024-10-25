import Image from "next/image";

export default function Hero() {
  return (
    
    <section className="container mx-auto px-6 py-16">
      <div className="flex flex-col-reverse lg:flex-row items-center">
        
        {/* Left Section: Text */}
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-3xl font-bold italic text-white mb-4">Artificial Intelligence</h1>
          <p className="text-lg text-white text-justify">
            Educational Pedia is a comprehensive online platform dedicated to making 
            learning accessible and engaging for students, educators, and lifelong learners. 
            It offers a vast collection of resources, including articles, video tutorials, 
            interactive quizzes, and study materials across various subjects and academic levels. 
            Whether you’re preparing for exams, seeking deeper insights into specific topics, 
            or enhancing your skills, Educational Pedia provides well-structured content designed 
            to meet diverse learning needs. With a user-friendly interface and regular updates, 
            the platform encourages curiosity and fosters continuous learning in an ever-evolving 
            educational landscape.
          </p>
        </div>

        {/* Right Section: Image */}
        <div className="lg:w-1/2 flex justify-center">
          <Image 
            src="/educational-image.jpg" 
            alt="Educational Image" 
            width={400} 
            height={200} 
            className="rounded-lg shadow-lg"
            priority 
          />
        </div>
      </div>
      
    <section>
    <div>
      
      {/* Left Section: Text */}
      <div>
        <h1 className="text-3xl font-bold italic text-white my-8 mb-4">Generative AI</h1>
        <p className="text-lg text-white text-justify my-8	">
        Generative AI refers to a subset of artificial intelligence (AI) systems capable of creating new content—such as text, images, music, videos, and even code—based on the patterns and data they have been trained on. Unlike traditional AI systems that focus on recognizing patterns or making predictions, generative AI actively produces novel content, simulating human creativity.</p>
      </div>
      {/* Right Section: Image */}
        <div className="lg:w-1/2 flex justify-center my-8">
        <Image 
          src="/genAI.jpg" 
          alt="Educational Image" 
          width={1000}
          height={600} 
          className="centre rounded-lg shadow-lg"
          priority 
        />
      </div>

<h2 className="font-semibold italic	text-white	my-08	">How Does Generative AI Work?</h2>

<br></br>

<p className="mt=08 text-white">Generative AI models typically leverage techniques like:</p>

<h2 className="text 3x1 semi-bold italic	text-white text-justify my-08	">Neural Networks:</h2> 
<p className="mt=08 text-white">Models such as GANs (Generative Adversarial Networks) and Variational Autoencoders (VAEs) learn to generate content by identifying patterns in data.
Transformer Models: Popular transformer-based models like GPT (Generative Pre-trained Transformer) generate human-like text by predicting the next word or sentence based on context.
Diffusion Models: Used in text-to-image generation, diffusion models reverse a noise process to create new images from scratch.
Applications of Generative AI</p>
<br></br>

<h2 className="text 2x1 italic text-white semi-bold mt-06">Text Generation:</h2>

<li className="text-white">Chatbots (e.g., ChatGPT) and virtual assistants.</li>
<li className="text-white">Automatic content creation like articles, blogs, and emails.</li>
<li className="text-white">Summarization, translation, and personalized marketing content.</li>

<br></br>

<h2 className="text 2x1 italic text-white semi-bold mt-06">Image and Video Generation:</h2>
<br></br>
<p className="text-justify text-white">Creating AI-generated artwork and product designs (e.g., DALL·E).
Video synthesis, virtual avatars, and deepfake videos.</p>
<br></br>
<h2 className=" text 2x1 italic	text-white semi-bold mt-06">Music and Audio Creation:</h2>
 
<p className="text-justify text-white">Generative AI composes unique music tracks or soundscapes.
Voice cloning or creating custom audio for virtual characters.
</p>
<br></br>
<h2 className="text 2x1 italic text-white	semi-bold mt-6">Programming and Code Generation:</h2>
<br></br>
<p className="text-justify text-white">AI tools like GitHub Copilot assist developers by auto-generating code.
AI-based error detection and refactoring of software.
Challenges and Ethical Concerns
Bias and Misinformation: AI models may produce biased, inaccurate, or harmful content based on their training data.
Copyright and Ownership Issues: There are ongoing debates about ownership of AI-generated content.
Deepfakes and Misuse: Generative AI can create deceptive content, such as realistic fake videos or impersonations, posing risks to privacy and security.
</p>
<br></br>
<h1 className="text 2x1 italic	text-white semi-bold mt-8">Future of Generative AI</h1>
<br></br>

<p className="text-justify text-white">Generative AI is transforming industries by enabling faster content production, creativity, and personalized experiences. However, ongoing research is needed to address ethical concerns, improve accuracy, and ensure responsible use. As models evolve, we will likely see more seamless integration of generative AI in education, healthcare, entertainment, and software development.

Generative AI represents not just a technological breakthrough but also a profound shift in how humans collaborate with machines to create meaningful and innovative content.</p>
        
      </div>   

    </section>
    </section>
  );
}
