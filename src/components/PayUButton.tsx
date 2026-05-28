import React from 'react';

export const PayUButton = ({ userId }: { userId?: string }) => {
  // If we have a userId, we append it as udf1 to the static payment link.
  const link = userId 
    ? `https://u.payu.in/TrB7lGSHFV8s?udf1=${userId}` 
    : 'https://u.payu.in/TrB7lGSHFV8s';

  return (
    <div>
      <a 
        style={{
          width: "150px",
          backgroundColor: "#c21717",
          textAlign: "center",
          fontWeight: 800,
          padding: "11px 0px",
          color: "white",
          fontSize: "12px",
          display: "inline-block",
          textDecoration: "none",
          borderRadius: "3.229px"
        }} 
        href={link} 
      > 
        Pay Now 
      </a>
    </div>
  );
};
