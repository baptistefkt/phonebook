import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faSearch, faPen } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Layout from '../components/layout';

// ======== STYLE ======== //

const PageContainer = styled.section`
  width: 95%;
  min-height: 100vh;
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 100px;

  input {
    width: 100%;
    margin: 30px 0;
    padding: 15px;
    border: 1px solid #ebebeb;
    border-radius: 4px;
    color: #444;
    font-size: 14px;

    &:focus {
      outline: none;
      border: 1px solid #00b4db;
      background-color: #f7f7f7;
    }
  }
`;

const SearchBox = styled.div`
  position: relative;

  span {
    position: absolute;
    top: 45px;
    right: 20px;
    font-size: 18px;
    color: #888;
  }
`;

const AddButton = styled.button`
  color: #fff;
  background-color: transparent;
  border: none;
  font-weight: bold;
  font-size: 16px;
  padding: 0;
  margin: 0;
  margin-left: 10px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  span {
    margin-right: 10px;
  }
`;

const ListWrapper = styled.div`
  margin-top: 20px;
  padding: 10px 0;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      color: white;
      padding: 18px 10px;
      border-bottom: 1px solid #76dbf2;
    }
  }
`;

const ListHead = styled.li`
  font-weight: bold;
  border-bottom: 2px solid #fff !important;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;

  span {
    font-size: 14px;
    flex: 3;
  }

  a {
    color: #fff;
    flex: 1;

    span {
      font-size: 12px;
    }
  }

  div {
    flex: 1;
  }

  @media (max-width: 450px) {
    span {
      font-size: 12px;
    }
  }
`;

// ======== COMPONENT ======== //

const Home = props => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function getData() {
      const result = await axios('http://localhost:8080/api/entries');
      setData(result.data);
    }
    getData();
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  return (
    <Layout path={props.match.path}>
      <PageContainer>
        <SearchBox>
          <input
            type="search"
            name="search"
            placeholder="Search for an entry"
            onChange={handleChange}
            value={search}
          />
          <span>
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </SearchBox>
        <Link to="/add">
          <AddButton>
            <span>
              <FontAwesomeIcon icon={faUserPlus} />
            </span>
            Create a new entry
          </AddButton>
        </Link>
        <ListWrapper>
          <ul>
            <ListHead>
              <Flex>
                <span>First name</span>
                <span>Last name</span>
                <span>Phone n°</span>
                <div />
              </Flex>
            </ListHead>
            {data.length > 0 &&
              data.map(data => {
                if (
                  search !== '' &&
                  data.firstName.indexOf(search) === -1 &&
                  data.firstName.toLowerCase().indexOf(search) === -1 &&
                  data.lastName.indexOf(search) === -1 &&
                  data.lastName.toLowerCase().indexOf(search) === -1 &&
                  data.phone.indexOf(search) === -1
                ) {
                  return null;
                }
                return (
                  <li key={data._id}>
                    <Flex>
                      <span>{data.firstName}</span>
                      <span>{data.lastName}</span>
                      <span>{data.phone}</span>
                      <Link to={`/update/${data._id}`}>
                        <span>
                          <FontAwesomeIcon icon={faPen} />
                        </span>
                      </Link>
                    </Flex>
                  </li>
                );
              })}
          </ul>
        </ListWrapper>
      </PageContainer>
    </Layout>
  );
};

export default Home;
