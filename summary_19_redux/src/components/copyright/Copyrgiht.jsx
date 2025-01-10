import { useSelector } from "react-redux";

function Copyright() {

  const currentYear = new Date().getFullYear();

  const theme = useSelector(state => state.theme);

  return (
    <p className={`copyright ${theme}`}>&#169; Learning project. All rights reserved. {currentYear}</p>
  )
}

export default Copyright;