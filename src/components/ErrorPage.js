import React from 'react'
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
           <div>
        <h1>Ops! An Error Ocurred!</h1>
        <br />
        {error && (
          <div>
            <p>{error.statusText || error.message}</p>
            <p>{error.status}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default ErrorPage
