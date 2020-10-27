import React from "react";
import { Anchor, Box } from "grommet";
import Footer from './Footer'
import styled from "styled-components";


const StyledBox = styled(Box)`
background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%);
`;

class Main extends React.Component {
  render() {
    return (
      <Box
        animation={{ type: "fadeIn", duration: "2000" }}
        background="light-1"
        pad={{ bottom: "medium" }}
        overflow="auto"
      >
        <Anchor href="#Home" name="Home"></Anchor>
        {this.props.children}
        <StyledBox pad="large" flex="false">
          <h1>
            <Anchor href="#Work" name="Work"></Anchor>Work
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            imperdiet nibh lorem, a commodo neque pharetra non. Sed cursus
            tortor in mauris mollis, quis viverra mi scelerisque. Aliquam id
            faucibus sem. Phasellus luctus magna nec tincidunt gravida. Fusce
            finibus facilisis purus. Phasellus sit amet lobortis augue, eget
            fermentum turpis. Pellentesque eu libero quis justo condimentum
            bibendum tempus vitae purus. Nunc sed erat commodo, porta libero ut,
            finibus ex. Aliquam ornare luctus eleifend. Sed vulputate id mauris
            in rutrum. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Duis sit amet ante nisi.{" "}
          </p>
          <p>
            Morbi vel orci ullamcorper nunc semper mattis. Sed ut ante ac metus
            rhoncus bibendum a sit amet neque. Cras viverra non augue a
            bibendum. Mauris at urna felis. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; In pretium
            nec lorem id porta. Maecenas libero augue, faucibus commodo justo
            vitae, luctus sodales odio. Sed varius fermentum ipsum, quis mattis
            quam tempor id. Nunc ut nulla enim. Phasellus nec elit libero.
            Interdum et malesuada fames ac ante ipsum primis in faucibus.{" "}
          </p>
          <p>
            Ut pellentesque sodales feugiat. Donec sit amet nunc condimentum,
            malesuada velit vel, fermentum libero. Duis lacus metus, rutrum
            convallis laoreet sit amet, tincidunt eget erat. Donec egestas
            suscipit elit, in consectetur tortor euismod quis. Praesent
            malesuada enim non tortor molestie, id gravida tellus dapibus. Fusce
            ac nunc hendrerit, feugiat massa quis, imperdiet turpis. Mauris
            fermentum tristique dolor. Duis nec commodo orci.{" "}
          </p>
          <p>
            Curabitur massa quam, eleifend ut semper sit amet, hendrerit a ante.
            Ut ac ante eu dui venenatis lacinia non in risus. Aliquam risus
            erat, pretium quis maximus consequat, euismod in velit. Phasellus
            commodo, est id ullamcorper varius, lectus dui iaculis nibh, sed
            congue sem arcu at orci. Nam sed iaculis quam. Phasellus in mollis
            ligula, ut fermentum nisi. Proin tempor, enim eget maximus lobortis,
            metus mauris sagittis odio, ut iaculis justo augue ac mauris.
            Quisque egestas odio sed blandit pulvinar. Praesent libero neque,
            scelerisque ac justo in, bibendum mollis diam.{" "}
          </p>
          <p>
            Nunc id dui sit amet nisl auctor eleifend. In feugiat mi non nibh
            rutrum volutpat. Nullam maximus dolor nec lorem scelerisque, id
            tempus mauris vestibulum. Quisque egestas arcu nunc, non viverra sem
            luctus ut. Vestibulum non luctus ex, in tincidunt neque. Nunc justo
            quam, pretium sed lectus vitae, porttitor auctor nulla. Nulla
            euismod fringilla bibendum. Curabitur fringilla blandit velit,
            suscipit auctor tortor fringilla at.{" "}
          </p>
          <h1>
            <Anchor href="#Skills" name="Skills"></Anchor>Skills
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            imperdiet nibh lorem, a commodo neque pharetra non. Sed cursus
            tortor in mauris mollis, quis viverra mi scelerisque. Aliquam id
            faucibus sem. Phasellus luctus magna nec tincidunt gravida. Fusce
            finibus facilisis purus. Phasellus sit amet lobortis augue, eget
            fermentum turpis. Pellentesque eu libero quis justo condimentum
            bibendum tempus vitae purus. Nunc sed erat commodo, porta libero ut,
            finibus ex. Aliquam ornare luctus eleifend. Sed vulputate id mauris
            in rutrum. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Duis sit amet ante nisi.{" "}
          </p>
          <p>
            Morbi vel orci ullamcorper nunc semper mattis. Sed ut ante ac metus
            rhoncus bibendum a sit amet neque. Cras viverra non augue a
            bibendum. Mauris at urna felis. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; In pretium
            nec lorem id porta. Maecenas libero augue, faucibus commodo justo
            vitae, luctus sodales odio. Sed varius fermentum ipsum, quis mattis
            quam tempor id. Nunc ut nulla enim. Phasellus nec elit libero.
            Interdum et malesuada fames ac ante ipsum primis in faucibus.{" "}
          </p>
          <p>
            Ut pellentesque sodales feugiat. Donec sit amet nunc condimentum,
            malesuada velit vel, fermentum libero. Duis lacus metus, rutrum
            convallis laoreet sit amet, tincidunt eget erat. Donec egestas
            suscipit elit, in consectetur tortor euismod quis. Praesent
            malesuada enim non tortor molestie, id gravida tellus dapibus. Fusce
            ac nunc hendrerit, feugiat massa quis, imperdiet turpis. Mauris
            fermentum tristique dolor. Duis nec commodo orci.{" "}
          </p>
          <p>
            Curabitur massa quam, eleifend ut semper sit amet, hendrerit a ante.
            Ut ac ante eu dui venenatis lacinia non in risus. Aliquam risus
            erat, pretium quis maximus consequat, euismod in velit. Phasellus
            commodo, est id ullamcorper varius, lectus dui iaculis nibh, sed
            congue sem arcu at orci. Nam sed iaculis quam. Phasellus in mollis
            ligula, ut fermentum nisi. Proin tempor, enim eget maximus lobortis,
            metus mauris sagittis odio, ut iaculis justo augue ac mauris.
            Quisque egestas odio sed blandit pulvinar. Praesent libero neque,
            scelerisque ac justo in, bibendum mollis diam.{" "}
          </p>
          <p>
            Nunc id dui sit amet nisl auctor eleifend. In feugiat mi non nibh
            rutrum volutpat. Nullam maximus dolor nec lorem scelerisque, id
            tempus mauris vestibulum. Quisque egestas arcu nunc, non viverra sem
            luctus ut. Vestibulum non luctus ex, in tincidunt neque. Nunc justo
            quam, pretium sed lectus vitae, porttitor auctor nulla. Nulla
            euismod fringilla bibendum. Curabitur fringilla blandit velit,
            suscipit auctor tortor fringilla at.{" "}
          </p>

          <h1>
            <Anchor href="#About" name="About"></Anchor>About
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            imperdiet nibh lorem, a commodo neque pharetra non. Sed cursus
            tortor in mauris mollis, quis viverra mi scelerisque. Aliquam id
            faucibus sem. Phasellus luctus magna nec tincidunt gravida. Fusce
            finibus facilisis purus. Phasellus sit amet lobortis augue, eget
            fermentum turpis. Pellentesque eu libero quis justo condimentum
            bibendum tempus vitae purus. Nunc sed erat commodo, porta libero ut,
            finibus ex. Aliquam ornare luctus eleifend. Sed vulputate id mauris
            in rutrum. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Duis sit amet ante nisi.{" "}
          </p>
          <p>Bodyum. Mauris at urna felis. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; In pretium
            nec lorem id porta. Maecenas libero augue, faucibus commodo justo
            vitae, luctus sodales odio. Sed varius fermentum ipsum, quis mattis
            quam tempor id. Nunc ut nulla enim. Phasellus nec elit libero.
            Interdum et malesuada fames ac ante ipsum primis in faucibus.{" "}
          </p>
          <p>
            Ut pellentesque sodales feugiat. Donec sit amet nunc condimentum,
            malesuada velit vel, fermentum libero. Duis lacus metus, rutrum
            convallis laoreet sit amet, tincidunt eget erat. Donec egestas
            suscipit elit, in consectetur tortor euismod quis. Praesent
            malesuada enim non tortor molestie, id gravida tellus dapibus. Fusce
            ac nunc hendrerit, feugiat massa quis, imperdiet turpis. Mauris
            fermentum tristique dolor. Duis nec commodo orci.{" "}
          </p>
          <p>
            Curabitur massa quam, eleifend ut semper sit amet, hendrerit a ante.
            Ut ac ante eu dui venenatis lacinia non in risus. Aliquam risus
            erat, pretium quis maximus consequat, euismod in velit. Phasellus
            commodo, est id ullamcorper varius, lectus dui iaculis nibh, sed
            congue sem arcu at orci. Nam sed iaculis quam. Phasellus in mollis
            ligula, ut fermentum nisi. Proin tempor, enim eget maximus lobortis,
            metus mauris sagittis odio, ut iaculis justo augue ac mauris.
            Quisque egestas odio sed blandit pulvinar. Praesent libero neque,
            scelerisque ac justo in, bibendum mollis diam.{" "}
          </p>
          <p>
            Nunc id dui sit amet nisl auctor eleifend. In feugiat mi non nibh
            rutrum volutpat. Nullam maximus dolor nec lorem scelerisque, id
            tempus mauris vestibulum. Quisque egestas arcu nunc, non viverra sem
            luctus ut. Vestibulum non luctus ex, in tincidunt neque. Nunc justo
            quam, pretium sed lectus vitae, porttitor auctor nulla. Nulla
            euismod fringilla bibendum. Curabitur fringilla blandit velit,
            suscipit auctor tortor fringilla at.{" "}
          </p>
          </StyledBox>
        <Footer></Footer>
      </Box>
      
    );
  }
}

export default Main;
