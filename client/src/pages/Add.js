import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

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
      }
    }

    label {
      font-weight: bold;
      font-size: 13px;
      text-transform: uppercase;
      display: block;
    }

    button {
      width: 90%;
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

const Add = props => (
  <Layout path={props.match.path}>
    <PageContainer>
      <h1>Create new entry</h1>
      <form action="">
        <div>
          <label htmlFor="firstName">First name</label>
          <input type="text" id="firstName" name="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">Last name</label>
          <input type="text" id="lastName" name="lastName" />
        </div>
        <div>
          <label htmlFor="phone">Phone number</label>
          <input type="text" id="phone" name="phone" />
        </div>
        <button type="submit">+ Add entry</button>
      </form>
    </PageContainer>
  </Layout>
);

export default Add;
