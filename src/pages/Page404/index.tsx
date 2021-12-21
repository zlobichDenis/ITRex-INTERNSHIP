import { PageNotFoundImg } from "assets";

import { PageNotFoundContainer } from "./styles";

export function PageNotFound() {
  return (
    <PageNotFoundContainer>
      <img src={PageNotFoundImg} alt='page not fount'/>
      <p>Oops...<br/>
        We can’t seem to find the page you are looking for.</p>
    </PageNotFoundContainer>
  )
}