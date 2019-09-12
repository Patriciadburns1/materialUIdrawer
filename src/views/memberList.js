import React, { useState, useEffect } from 'react';
import axios from 'axios';



const MemberList = () => {
    const [initialMemberList, setList] = useState([]);


    useEffect(() => {
        getAllMembers()
    }, []);


    const getAllMembers =  () => {

        
    }


    return (
        <div> </div>
    )
}


export default MemberList; 