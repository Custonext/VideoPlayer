import Cookies from 'js-cookie';
import { useState, useEffect } from 'react'

const useUserInfo = () => {
    const [ipAddress, setIpAddress] = useState(null)
    const [hutk, setHutk] = useState(null)
    const [pageUri, setPageUrl] = useState(null)
    const [pageName, setPageName] = useState(null)

    const getIp = async () => {
      // Connect ipapi.co with fetch()
      const response = await fetch('https://ipapi.co/json/')
      const data = await response.json()
      // Set the IP address to the constant `ip`
      setIpAddress(data.ip)
    }
  
    // Run `getIP` function above just once when the page is rendered
    useEffect(() => {
        getIp()
        const cookie = Cookies.get('hubspotutk') 
        setHutk(cookie)  
        setPageName(document.title)
        setPageUrl(window.location.href)
    }, [])

    if(ipAddress || pageUri || hutk || pageName) {
        return { ipAddress, pageUri,hutk, pageName}
    };
};

export default useUserInfo;