import React, { useState, useEffect } from "react";

import { Snack } from '../../api/Snacks'

const SnackParent = () => {
  const [snackIndex, setSnackIndex] = useState({
    snacks: 'testing'
  });
  //
  // const fetchSnackIndex = () => {
  //   Snack.index().then(response => {
  //     setSnackIndex( response.snacks )
  //   });
  // }
  //
  // useEffect(() => {
  //   fetchSnackIndex();
  // });

  return <div>This is: { snackIndex.snacks } </div>;
};

export default SnackParent;