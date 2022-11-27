import { useQuery } from "react-query";
import styled from "styled-components";
import { FetchMovie } from "../db/api";
import { makeImgUrl } from "../db/util";

const Wrapper = styled.div`
  background-color: black;
`;
const Loader = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  font-size: 40px;
  font-weight: bold;
  color: white;
`;
const Banner = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)),
    url(${(props) => props.bgUrl});
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
`;

function Home() {
  const { data, isLoading } = useQuery("LatestMovie", FetchMovie);
  const random = Math.floor(Math.random() * data?.results.length);
  console.log(data?.results[0].overview);
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            bgUrl={makeImgUrl(data?.results[random].backdrop_path) || ""}
          ></Banner>
        </>
      )}
    </Wrapper>
  );
}

export default Home;
