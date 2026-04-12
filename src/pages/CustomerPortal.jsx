import React from "react";

export default function CustomerPortal() {
    return (
        <div className="portal-page">
            <div className="topbar">
                <span className="status">Cust Logged In</span>
                <div className="brand">
                    <div className="logo">🕊️</div>
                    <div className="name">
                        <div>Prasad&apos;s Cleaning Services LLC</div>
                    </div>
                </div>
                <button className="logout">LOGOUT</button>
            </div>

            <main className="main-area">
                <div className="portal-title">CUSTOMER PORTAL</div>

                <section className="portal-card">
                    <button className="tile">SCHEDULE APPOINTMENT</button>
                    <button className="tile">GET A QUOTE</button>
                    <button className="tile">CONTACT US</button>

                    <button className="tile">LEAVE A REVIEW</button>
                    <button className="tile">SERVICE AREA</button>
                    <button className="tile">ABOUT US</button>

                    <div />
                    <button className="tile">CHANGE SETTINGS</button>
                    <div />
                </section>
            </main>

            <style>{`
                * { box-sizing: border-box; }
                .portal-page {
                    min-height: 100vh;
                    background: #202124;
                    color: #1d1d1f;
                    font-family: "Arial", sans-serif;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .topbar {
                    width: 100%;
                    max-width: 1200px;
                    background: #fff;
                    border-radius: 0 0 8px 8px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 12px 24px;
                    box-shadow: 0 2px 8px rgba(0,0,0,.2);
                    position: relative;
                }
                .status { color: #b0b0b0; font-size: 14px; }
                .brand {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    text-align: center;
                }
                .logo {
                    width: 60px;
                    height: 40px;
                    border-radius: 50%;
                    background: linear-gradient(135deg,#83c641,#48a2df);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    font-size: 22px;
                }
                .name div {
                    color: #5fa8f0;
                    font-size: 28px;
                    font-weight: 700;
                    letter-spacing: .5px;
                }
                .logout {
                    background: #b4d57f;
                    border: 0;
                    color: #fff;
                    border-radius: 999px;
                    padding: 10px 20px;
                    font-weight: 700;
                    cursor: pointer;
                }
                .main-area {
                    width: 100%;
                    max-width: 1200px;
                    margin-top: 28px;
                    background: #7fc1eb;
                    border-radius: 8px;
                    padding: 28px 0 40px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .portal-title {
                    background: #fff;
                    color: #b4d57f;
                    border: 2px solid #000;
                    border-radius: 40px;
                    padding: 16px 40px;
                    font-size: 34px;
                    font-weight: 800;
                    letter-spacing: 1.5px;
                    margin-bottom: 28px;
                }
                .portal-card {
                    width: 90%;
                    max-width: 880px;
                    background: #fff;
                    border: 2px solid #000;
                    border-radius: 30px;
                    padding: 28px;
                    display: grid;
                    grid-template-columns: repeat(3, minmax(160px,1fr));
                    grid-gap: 20px;
                    justify-items: center;
                }
                .tile {
                    width: 160px;
                    height: 100px;
                    border: 0;
                    border-radius: 16px;
                    background: #c4e08a;
                    color: #fff;
                    font-size: 14px;
                    font-weight: 700;
                    text-transform: uppercase;
                    cursor: pointer;
                    box-shadow: 0 4px 8px rgba(0,0,0,.1);
                }
                .tile:hover { transform: translateY(-2px); }
                .portal-card > div { width: 160px; height: 100px; }
            `}</style>
        </div>
    );
}