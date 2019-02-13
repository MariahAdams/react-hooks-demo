import React, { useEffect } from 'react';

function Party() {
  useEffect(() => {
    console.log('I have arrived at the hooks party!');
    document.title = 'present';
  });

  return <div>something about a party</div>;
}

export default Party;