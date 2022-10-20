import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import { AiOutlineSearch } from "react-icons/ai";
import {
  Container,
  Card,
  Row,
  Col,
  Text,
  Dropdown,
  Grid,
  Input,
  Badge,
} from "@nextui-org/react";
import { format } from "date-fns";

import Frame from "../../public/Frame.svg";
import { useAppProvider } from "../../context/AppProvider";

const Users = ({ userData }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const { status } = useAppProvider();

  console.log(
    userData.data.filter((item) => {
      return item.last_name, item.first_name;
    })
  );
  const usersData = userData.data;

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(usersData.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayUsers = usersData
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <Card className="card" key={user._id}>
          <Card.Body>
            <Row className="row">
              <Col className="app__flex date">
                <Text>{format(new Date(user.createdAt), "dd MMMMMM yyyy")}</Text>
              </Col>
              <Col className="app__flex client-id">
                <Text>{user.client_id}</Text>
              </Col>
              <Col className="app__flex name">
                <Text>
                  {user.first_name} {user.last_name}
                </Text>
              </Col>
              <Col className="app__flex email">
                <Text>{user.email}</Text>
              </Col>
              <Col className="app__flex phone">
                <Text>{user.phone}</Text>
              </Col>
              <Col className="app__flex">
                <Badge enableShadow disableOutline color="success">
                  {status}
                  {/* status */}
                </Badge>
              </Col>
              <Col className="app__flex">
                <Link
                  href={{
                    pathname: "/users/[slug]",
                    query: { slug: user._id },
                  }}
                >
                  <Text className="btn">view</Text>
                </Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      );
    });

  return (
    <main className="users">
      <Container fluid>
        <Card className="cardContainer">
          <Card.Header>
            <Dropdown>
              <Dropdown.Button light>All</Dropdown.Button>
              <Dropdown.Menu variant="light" 
              // aria-label="Actions"
              >
                <Dropdown.Item key="new">Approved</Dropdown.Item>
                <Dropdown.Item withDivider key="copy">
                  Pending
                </Dropdown.Item>
                <Dropdown.Item withDivider key="edit">
                  In Review
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Header>
          <Card.Body>
            <Grid.Container justify="space-between">
              <Grid>
                <Input underlined width="186px" aria-label="from" label="From" type="date" />
                <Input underlined width="186px" aria-label="To" label="To" type="date" />
              </Grid>
              <Grid className="grid">
                <Image src={Frame} alt="Ellipse" width={40} height={40} />
                <div>
                  <Input clearable underlined placeholder="search" />
                  <p className="app__flex">
                    <AiOutlineSearch /> 
                  </p>
                </div>
              </Grid>
            </Grid.Container>
          </Card.Body>
        </Card>
      </Container>
      <Container>
        <Grid.Container gap={1}>
          <Card className="card">
            <Card.Body>
              <Row justify="space-between" alignitems="center">
                <Col className="app__flex">
                  <Text>Date joined</Text>
                </Col>
                <Col className="app__flex">
                  <Text>User ID</Text>
                </Col>
                <Col className="app__flex">
                  <Text>Name</Text>
                </Col>
                <Col className="app__flex">
                  <Text>Email address</Text>
                </Col>
                <Col className="app__flex">
                  <Text>Phone no</Text>
                </Col>
                <Col className="app__flex">
                  <Text>status</Text>
                </Col>
                <Col className="app__flex">
                  <Text>Action</Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Grid.Container>
        <Grid.Container gap={3} className="user-data">
          {displayUsers}

          <Card className="pagination-card">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </Card>
        </Grid.Container>
      </Container>
    </main>
  );
};

export async function getServerSideProps() {
  const res = await axios.get(
    "https://parivest-mock-api.herokuapp.com/api/v1/users"
  );
  const userData = res.data.data[0];
  return { props: { userData } };
}

export default Users;
