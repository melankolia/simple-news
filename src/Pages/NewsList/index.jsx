import React, { Component } from "react";
import NavBar from "../../Components/Navbar/index.jsx";
import TopHeadline from "../../Components/TopHeadlines/index.jsx";
import News from "../../Components/News/index.jsx";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";

class ListNews extends Component {
  goToDetail = () => {
    console.log("Clicked");
  };
  render() {
    return (
      <>
        <NavBar page={"/listnews"} />
        <Container>
          <Row>
            <News
              news={{
                image:
                  "https://o.aolcdn.com/images/dims?thumbnail=1200%2C630&quality=80&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D1600%252C1034%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C1034%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2020-02%252F03902b20-49f0-11ea-bc77-83223c0fcd6d%26client%3Da1acac3e1b3290917d92%26signature%3D9b95fa3e491c82984dcb3a2247775afe6cf3abd5&client=amp-blogside-v2&signature=05d8b5825b0f5749837b85f57089317d1315dbc9",
                title: "News",
                desc: "Alec McKinney pleaded guilty to 17 counts related to the May 2019 shooting."
              }}
            />
            <News
              news={{
                image:
                  "https://o.aolcdn.com/images/dims?thumbnail=1200%2C630&quality=80&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D1600%252C1034%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C1034%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2020-02%252F03902b20-49f0-11ea-bc77-83223c0fcd6d%26client%3Da1acac3e1b3290917d92%26signature%3D9b95fa3e491c82984dcb3a2247775afe6cf3abd5&client=amp-blogside-v2&signature=05d8b5825b0f5749837b85f57089317d1315dbc9",
                title: "News",
                desc: "Alec McKinney pleaded guilty to 17 counts related to the May 2019 shooting."
              }}
            />
            <News
              news={{
                image:
                  "https://o.aolcdn.com/images/dims?thumbnail=1200%2C630&quality=80&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D1600%252C1034%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C1034%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2020-02%252F03902b20-49f0-11ea-bc77-83223c0fcd6d%26client%3Da1acac3e1b3290917d92%26signature%3D9b95fa3e491c82984dcb3a2247775afe6cf3abd5&client=amp-blogside-v2&signature=05d8b5825b0f5749837b85f57089317d1315dbc9",
                title: "News",
                desc: "Alec McKinney pleaded guilty to 17 counts related to the May 2019 shooting."
              }}
            />
            <News
              news={{
                image:
                  "https://o.aolcdn.com/images/dims?thumbnail=1200%2C630&quality=80&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D1600%252C1034%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C1034%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2020-02%252F03902b20-49f0-11ea-bc77-83223c0fcd6d%26client%3Da1acac3e1b3290917d92%26signature%3D9b95fa3e491c82984dcb3a2247775afe6cf3abd5&client=amp-blogside-v2&signature=05d8b5825b0f5749837b85f57089317d1315dbc9",
                title: "News",
                desc: "Alec McKinney pleaded guilty to 17 counts related to the May 2019 shooting."
              }}
            />
            <News
              news={{
                image:
                  "https://o.aolcdn.com/images/dims?thumbnail=1200%2C630&quality=80&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D1600%252C1034%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C1034%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2020-02%252F03902b20-49f0-11ea-bc77-83223c0fcd6d%26client%3Da1acac3e1b3290917d92%26signature%3D9b95fa3e491c82984dcb3a2247775afe6cf3abd5&client=amp-blogside-v2&signature=05d8b5825b0f5749837b85f57089317d1315dbc9",
                title: "News",
                desc: "Alec McKinney pleaded guilty to 17 counts related to the May 2019 shooting."
              }}
            />
          </Row>
        </Container>
      </>
    );
  }
}

export default ListNews;
