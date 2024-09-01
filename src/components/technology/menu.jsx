import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs({ value, setValue }) {
  // const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box className="technology-menu">
      <Tabs
        orientation={isSmallScreen ? "horizontal" : "vertical"}
        className="technology-tabs"
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          style: { display: "none" },
        }}
      >
        <Tab label="Frontend Development" {...a11yProps(0)} />
        <Tab label="Backend Development" {...a11yProps(1)} />
        <Tab label="Mobile App Development" {...a11yProps(2)} />
        <Tab label="InfraStructure" {...a11yProps(3)} />
        <Tab label="Hybrid App" {...a11yProps(4)} />
        <Tab label="Micro Services" {...a11yProps(5)} />
      </Tabs>
      <Box className="panel">
        <TabPanel value={value} index={0} className="technology-tabpanel">
          <Typography variant="h5">Frontend Development </Typography>
          <Typography variant="p">
            Our service skillfully combines development, advanced tech, latest
            trends, innovative design, graphics, usability, and creativity.
            Today, front-end development is the most sought-after skill. We use
            HTML, CSS, JavaScript, React, and Vue.
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1} className="technology-tabpanel">
          <Typography variant="h5">Backend Development </Typography>
          <Typography variant="p">
            While others simply focus on making a server, application, and
            database, GTech Dynamics back-end services result in a product that
            offers an entertaining yet user-friendly experience, meets market
            needs, and works effortlessly.
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={2} className="technology-tabpanel">
          <Typography variant="h5">Mobile App Development </Typography>
          <Typography variant="p">
            At GTech Dynamics, we offer wholesome mobile app development
            services which cover everything from application design to
            management services. Software experts at GTech Dynamics are capable
            and experienced in developing a customized mobile app for your
            niche, whether it is a customer-oriented or enterprise-class
            solution.
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={3} className="technology-tabpanel">
          <Typography variant="h5">Infrastructure</Typography>
          <Typography variant="p">
            Infrastructure services include communication services, networking,
            data processing, and storage. GTech Dynamics infrastructure services
            will help you proactively administer and manage the platforms
            through which you share media, information, and data. Management of
            systems, applications, IoT, user devices, and resilience are also
            covered in our services.
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={4} className="technology-tabpanel">
          <Typography variant="h5">Hybrid App </Typography>
          <Typography variant="p">
            We have a team of highly qualified and experienced hybrid app
            developers. Using cutting-edge technology and our expertise in
            mobile web development, we can deliver a product that will meet
            market needs in terms of UX and UI design.
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={5} className="technology-tabpanel">
          <Typography variant="h5">Microservices </Typography>
          <Typography variant="p">
            Developers at GTech Dynamics are skilled in deriving solutions
            according to your demands. Our microservices help develop a
            collection of independent applications instead of a monolithic app.
            We can help structure big and complicated apps with simple programs
            that can execute themselves.
          </Typography>
        </TabPanel>
      </Box>
    </Box>
  );
}
