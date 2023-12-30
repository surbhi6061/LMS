import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";

const About = (props) => {
  const [userInfo, setUserInfo] = useState({
    name: "Dummy",
    // email: "Default"
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://api.github.com/users/surbhi6061");
      const json = await data.json();
      setUserInfo(json);
      console.log(json);
    };

    fetchData();
  }, []);

  return (
    <Layout className="user-card m-4 p-4 g-gray-50 rounded-lg">
      <img src={userInfo.avatar_url} alt="User Avatar" />
      <h2>{userInfo.name}</h2>
      <h2>{props.location}</h2>
      <h3>Contact: surbhi@gmail.com</h3>
      <h3>Github:https://github.com/surbhi6061/</h3>
    </Layout>
  );
};

export default About;
