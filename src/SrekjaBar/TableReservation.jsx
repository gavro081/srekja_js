import React, {useEffect} from "react";
import styled from "styled-components";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import {ssrExportAllKey} from "vite/module-runner";
import {TimePicker} from "@mui/x-date-pickers";

export default function TableReservation() {
    const [selectedDate, setSelectedDate] = React.useState(dayjs());
    const [selectedTime, setSelectedTime] = React.useState(dayjs().minute(0));
    const [placeIsTerrace, setPlaceIsTerrace] = React.useState(false);
    const [hourlyDuration, setHourlyDuration] = React.useState(1);


    return (
        <Wrapper>
            <TableMap />

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
                                Тараса
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
        </Wrapper>
    );
}


const Wrapper = styled.div`
    display: flex;
`

const TableMap = styled.div`
    width: 70%;
`
const ResDetails = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 2rem;
    gap: 2rem;
    width: fit-content;
    
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