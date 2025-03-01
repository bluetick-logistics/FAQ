import { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./index.css";

const faqs = [
  { question: "What types of freight services are available?", answer: "We offer air, sea, and land freight services to meet your needs." },
  { question: "How do I get a freight quote?", answer: "You can request a quote by filling out our online form with shipment details." },
  { question: "What information is required to book a shipment?", answer: "You'll need to provide shipment details such as weight, dimensions, and destination." },
  { question: "How are freight costs calculated?", answer: "Freight costs are based on weight, distance, and mode of transport." },
  { question: "Do I need freight insurance?", answer: "Insurance is recommended to protect your shipment from damage or loss." },
];

export default function Task() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently <span className="highlight">Ask Questions</span></h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <ChevronDown className={`icon ${openIndex === index ? "rotate" : ""}`} />
            </button>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
