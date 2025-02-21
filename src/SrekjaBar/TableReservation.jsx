import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { TimePicker } from "@mui/x-date-pickers";
import Navbar from "../shumaComponents/Navbar.jsx";
import Footer from "../shumaComponents/Footer.jsx";
import { addReservation, getReservations } from "../firebase/tableReservationService.js";

export default function TableReservation() {
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [selectedTime, setSelectedTime] = useState(dayjs().minute(0));
    const [placeIsTerrace, setPlaceIsTerrace] = useState(false);
    const [hourlyDuration, setHourlyDuration] = useState(1);
    const [inactiveTables, setInactiveTables] = useState([]);
    const [selectedTableId, setSelectedTableId] = useState('');

    useEffect(() => {
        fetchReservations(selectedDate.format('YYYY-MM-DD'));
    }, [selectedDate, selectedTime, placeIsTerrace, hourlyDuration]);

    useEffect(() => {
        const reservation = inactiveTables.find(table => table.tableId === selectedTableId);
        if (reservation) {
            setSelectedTableId('');
        }
    }, [hourlyDuration, inactiveTables]);

    const fetchReservations = async (date) => {
        const reservations = await getReservations(date);
        const reservedTables = reservations.filter(res => {
            const resStartTime = dayjs(`${res.date} ${res.startTime}`);
            const resEndTime = dayjs(`${res.date} ${res.endTime}`);
            const selectedStartTime = dayjs(`${date} ${selectedTime.format('HH:mm')}`);
            const selectedEndTime = selectedStartTime.add(hourlyDuration, 'hour');

            // Check if there is a gap between the existing reservation and the desired reservation time
            const isOverlapping = selectedStartTime.isBefore(resEndTime) && selectedEndTime.isAfter(resStartTime);
            const isGapSufficient = selectedEndTime.isBefore(resStartTime) || selectedEndTime.isSame(resStartTime) || selectedStartTime.isAfter(resEndTime) || selectedStartTime.isSame(resEndTime);

            return isOverlapping && !isGapSufficient && res.placeIsTerrace === placeIsTerrace;
        }).map(res => ({
            tableId: res.tableId,
            startTime: res.startTime,
            endTime: res.endTime
        }));
        setInactiveTables(reservedTables);
    };

    const handleReservation = async () => {
        const endTime = selectedTime.add(hourlyDuration, 'hour');
        await addReservation(selectedTableId, selectedDate.format('YYYY-MM-DD'), selectedTime.format('HH:mm'), endTime.format('HH:mm'), placeIsTerrace);
        setSelectedTableId(''); // Reset selected table
        fetchReservations(selectedDate.format('YYYY-MM-DD'));
    };

    const renderTableChairs = () => (
        <>
            <div style={{top: '.4rem', left: '-1rem', transform: 'rotate(-45deg)'}}/>
            <div style={{top: '.4rem', right: '-1rem', transform: 'rotate(45deg)'}}/>
            <div style={{bottom: '.4rem', right: '-1rem', transform: 'rotate(-45deg)'}}/>
            <div style={{bottom: '.4rem', left: '-1rem', transform: 'rotate(45deg)'}}/>
        </>
    );

    const renderTables = (tableIds) => (
        tableIds.map(id => {
            const reservation = inactiveTables.find(table => table.tableId === id);
            return (
                <Table
                    key={id}
                    id={id}
                    className={`${reservation ? 'inactive' : ''} ${selectedTableId === id ? 'selected' : ''}`}
                    onClick={() => {
                        setSelectedTableId(id);
                    }}
                >
                    4-6
                    {renderTableChairs()}
                    {reservation && (
                        <ReservationTime>
                            {reservation.startTime} - {reservation.endTime}
                        </ReservationTime>
                    )}
                </Table>
            );
        })
    );

    return (
        <Wrapper>
            <Navbar/>
            <div>
                <TablesMap>
                    <div>{renderTables(['t1', 't2', 't3', 't4'])}</div>
                    <div>{renderTables(['t5', 't6', 't7', 't8'])}</div>
                    <div>{renderTables(['t9', 't10', 't11', 't12'])}</div>
                </TablesMap>
                <ResDetails>
                    <h1>Направи Резервација!</h1>
                    <div>
                        <ResDetailWrapper>
                            <p>Резервацијата е направена од:</p>
                            <p>Борјан Ѓорѓиевски</p>
                        </ResDetailWrapper>
                        <span style={{display: "flex", gap: "1rem"}}>
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
                                    minTime={dayjs().hour(8).minute(0)}
                                    maxTime={dayjs().hour(21).minute(0)}
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
                    <ResSubmitBtn onClick={handleReservation}>Резервирај</ResSubmitBtn>
                </ResDetails>
            </div>
            <Footer/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    & > div {
        display: grid;
        grid-template-columns: 2fr 1fr;
        width: 100%;
    }
`;

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
`;

const Table = styled.button`
    position: relative;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--logo-green-opacity50);
    width: fit-content;
    padding: 3rem;
    color: white;
    border-radius: 100%;
    font-size: 1rem;
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:hover {
        scale: 1.1;
    }

    &.inactive {
        background: var(--logo-red-opacity50);
        cursor: auto;
    }
    &.inactive:hover {
        cursor: default;
        scale: 1;
    }

    &.selected {
        scale: 1.1;
        background: var(--logo-green);
    }

    & > div {
        position: absolute;
        width: 3rem;
        height: .4rem;
        background: inherit;
        opacity: .4;
    }
`;

const ReservationTime = styled.span`
    position: absolute;
    bottom: -2.5rem;
    color: var(--logo-red-opacity50);
`;

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
`;

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
`;

const ButtonWrapper = styled.div`
    display: flex;
    gap: 0;
    border: 2px solid rgba(0, 0, 0, 0.2);
    width: fit-content;
    overflow: hidden;
    transition: all 200ms ease-in-out;
    
    &:hover {
        scale: 1.05;
    }

    button {
        border: none;
        background: none;
        border-radius: 0;
        padding: .8rem 3rem;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        width: max-content;
        transition: scale 200ms ease-in-out;
    }
    button:hover {
        background: rgba(11, 119, 111, 0.4);
        color: white;

    }

    .activeButton {
        background: var(--logo-green);
        color: white;
    }
    .activeButton:hover {
        scale: 1;
        background: var(--logo-green);
        cursor: default;
    }
`;

const ResSubmitBtn = styled.button`
    margin-top: auto;
    border: none;
    background: var(--logo-green);
    color: white;
    cursor: pointer;
    padding: 1rem;
    font-size: 1.2rem;
    transition: all 300ms ease-in-out;
    &:hover {
        scale: .9;
    }
`;