import React, { useReducer } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import axios from 'axios';

const PageContainer = styled.section`
  width: 90%;
  height: 100vh;
  max-width: 500px;
  margin: 0 auto;

  h1 {
    color: #fff;
    font-size: 30px;
  }

  form {
    color: #444;
    padding: 30px 30px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);

    input {
      width: 90%;
      margin: 15px 0 20px 0;
      padding: 10px;
      border: 1px solid #ebebeb;
      border-radius: 4px;
      color: #444;
      font-size: 12px;

      &:focus {
        outline: none;
        border: 1px solid #00b4db;
        background-color: #f7f7f7;
      }
    }

    label {
      font-weight: bold;
      font-size: 13px;
      text-transform: uppercase;
      display: block;
    }

    button {
      width: 95%;
      margin: 0 auto;
      padding: 12px;
      color: #00b4db;
      font-weight: bold;
      font-size: 11px;
      text-transform: uppercase;
      border: 2px solid #00b4db;
      background-color: transparent;
      border-radius: 4px;
      margin-top: 20px;

      &:hover {
        opacity: 0.7;
        cursor: pointer;
      }
    }
  }

  @media (min-width: 500px) {
    width: 80%;
  }

  @media (min-width: 900px) {
    width: 60%;
  }
`;

const Add = props => {
  const [values, setValues] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      firstName: '',
      lastName: '',
      phone: '',
    }
  );

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submitted: ' + values.firstName);

    axios({
      method: 'post',
      url: 'http://localhost:8080/api/entries',
      data: {
        firstName: values.firstName,
        lastName: values.lastName,
        phone: values.phone,
      },
    })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  return (
    <Layout path={props.match.path}>
      <PageContainer>
        <h1>Create new entry</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              minLength="2"
              maxLength="20"
              value={values.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              minLength="2"
              maxLength="20"
              value={values.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="phone">
              Phone number (format: "+31 12 123456")
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              required
              pattern="^\+([0-9]{2} ){2}[0-9]{6,12}$"
              value={values.phone}
              onChange={handleChange}
            />
          </div>
          <button type="submit">+ Add entry</button>
        </form>
      </PageContainer>
    </Layout>
  );
};

export default Add;
