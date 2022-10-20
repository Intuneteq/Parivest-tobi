import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Button, useModal, Modal, Text, Dropdown } from "@nextui-org/react";
import Image from "next/image";

import userP from "../../public/userP.svg";
import { useAppProvider } from "../../context/AppProvider";
import axios from "axios";

const UserProfile = () => {
  const { setVisible, bindings } = useModal();
  const { status, setStatus } = useAppProvider();
  const [selectAccessValue, setSelectAccessValue] = React.useState(
    new Set(["Pending"])
  );
  const [selectedAccountInformationValue, setSelectedAccountInformationValue] =
    React.useState(new Set(["Pending"]));
  const [selectedInvestmentProfileValue, setSelectedInvestmentProfileValue] =
    React.useState(new Set(["Pending"]));
  const [
    selectedEmploymentInformationValue,
    setSelectedEmploymentInformationValue,
  ] = React.useState(new Set(["Pending"]));
  const [selectedBioInformationValue, setSelectedBioInformationValue] =
    React.useState(new Set(["Pending"]));

  const accessValue = React.useMemo(
    () => Array.from(selectAccessValue).join(", ").replaceAll("_", " "),
    [selectAccessValue]
  );

  const accountInformationValue = React.useMemo(
    () =>
      Array.from(selectedAccountInformationValue)
        .join(", ")
        .replaceAll("_", " "),
    [selectedAccountInformationValue]
  );

  const investmentProfileValue = React.useMemo(
    () =>
      Array.from(selectedInvestmentProfileValue)
        .join(", ")
        .replaceAll("_", " "),
    [selectedInvestmentProfileValue]
  );

  const employmentInformationValue = React.useMemo(
    () =>
      Array.from(selectedEmploymentInformationValue)
        .join(", ")
        .replaceAll("_", " "),
    [selectedEmploymentInformationValue]
  );

  const bioInformationValue = React.useMemo(
    () =>
      Array.from(selectedBioInformationValue).join(", ").replaceAll("_", " "),
    [selectedBioInformationValue]
  );


  //if 1 pending, overall status = pending
  //if all in review, overall status = review
  //if all approved, status = approved
  //if any in review and all is approved, status = review

  useEffect(() => {
    if(accessValue ==="Pending" || accountInformationValue === "Pending" || investmentProfileValue === "Pending" || employmentInformationValue === "Pending" || bioInformationValue === "Pending") {
      console.log('status is true');
      setStatus("Pending")
    } else if (accessValue === "Review" && accountInformationValue === "Review" && investmentProfileValue === "Review" && employmentInformationValue === "Review" && bioInformationValue === "Review") {
      setStatus("Review")
    } else if (accessValue === "Approved" && accountInformationValue === "Approved" && investmentProfileValue === "Approved" && employmentInformationValue === "Approved" && bioInformationValue === "Approved") {
      setStatus("Approved")
    } else if (accessValue === "Review" || accountInformationValue === "Review" || investmentProfileValue === "Review" || employmentInformationValue === "Review" || bioInformationValue === "Review") {
      setStatus("Review")
    } else setStatus('Pending')

  }, [accessValue, accountInformationValue, investmentProfileValue, employmentInformationValue, bioInformationValue, setStatus]);

  console.log(
    "accessValue",
    accessValue,
    accountInformationValue,
    investmentProfileValue,
    employmentInformationValue,
    bioInformationValue
  );

  return (
    <main className="userProfile">
      <article className="app__flex-2">
        <section>
          <div className="app__flex">
            <HiOutlineArrowLeft />
            <p>John Doe</p>
          </div>
        </section>
        <section>
          <Button
            width={153}
            height={49}
            flat
            color="primary"
            auto
            onPress={() => setVisible(true)}
          >
            View profile status
          </Button>
          <Modal
            scroll
            height="100%"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            {...bindings}
          >
            <Modal.Header className="modal-head" justify="space-between">
              <Text id="modal-title" size={18}>
                status
              </Text>
              <AiOutlineClose onClick={() => setVisible(false)} />
            </Modal.Header>
            <Modal.Body className="modal-body">
              <Text>Access</Text>
              <Dropdown>
                <Dropdown.Button
                  flat
                  color="#F3F6FC"
                  css={{ tt: "capitalize" }}
                  className="app__flex-2"
                >
                  {selectAccessValue}
                </Dropdown.Button>
                <Dropdown.Menu
                  // aria-label="Single selection actions"
                  color="#F3F6FC"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selectAccessValue}
                  onSelectionChange={setSelectAccessValue}
                >
                  <Dropdown.Item key="Pending">Pending</Dropdown.Item>
                  <Dropdown.Item key="Review">Review</Dropdown.Item>
                  <Dropdown.Item key="Approved">Approved</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Text>Account information</Text>
              <Dropdown>
                <Dropdown.Button
                  flat
                  color="#F3F6FC"
                  css={{ tt: "capitalize" }}
                  className="app__flex-2"
                >
                  {selectedAccountInformationValue}
                </Dropdown.Button>
                <Dropdown.Menu
                  // aria-label="Single selection actions"
                  color="#F3F6FC"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selectedAccountInformationValue}
                  onSelectionChange={setSelectedAccountInformationValue}
                >
                  <Dropdown.Item key="Pending">Pending</Dropdown.Item>
                  <Dropdown.Item key="Review">Review</Dropdown.Item>
                  <Dropdown.Item key="Approved">Approved</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Text>Investment profile</Text>
              <Dropdown>
                <Dropdown.Button
                  flat
                  color="#F3F6FC"
                  css={{ tt: "capitalize" }}
                  className="app__flex-2"
                >
                  {selectedInvestmentProfileValue}
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Single selection actions"
                  color="#F3F6FC"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selectedInvestmentProfileValue}
                  onSelectionChange={setSelectedInvestmentProfileValue}
                >
                  <Dropdown.Item key="Pending">Pending</Dropdown.Item>
                  <Dropdown.Item key="Review">Review</Dropdown.Item>
                  <Dropdown.Item key="Approved">Approved</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Text>Employment information</Text>
              <Dropdown>
                <Dropdown.Button
                  flat
                  color="#F3F6FC"
                  css={{ tt: "capitalize" }}
                  className="app__flex-2"
                >
                  {selectedEmploymentInformationValue}
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Single selection actions"
                  color="#F3F6FC"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selectedEmploymentInformationValue}
                  onSelectionChange={setSelectedEmploymentInformationValue}
                >
                  <Dropdown.Item key="Pending">Pending</Dropdown.Item>
                  <Dropdown.Item key="Review">Review</Dropdown.Item>
                  <Dropdown.Item key="Approved">Approved</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Text>Bio information</Text>
              <Dropdown>
                <Dropdown.Button
                  flat
                  color="#F3F6FC"
                  css={{ tt: "capitalize" }}
                  className="app__flex-2"
                >
                  {selectedBioInformationValue}
                </Dropdown.Button>
                <Dropdown.Menu
                  // aria-label="Single selection actions"
                  color="#F3F6FC"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selectedBioInformationValue}
                  onSelectionChange={setSelectedBioInformationValue}
                >
                  <Dropdown.Item key="Pending">Pending</Dropdown.Item>
                  <Dropdown.Item key="Review">Review</Dropdown.Item>
                  <Dropdown.Item key="Approved">Approved</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Modal.Body>
            <Modal.Footer>
              <Button auto onPress={() => setVisible(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </section>
      </article>
      <article className="profile-card">
        <div>
          <Image alt="img" src={userP} />
        </div>
        <h5>Account details</h5>
        <section className="app__flex-3">
          <div>
            <h6>user ID</h6>
            <p>P000063</p>
          </div>
          <div>
            <h6>First Name</h6>
            <p>John</p>
          </div>
          <div>
            <h6>Last Name</h6>
            <p>Doe</p>
          </div>
          <div>
            <h6>Email address</h6>
            <p>Johndoe@example.com</p>
          </div>
        </section>
      </article>
      <article className="profile-card">
        <h5>Investment profile</h5>
        <section className="app__flex-3">
          <div>
            <h6>Annual income</h6>
            <p>$470.48</p>
          </div>
          <div>
            <h6>Investment goal</h6>
            <p>$470.48</p>
          </div>
          <div>
            <h6>Investment experience</h6>
            <p>None</p>
          </div>
          <div>
            <h6>Marital status</h6>
            <p>Single</p>
          </div>
          <div>
            <h6>Next of kin name</h6>
            <p>Kathryn Murphy</p>
          </div>
          <div>
            <h6>Next of kin phone</h6>
            <p>nil</p>
          </div>
          <div>
            <h6>Next of kin email</h6>
            <p>nil</p>
          </div>
          <div>
            <h6>Next of kin relationship</h6>
            <p>Sister</p>
          </div>
        </section>
      </article>
      <article className="profile-card">
        <h5>Document Upload</h5>
        <article className="file-inputs">
          <input type="file" name="file" />
          <button>Tap to view uploaded document</button>
        </article>
      </article>
    </main>
  );
};

// export async function getStaticPaths() {

//   const res = await axios.get(
//     "https://parivest-mock-api.herokuapp.com/api/v1/users"
//   );

//   const userData = res.data.data[0].data;
//   const paths = userData.map(item => ({
//     params: {id: item._id}
//   }))
//   return { paths, fallback: blocking }
// }

// export const getStaticProps = async ({ params: { _id } }) => {
 
//   const res = await axios.get(
//     `https://parivest-mock-api.herokuapp.com/api/v1/users/${_id}`  //bad endPoint
//   );

//   console.log(res);
//   // const userData = res.data.data[0].data;

//   return {
//     props: {  },
//   };
// };

export default UserProfile;
