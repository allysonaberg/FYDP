import React, {useEffect} from 'react';
import axios from "axios";
import { withRouter, useLocation, Redirect} from "react-router-dom";

function Auth(props) {
	let location = useLocation();
	useEffect(() => {
		const sendToken = async () => {
			await axios.get("/auth" + location.search);
		}
		sendToken();
	  }, []);

	console.log("LOCATION")
	console.log(props)
	console.log(location)

	  //take store name from location, pass it to homepage somehow, homepage supplies to /product as a query param
	  return <Redirect to= {{pathname:'/',
							 state: {store_name: location}
							}}
			  />; 
  }

export default Auth;