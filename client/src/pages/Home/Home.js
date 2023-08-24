import { Grid } from "@mui/material";

import { Div, Links, Border, P, Icon } from "./HomeStyle";

import AddTweet from "../../components/AddTweet/AddTweet";

const Home = () => {
  return (
    <Grid container xs={27.7}>
      <Grid item xs={12}>
        <Div>
          <Links to="/home">
            <P>Home</P>
          </Links>
          <Icon />
        </Div>
        <Border />
        <AddTweet />
        <Border />
      </Grid>
    </Grid>
  );
};

export default Home;
