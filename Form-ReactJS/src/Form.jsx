import { useState } from "react";
function Form() {
    const  [firstname, setFirstName] = useState('')
    const  [lastname, setLastName] = useState('')
    const  [email, setEmail] = useState('')
    const  [contact, setContact] = useState('')
    const  [gender, setGender] = useState('')
    const  [subject, setSubject] = useState('')
    const  [resume, setResume] = useState('')
    const  [url, setURL] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            firstname,
            lastname,
            email,
            contact,
            gender,
            subject,
            resume,
            url
        );
        // Add your form submission logic here
    };
  return (
    <div className="Form">
      <form>
      <h1 className="titleForm">Form in React</h1>
        <div className="form-group1">
          <label htmlFor="firstname">First Name*</label>
          <input name="firstname" type="text" placeholder="Enter your name" onChange={(e)=>setFirstName(e.target.value)}

          />
        </div>
        <div className="form-group2">
          <label htmlFor="lastname">Last Name*</label>
          <input name="lastname" type="text" placeholder="Enter your name" onChange={(e)=>setLastName(e.target.value)}

          />
        </div>
        <div className="form-group3">
          <label htmlFor="email">Enter Email*</label>
          <input name="email" type="text" placeholder="Enter your name"  onChange={(e)=>setEmail(e.target.value)}

          />
        </div>
        <div className="form-group4">
          <label htmlFor="contact">Contact*</label>
          <input name="contact" type="text" placeholder="Enter your name" onChange={(e)=>setContact(e.target.value)}

          />
        </div>
        
        <div className="gender">
        <h1> Gender*</h1>
        <div className="form-group5">
            <input type="radio" name="option" value="Male" onChange={(e)=>setGender(e.target.value)}

            ></input>
            <label htmlFor="Male">Male</label>
            <input type="radio" name="option" value="Female" onChange={(e)=>setGender(e.target.value)}

            ></input>
            <label htmlFor="Female">Female</label>
            <input type="radio" name="option" value="Other" onChange={(e)=>setGender(e.target.value)}

            ></input>
            <label htmlFor="Other">Other</label>
        </div>
        </div>


        <div className="lang">
        <h1> Your best subject</h1>
        <div className="form-group6">
            <input type="checkbox" name="lang" onChange={(e)=>setSubject(e.target.value)}

            ></input>
            <label htmlFor="English">English</label>
            <input type="checkbox" name="lang" onChange={(e)=>setSubject(e.target.value)}

            ></input>
            <label htmlFor="Math">Math</label>
            <input type="checkbox" name="lang" onChange={(e)=>setSubject(e.target.value)}

            ></input>
            <label htmlFor="Physic">Physic</label>
        </div>
        </div>

        <div className="form-group7">
          <label htmlFor="Upload Resume">Upload Resume*</label>
          <input name="contact" type="file" onChange={(e)=>setResume(e.target.value)}

          />
        </div>

        <div className="form-group8">
          <label htmlFor="Enter URL">Enter URL*</label>
          <input name="contact" type="text" onChange={(e)=>setURL(e.target.value)}

          />
        </div>
        <div className="form-group9">
        <button className="submit" type="submit" onClick={handleSubmit}>Submit</button>
        <button className="reset" type="reset">Reset</button>
        </div>
      </form>
    </div>
  );
}

export default Form;