import React, {useEffect} from "react";
import styled from "styled-components";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import {ssrExportAllKey} from "vite/module-runner";
import {TimePicker} from "@mui/x-date-pickers";
import Navbar from "../shumaComponents/Navbar.jsx";
import Footer from "../shumaComponents/Footer.jsx";

export default function TableReservation() {
    const [selectedDate, setSelectedDate] = React.useState(dayjs());
    const [selectedTime, setSelectedTime] = React.useState(dayjs().minute(0));
    const [placeIsTerrace, setPlaceIsTerrace] = React.useState(false);
    const [hourlyDuration, setHourlyDuration] = React.useState(1);
    const [inactiveTables, setInactiveTables] = React.useState(['t1', 't2', 't4', 't7', 't9', 't11', 't12']);

    useEffect(() => {
        console.log(inactiveTables)
    }, []);

    const renderTableChairs = () => (
        <>
            <div style={{top: '.4rem', left: '-1rem', transform: 'rotate(-45deg)'}}/>
            <div style={{top: '.4rem', right: '-1rem', transform: 'rotate(45deg)'}}/>
            <div style={{bottom: '.4rem', right: '-1rem', transform: 'rotate(-45deg)'}}/>
            <div style={{bottom: '.4rem', left: '-1rem', transform: 'rotate(45deg)'}}/>
        </>
    )

    return (
        <Wrapper>
            <Navbar />

            <div >
                <TablesMap>
                    <div>
                        <Table id={'t1'} className={inactiveTables.includes('t1') ? 'inactive' : ''}>
                            4-6
                            {renderTableChairs()}
                        </Table>
                        <Table id={'t2'} className={inactiveTables.includes('t2') ? 'inactive' : ''}>
                            4-6
                            {renderTableChairs()}
                        </Table>
                        <Table id={'t3'} className={inactiveTables.includes('t3') ? 'inactive' : ''}>
                            4-6
                            {renderTableChairs()}
                        </Table>
                        <Table id={'t4'} className={inactiveTables.includes('t4') ? 'inactive' : ''}>
                            4-6
                            {renderTableChairs()}
                        </Table>
                    </div>
                    <div>
                        <Table id={'t5'} className={inactiveTables.includes('t5') ? 'inactive' : ''}>
                            4-6
                            {renderTableChairs()}
                        </Table>
                        <Table id={'t6'} className={inactiveTables.includes('t6') ? 'inactive' : ''}>
                            2-4
                            {renderTableChairs()}
                        </Table>
                        <Table id={'t7'} className={inactiveTables.includes('t7') ? 'inactive' : ''}>
                            2-4
                            {renderTableChairs()}
                        </Table>
                        <Table id={'t8'} className={inactiveTables.includes('t8') ? 'inactive' : ''}>
                            2-4
                            {renderTableChairs()}
                        </Table>
                    </div>
                    <div>
                        <Table id={'t9'} className={inactiveTables.includes('t9') ? 'inactive' : ''}>
                            4-6
                            {renderTableChairs()}
                        </Table>
                        <Table id={'t10'} className={inactiveTables.includes('t10') ? 'inactive' : ''}>
                            2-4
                            {renderTableChairs()}
                        </Table>
                        <Table id={'t11'} className={inactiveTables.includes('t11') ? 'inactive' : ''}>
                            2-4
                            {renderTableChairs()}
                        </Table>
                        <Table id={'t12'} className={inactiveTables.includes('t12') ? 'inactive' : ''}>
                            4-6
                            {renderTableChairs()}
                        </Table>
                    </div>
                </TablesMap>

                <ResDetails>
                    <h1>Направи Резервација!</h1>
                    <div>
                        <ResDetailWrapper>
                            <p>Резервацијата е направена од:</p>
                            <p>Борјан Ѓорѓиевски</p>
                        </ResDetailWrapper>
                        <span style={{ display: "flex", gap: "1rem" }} >
                        <ResDetailWrapper>
                            <p>На датум:</p>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    value={selectedDate}
                                    onChange={(newDate) => setSelectedDate(newDate)}
                                    minDate={dayjs()}
                                />
                            </LocalizationProvider>
                        </ResDetailWrapper>

                        <ResDetailWrapper>
                            <p>Време:</p>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <TimePicker
                                    value={selectedTime}
                                    onChange={(newTime) => setSelectedTime(newTime)}
                                    minutesStep={30}
                                    ampm={false}
                                />
                            </LocalizationProvider>
                        </ResDetailWrapper>
                    </span>


                        <ResDetailWrapper>
                            <p>Место во барот:</p>
                            <ButtonWrapper>
                                <button
                                    onClick={() => setPlaceIsTerrace(true)}
                                    className={placeIsTerrace ? "activeButton" : ""}
                                >
                                    Тераса
                                </button>
                                <button
                                    onClick={() => setPlaceIsTerrace(false)}
                                    className={!placeIsTerrace ? "activeButton" : ""}
                                >
                                    Внатре
                                </button>
                            </ButtonWrapper>
                        </ResDetailWrapper>

                        <ResDetailWrapper>
                            <p>Времетраење на резервацијата:</p>
                            <ButtonWrapper>
                                <button
                                    onClick={() => setHourlyDuration(1)}
                                    className={hourlyDuration === 1 ? "activeButton" : ""}
                                >
                                    1 час
                                </button>
                                <button
                                    onClick={() => setHourlyDuration(2)}
                                    className={hourlyDuration === 2 ? "activeButton" : ""}
                                >
                                    2 часа
                                </button>
                                <button
                                    onClick={() => setHourlyDuration(3)}
                                    className={hourlyDuration === 3 ? "activeButton" : ""}
                                >
                                    3 часа
                                </button>
                            </ButtonWrapper>
                        </ResDetailWrapper>
                    </div>
                    <ResSubmitBtn>Резервирај</ResSubmitBtn>
                </ResDetails>
            </div>


            <Footer />
        </Wrapper>
    );
}


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    & > div {
        display: grid;
        grid-template-columns: 70% auto;
        
    }
`

const TablesMap = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 4rem 4rem;
    gap: 4rem;
    background: #eee;
    border-radius: 0;
    
    & > div {
        display: flex;
        justify-content: space-between;
    }
`

const Table = styled.button`
    position: relative;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--logo-green);
    width: fit-content;
    padding: 3rem;
    color: white;
    border-radius: 100%;
    font-size: 1rem;
    cursor: pointer;
    
    &.inactive {
        background: var(--logo-red);
        cursor: auto;
        opacity: .2;
    }
    
    &>div {
        position: absolute;
        width: 3rem;
        height: .4rem;
        background: inherit;
        opacity: .4;
    }
`

const ResDetails = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 2rem;
    gap: 2rem;
    width: fit-content;
    box-shadow: -4px 0 8px rgba(0,0,0,0.2);
    border-radius: 0;
    z-index: 2;
    
    & > div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`

const ResDetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: .2rem;
    
    & > p:first-child {
        color: rgba(0,0,0,0.4);
        font-weight: 400;
        font-size: 1rem;
    }
    & > p {
        font-size: 1.2rem;
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    gap: 0;
    border: 2px solid rgba(0,0,0,0.2);
    width: fit-content;
    overflow: hidden;
    
    button {
        border: none;
        background: none;
        border-radius: 0;
        padding: .8rem 3rem;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        width: max-content;
    }
    
    .activeButton {
        background: var(--logo-green);
        color: white;
    }
`

const ResSubmitBtn = styled.button`
    margin-top: auto;
    border: none;
    background: var(--logo-green);
    color: white;
    cursor: pointer;
    padding: 1rem;
    font-size: 1.2rem;
`