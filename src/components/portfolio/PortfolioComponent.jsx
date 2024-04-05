import React, { useState, useEffect } from "react";
import { Typography, Box, Button } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import GridComponent from "./GridComponent";
import {
  All,
  WebDevelopment,
  AppDevelopment,
  Ecommerce,
  CustomApplication,
} from "./GridItems";

const PortfolioComponent = (home) => {
  const [value, setValue] = React.useState(0);
  const [showAllItems, setShowAllItems] = useState(false);

  const handleShowMore = () => {
    if (!showAllItems) {
      setShowAllItems(!showAllItems);
    }
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    if (!home.home) {
      setShowAllItems(true);
    }
  }, []);

  return (
    <>
      <Box className="main-body">
        <Box className="body-child1">
          <Typography className="hr-lines" variant="p">
            Projects
          </Typography>
          <Typography variant="h3">Our Portfolio</Typography>
          <Box className="inner-child1 ">
            <Typography variant="p">
              Our portfolio displays the strength of our skilled IT team. Check
              out the list of our projects and the success we delivered to our
              client's business.
            </Typography>
          </Box>
        </Box>
        <Box className="body-child2">
          <Box className="portfolio-tab-parent">
            <Tabs
              value={value}
              onChange={handleChange}
              centered
              TabIndicatorProps={{
                style: { display: "none" },
              }}
              className="portfolio-tab"
              sx={{ backgroundColor: "white" }}
            >
              <Tab label="All" />
              <Tab label="Custom Application" />
              <Tab label="Web Development" />
              <Tab label="App Development" />
              <Tab label="Ecommerce" />
            </Tabs>
            {value === 0 &&
              (showAllItems ? (
                <GridComponent items={All} />
              ) : (
                <GridComponent items={All.slice(0, 4)} />
              ))}
            {value === 1 && <GridComponent items={AppDevelopment} />}
            {value === 2 && <GridComponent items={WebDevelopment} />}
            {value === 3 && <GridComponent items={Ecommerce} />}
            {value === 4 && <GridComponent items={CustomApplication} />}
            {home.home && value === 0 && !showAllItems && (
              <Box className="button-container">
                <Button onClick={handleShowMore}>Show More</Button>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default PortfolioComponent;
