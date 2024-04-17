import HomeLayout from "../Layouts/HomeLayout";
import { useState } from "react";
import axiosInstance from "../Helpers/axiosInstance";
import { isEmail } from "../Helpers/regexMatcher";
import { toast } from "react-hot-toast";

function Contact() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    if (!userInput.name || !userInput.email || !userInput.message) {
      toast.error("All fields are mandatory");
      return;
    }
    if (!isEmail(userInput.email)) {
      toast.error("Invalid email address");
      return;
    }

    try {
      const response = axiosInstance.post("/contact", userInput);
      toast.promise(response, {
        loading: "Sending your message...",
        success: "Message sent successfully",
        error: "Failed to send the message",
      });
      const contactResponse = await response;
      if (contactResponse?.data?.success) {
        setUserInput({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (err) {
      toast.error("operation failed...");
    }
  }

  return (
    <HomeLayout>
 <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact Form</title>
  <style dangerouslySetInnerHTML={{__html: `
  /* Reset CSS */
  * {

    box-sizing: border-box;
    // background-color : #333;
    // padding: -100px -100px 100px 100px;
    // margin: 0px 20px -100px -10px;
    width:100%;
   
  }

  /* Body styles */
  body {
    font-family: Arial, sans-serif;
    background-color: #f3f4f6;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color : #333;
    height: 100%;
    width: 100%;
    
  }

  /* Form container styles */
  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  /* Form styles */
  .contact-form {
    background-color: #374151;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: #fff;
    width: 22rem;
  }

  .contact-form h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-group label {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .form-group input[type="text"],
  .form-group input[type="email"],
  .form-group input[type="message"] {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
    outline: none;
  }

  .form-group input[type="text"],
  .form-group input[type="email"],
  .form-group input[type="message"],
  .form-group textarea {
    transition: border-color 0.3s ease;
  }

  .form-group input[type="text"]:focus,
  .form-group input[type="email"]:focus,
  .form-group input[type="message"]:focus,
  .form-group textarea:focus {
    border-color: #ffcc00;
  }

  button[type="submit"] {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #ffcc00;
    color: #333;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  #message{
    position: relative;
    left: 10px;
  }
  button[type="submit"]:hover {
    background-color: #ffbb00;
  }
` }} />
  <div className="form-container">
    <form className="contact-form" noValidate>
      <h1>Contact Form</h1>
      <div className="form-group">
        <label htmlFor="name" className="text-xl font-semibold">Name</label>
        <input id="name" type="text" name="name" placeholder="Enter your name" className="bg-transparent border px-2 py-1 rounded-sm" />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="text-xl font-semibold">Email</label>
        <input id="email" type="email" name="email" placeholder="Enter your email" className="bg-transparent border px-2 py-1 rounded-sm" />
      </div>
      <div className="form-group">
        <label htmlFor="message" className="text-xl font-semibold">Message</label>
        <input id="message" name="message" placeholder="Enter your message" className="bg-transparent border px-2 py-1 rounded-sm" />
      </div>
      <button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer">
        Submit
      </button>
    </form>
  </div>
</div>


    </HomeLayout>
  );
}
export default Contact;
