import React from 'react'

export default function About(props) {
  return (
    <div className='Container' style={{color:props.mode===''?'white':'black'}}>
      <h2 className='my-3' style={{textAlign:'center' ,display:'block',backgroundColor:'white',border:'2px solid black'}}>ABOUT US</h2>
      <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze Your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Welcome to the "Analyze Your Text" tool!</strong>This versatile tool empowers you to interact with your text in a variety of ways. Whether you're working on a document, an email, or just having fun with words, this tool provides the following features:
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Free For Use</strong>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>"Explore the 'Analyze Your Text' tool for free!</strong> Transform text to uppercase/lowercase, clear content instantly, and edit on the fly. A user-friendly solution for hassle-free text manipulation."
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Browser Compatible</strong> "Experience seamless browsing with our website's browser compatibility. Whether you're on Chrome, Firefox, Safari, or Edge, our content and features are optimized to deliver a consistent and enjoyable experience across all major browsers."
      </div>
    </div>
  </div>
</div>
</div>
  )
}
