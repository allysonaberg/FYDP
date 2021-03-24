import React, {useEffect} from 'react';
import axios from "axios";
import { withRouter, useLocation, Redirect} from "react-router-dom";

function Auth() {
	let location = useLocation();
	useEffect(() => {
		const sendToken = async () => {
			await axios.get("/auth" + location.search);
		}
		sendToken();
	  }, []);
	
	  return <Redirect to='/'/>;
  }

export default Auth;