import React, { useState } from "react";
import styled from "styled-components";

const FormSection = styled.div`
  background-color: lightgreen;
  width: 95%;
  height: auto;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0px 1px 4px black;
  text-align: center;
  margin: 10px auto;
  
`;



const Form = props => {
    const [member, setMember] = useState({
        name: "",
        image: "",
        email: "",
        role: ""
    });

    const changeHandler = e => {
        setMember({...member, [e.target.name]: e.target.value})
    }

    const submitHandler = e => {
        e.preventDefault()
        props.addTeamMate(member)
        setMember({ 
        name: "", 
        image: "", 
        email: "", 
        role: "" });
       
        
    }
    return (
      <FormSection>
        <div>
          <form onSubmit={submitHandler}>
            <label style={{ padding: "0 7px" }} htmlFor="name">
              Member's Name
            </label>
            <input
              id="name"
              name="name"
              onChange={changeHandler}
              value={member.name}
              type="text"
              placeholder="Name"
            ></input>

            <label style={{ padding: "0 7px" }} htmlFor="name">
              Member's Role
            </label>
            <input
              id="role"
              name="role"
              onChange={changeHandler}
              value={member.role}
              type="text"
              placeholder="Role"
            ></input>

            <label style={{ padding: "0 7px" }} htmlFor="name">
              Member's Email
            </label>
            <input
              id="email"
              name="email"
              onChange={changeHandler}
              value={member.email}
              type="text"
              placeholder="Email"
            ></input>

            <label style={{ padding: "0 7px" }} htmlFor="image">
              Member's Image
            </label>
            <input
              id="image"
              name="image"
              onChange={changeHandler}
              value={member.image}
              type="text"
              placeholder="Image"
            ></input>

            <button style={{ margin: "0 5px" }} type="submit">
              Add Member
            </button>
          </form>
        </div>
      </FormSection>
    );
};

export default Form;