import React, { useReducer, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Layout from '../components/layout';

// ======== STYLE ======== //

const PageContainer = styled.section`
  width: 90%;
  min-height: 100vh;
  padding-bottom: 100px;
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

      span {
        color: #666;
        font-size: 11px;
      }
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

// ======== COMPONENT ======== //

const Update = ({ match }) => {
  const [values, setValues] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      firstName: '',
      lastName: '',
      phone: '',
    }
  );

  useEffect(() => {
    async function getData() {
      const result = await axios(
        `http://localhost:8080/api/entries/${match.params.id}`
      );
      setValues(result.data);
    }
    getData();
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios({
      method: 'put',
      url: `http://localhost:8080/api/entries/${match.params.id}`,
      data: {
        firstName: values.firstName,
        lastName: values.lastName,
        phone: values.phone,
      },
    })
      .then(response => console.log(response))
      .then((window.location = '/'))
      .catch(error => console.log(error));
  };

  return (
    <Layout path={match.path}>
      {console.log(values)}
      <PageContainer>
        <h1>Edit this entry</h1>
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
              onChange={handleChange}
              value={values !== {} ? values.firstName : ''}
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
              onChange={handleChange}
              value={values !== {} ? values.lastName : ''}
            />
          </div>
          <div>
            <label htmlFor="phone">
              Phone number <span>(format: "+31 12 123456")</span>
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              required
              pattern="^\+([0-9]{2} ){2}[0-9]{6,10}$"
              onChange={handleChange}
              value={values !== {} ? values.phone : ''}
            />
          </div>
          <button type="submit">Update entry</button>
        </form>
      </PageContainer>
    </Layout>
  );
};

export default Update;
