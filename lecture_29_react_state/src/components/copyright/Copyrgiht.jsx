function Copyright() {

  const currentYear = new Date().getFullYear();

  console.log('Rendering Copyright component');

  return (
    <p>&#169; Learning project. All rights reserved. {currentYear}</p>
  )
}

export default Copyright;