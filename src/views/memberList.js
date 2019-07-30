import React, { useState, useEffect } from 'react';
import axios from 'axios';



const MemberList = () => {
    const [initialMemberList, setList] = useState([]);


    useEffect(() => {
        getAllMembers()
    }, []);


    const getAllMembers = async () => {

        // const baseUrl = 'https://clerkapi.azure-api.net/Members?key=da13cc0dce344b3fa36b500e01602df8';

        // let headers = { 
        //     ContentType: "application/x-www-form-urlencoded",
        //     CacheControl: "no-cache",
        //     withCredentials: true,
        //     dataType:'jsonp',
        //     EnableCorsAttribute : '*'
        //   };
        try {
            // let call = await axios.get(baseUrl)
            // console.log(call)
            var data = null;

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    console.log(this.responseText);
                }
            });

            xhr.open("GET", "https://clerkapi.azure-api.net/Members?key=da13cc0dce344b3fa36b500e01602df8");
            
            xhr.setRequestHeader("Accept", "*/*");
            xhr.setRequestHeader("Cache-Control", "no-cache");
          
            xhr.setRequestHeader("Connection", "keep-alive");
            xhr.setRequestHeader("cache-control", "no-cache");

            xhr.send(data);
        }
        catch (error) {
            console.log(error)
        }

    }


    return (
        <div> </div>
    )
}


export default MemberList; 