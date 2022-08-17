import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TiketDetails from "./TiketDetails";
import cn from "classnames";
import styled from "styled-components";

const Display = styled.div`
  width: 1200px;
  margin: auto;
  height: 100px;
  background-color: #ded3d3;
  border: 10px solid gray;
  margin-bottom: 50px;
  text-align: center;
`;

const H3El = styled.div`
  line-height: 80px;
  font-size: 30px;
  font-weight: bold;
`;

const MovieTicketList = () => {
  const { chairs, selectedChair } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const handleSelect = (chair) => {
    dispatch({ type: "selectChair", chair });
  };

  return (
    <div>
      <Display>
        <H3El>Display</H3El>
      </Display>
      <div className="d-flex justify-content-evenly">
        <div>
          {chairs.map((chair) => {
            return (
              <div key={chair.row}>
                {chair.row}
                <div>
                  {chair.seats.map((seat) => {
                    const index = selectedChair.findIndex(
                      (ticket) => seat.name === ticket.name
                    );
                    console.log(index);
                    if (seat.booked === true) {
                      return (
                        <button
                          className="p-2 ms-3 translate-middle"
                          style={{ background: "green" }}
                        >
                          {seat.name}
                        </button>
                      );
                    }
                    if (index === -1) {
                      return (
                        <button
                          className="p-2 ms-3 bg-light translate-middle"
                          key={seat.name}
                          onClick={() => {
                            handleSelect(seat);
                          }}
                          // className={cn({
                          //   "backgroundColor:yellow": chairs.booked,
                          // })}
                        >
                          {seat.name}
                        </button>
                      );
                    } else {
                      return (
                        <button
                          className="p-2 ms-3 translate-middle"
                          style={{ background: "yellow" }}
                          key={seat.name}
                          onClick={() => {
                            handleSelect(seat);
                          }}
                        >
                          {seat.name}
                        </button>
                      );
                    }
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <TiketDetails />
        </div>
      </div>
    </div>
  );
};
export default MovieTicketList;
