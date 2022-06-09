import React from 'react'
import { Card, CardGroup, Stack } from 'react-bootstrap'

const Small = () => {
  return (
    <div>
        <Card className='mt-2 mb-2' expand="lg" style={{border:"none",outline:"none",height:"25px",borderRadius:"0px"}}>
            <CardGroup>
                <Stack direction='horizontal' gap={2} style={{backgroundColor:'transparent',marginLeft:"10px"}}>
                    <a href="#" style={{textDecoration:"none",color:"black",fontSize:"10px"}}>Home/</a>
                    <a href="#" style={{textDecoration:"none",color:"black",fontSize:"10px"}}>Production/</a>
                    <a href="#" style={{textDecoration:"none",color:"black",fontSize:"10px"}}>Float Line/</a>
                    <a href="#" style={{textDecoration:"none",color:"black",fontSize:"10px"}}>Production Plan</a>
                     
                </Stack>
            </CardGroup>
        </Card>
    </div>
  )
}

export default Small