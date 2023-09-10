import { Div, Links, Border, P, Icon, Gridd } from "./HomeStyle";
import AddTweet from "../../components/AddTweet/AddTweet";
import Tweet from "../../components/Tweets/Tweets";

const Home = () => {
  return (
    <Gridd container>
      <Gridd item xs={27}>
        <Div>
          <Links to="/home">
            <P>Home</P>
          </Links>
          <Icon />
        </Div>
        <Border />
        <AddTweet />
        <Tweet />
      </Gridd>
    </Gridd>
  );
};

export default Home;
