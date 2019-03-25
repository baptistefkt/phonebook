import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

const PageContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Form = styled.form`
  padding: 20px 30px;
  background-color: #eee;
`;

const Add = () => (
  <Layout>
    <PageContainer>
      <h1>Add new entry</h1>
      <Form action="">
        <div>
          <label for="firstName">First name:</label>
          <input type="text" id="firstName" name="firstName" />
        </div>
        <div>
          <label for="lastName">Last name:</label>
          <input type="text" id="lastName" name="lastName" />
        </div>
        <div>
          <label for="phone">Phone number:</label>
          <input type="text" id="phone" name="phone" />
        </div>
        <div class="button">
          <button type="submit">Send your message</button>
        </div>
      </Form>
    </PageContainer>
  </Layout>
);

export default Add;
