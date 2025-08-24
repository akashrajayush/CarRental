import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL=import.meta.env.VITE_BASE_URL

export const AppContext=createContext();

export const AppProvider = ({children})=>{

    const navigate =useNavigate()
    const currency = import.meta.env.VITE_CURRENCY

    const [token,setToken]= useState(null)
    const [user,setUser]= useState(null)
    const [isOwner,setisOwner]= useState(false)
    const [showLogin,setshowLogin]= useState(false)
    const [pickupDate,setPickupDate]= useState('')
    const [returnDate,setReturnDate]= useState('')
                      //setter function
    const[cars,setCars]=useState([])

    //function to check if user is logged in 
    const fetchUser=async()=>{
        try {
            const{data}=await axios.get('/api/user/data')
            if(data.success){
                setUser(data.user)
                setisOwner(data.user.role === 'owner')
            }else{
                navigate('/')
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    //Function to fetch all cars from the server
    const fetchCars = async()=>{
        try{
            const {data}=await axios.get('/api/user/cars')
            data.success ? setCars(data.cars): toast.
            error(data.message)
        }catch(error){
            toast.error(error.message)
        }
    }

    //FUnction to logout user
    const logout = ()=>{
        localStorage.removeItem('token')
        setToken(null)
        setUser(null)
        setisOwner(false)
        axios.defaults.headers.common['Authorization']=''
        toast.success('You have been logged out')

    }

    //useEffect to retrieve the token from localStorage
    useEffect(()=>{
        const token = localStorage.getItem('token')
        setToken(token)
        fetchCars()
    },[])
    
    //useEffect to fetch user data when token is available
    useEffect(()=>{
        if (token){
            axios.defaults.headers.common['Authorization']=`${token}`
            fetchUser()
        }
    },[token])



    const value={
        navigate,currency,axios,user,setUser,token,setToken,isOwner,setisOwner,fetchUser,showLogin,setshowLogin,logout,fetchCars,cars,setCars,
        pickupDate,setPickupDate,returnDate,setReturnDate
    }
    return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
    )
}

export const useAppContext=()=>{
    return useContext(AppContext)
}