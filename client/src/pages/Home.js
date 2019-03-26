import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Layout from '../components/layout';

// const datas = [
//   {
//     id: '1',
//     firstName: 'Frieda',
//     lastName: 'Robscheit-Robbins',
//     phone: '+32 44 555555',
//   },
//   {
//     id: '2',
//     firstName: 'Bart',
//     lastName: 'Dart',
//     phone: '+32 11 222222',
//   },
//   {
//     id: '3',
//     firstName: 'Marc',
//     lastName: 'Mak',
//     phone: '+32 77 1111111',
//   },
// ];

const PageContainer = styled.section`
  height: 100vh;
  width: 95%;
  max-width: 500px;
  margin: 0 auto;

  input {
    width: 70%;
    margin: 30px 0;
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
`;

const SearchButton = styled.button`
  padding: 13px 20px;
  margin-left: 15px;
  color: #fff;
  font-weight: bold;
  font-size: 11px;
  text-transform: uppercase;
  border: none;
  background-color: #aaa;
  border-radius: 4px;
  transition: all 0.15s;

  &:hover {
    background-color: #999;
    color: #ddd;
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

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

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
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const filterData = data => {
    data.filter(d => {});
  };

  return (
    <Layout path={props.match.path}>
      <PageContainer>
        <input
          type="search"
          name="search"
          placeholder="Search For An Entry"
          onChange={handleChange}
          value={search}
        />
        <SearchButton>
          <FontAwesomeIcon icon={faSearch} />
        </SearchButton>
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
            {data.length > 0 &&
              data.map(data => {
                if (
                  search !== '' &&
                  data.firstName.indexOf(search) === -1 &&
                  data.lastName.indexOf(search) === -1 &&
                  data.phone.indexOf(search) === -1
                ) {
                  return null;
                }
                return (
                  <li key={data.id}>
                    <Flex>
                      <span>{data.firstName}</span>
                      <span>{data.lastName}</span>
                      <span>{data.phone}</span>
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
