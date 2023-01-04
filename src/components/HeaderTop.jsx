import React from 'react'
import Container from '@mui/material/Container';
import { Link } from '@mui/material';
const HeaderTop = () => {

    return (
        <>
            <div>
                <Container maxWidth="lg" style={{ display: "flex", justifyContent: "space-between", paddingTop: "10px" }}>
                    <div style={{ display: "flex", justifyContent: "start", gap: "20px" }}>
                        <p>
                            <i class="fa-solid fa-phone"></i>
                            <span style={{ marginLeft: "5px" }}>1300250296</span>
                        </p>
                        <span style={{ borderRight: "1px solid grey", height: "35px" }}></span>
                        <p>
                            <i class="fa-regular fa-envelope"></i>
                            <span style={{ marginLeft: "5px" }}>sayhello@kowine.com</span>
                        </p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                        <Link style={{ color: "black", cursor: "pointer" }}><i class="fa-brands fa-twitter"></i></Link>
                        <Link style={{ color: "black", cursor: "pointer" }}><i class="fa-brands fa-instagram"></i></Link>
                        <Link style={{ color: "black", cursor: "pointer" }}><i class="fa-brands fa-linkedin-in"></i></Link>
                        <Link style={{ color: "black", cursor: "pointer" }}><i class="fa-brands fa-pinterest-p"></i></Link>
                    </div>
                </Container>
            </div>
            <hr />
        </>
    )
}

export default HeaderTop