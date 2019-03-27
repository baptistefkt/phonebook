import React, { useReducer, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Layout from '../components/layout';

const PageContainer = styled.section`
  width: 90%;
  height: 150vh;
  max-width: 600px;
  margin: 0 auto;

  h1 {
    color: #fff;
    font-size: 30px;
  }

  form {
    color: #333;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 4px;

    input {
      width: 90%;
      margin: 10px 0 15px 0;
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
      font-size: 12px;
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

const Update = props => {
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
        `http://localhost:8080/api/entry/${props.match.params.id}`
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
    console.log('submitted: ' + values.firstName);

    axios({
      method: 'put',
      url: `http://localhost:8080/api/entry/${props.match.params.id}`,
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
            <label htmlFor="phone">Phone number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              required
              pattern="^\+([0-9]{2} ){2}[0-9]{6,12}$"
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
