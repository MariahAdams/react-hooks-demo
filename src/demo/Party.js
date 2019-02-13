import React, { useEffect } from 'react';

function Party() {
  //useEffect can take a second arg, []
  //It will look through the array and only run the effect if one of those values has changed
  useEffect(() => {
    console.log('I have arrived at the hooks party!');
    document.title = 'present';
  }, []);

  return <div>something about a party</div>;
}

export default Party;