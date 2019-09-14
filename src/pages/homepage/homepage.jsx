import React from "react";
import "./homepage.scss";
import Directory from "../../components/directory/directory";

import { HomePageContainer } from "./homepage.styles";

const HomePage = props => {
  console.log(props);
  return (
    // <div className="homepage">
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
    // </div>
  );
};

export default HomePage;
