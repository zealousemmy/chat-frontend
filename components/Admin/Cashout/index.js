import Axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "../Card";
import Container from "../../../universal-components/Container";
import { CashoutRequestConfig, COLUMNS } from "./config";
import NoDataFound from "../NoDataFound";
import {
  CashoutRequestWrapper,
  CashoutRequest__Users,
  CashoutRequest__UsersTable,
  CashoutRequest__Wrapper,
  CashoutRequest__WrapperCards,
} from "./styles";
import Table from "../../../universal-components/Table";

const Cashout = ({ title }) => {
  const [cashoutRequest, setCashoutRequest] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cashoutInfoCounts, setCashoutInfoCount] = useState([]);

  const getAllPendingData = (pending, cashout) => {
    const pendings = pending["data"].map((item) => {
      Object.assign(item, {
        created_at: item.created_at.split("T")[0],
        debit: (
          <button
            className="verify"
            onClick={() => HandleCashoutCredit(item.id)}
          >
            Credit
          </button>
        ),
        reject: (
          <button
            className="reject"
            onClick={() => HandleCashoutReject(item.id)}
          >
            Verify
          </button>
        ),
      });
    });
    setCashoutRequest({
      pending: { ...pending, pendings },
      cashout,
    });
  };

  const GetAllApiData = () => {
    setLoading(true);
    const endpoints = [
      `${process.env.NEXT_PUBLIC_APP_DOMAIN}/cash-out/get`,
      `${process.env.NEXT_PUBLIC_APP_DOMAIN}/cash-out/all-pending`,
    ];

    Axios.all(endpoints.map((promises) => Axios.get(promises)))
      .then(
        Axios.spread(({ data: allCashout }, { data: pendingCashout }) => {
          getAllPendingData(pendingCashout, allCashout);
          const approvedCashoutTotal = allCashout["data"].filter(
            (cashout) => cashout.status === "fulfilled"
          ).length;

          let set = new Set();
          let totalUserCashout = allCashout["data"].filter((x) => {
            const str = JSON.stringify(x.user_id);
            return !set.has(str) && set.add(str);
          }).length;

          setCashoutInfoCount([
            allCashout.total,
            pendingCashout.total,
            approvedCashoutTotal,
            totalUserCashout,
          ]);

          setLoading(false);
        })
      )
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    GetAllApiData();
  }, []);

  useEffect(() => {
    for (let index = 0; index < CashoutRequestConfig.length; index++) {
      CashoutRequestConfig[index]["figure"] = cashoutInfoCounts[index];
    }
  }, [cashoutInfoCounts]);

  const HandleCashoutReject = (id) => {
    Axios.get(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/cash-out/delete/${id}`)
      .then(({ data: data }) => {
        if (data["status"] === "success") {
          window.alert(data["message"]);
        } else {
          window.alert(data["message"]);
        }
        window.location.reload();
      })
      .catch((err) => {
        setError(err);
      });
  };
  const HandleCashoutCredit = (id) => {
    Axios.get(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/cash-out/${id}`)
      .then(({ data: data }) => {
        if (data["status"] === "success") {
          window.alert(data["message"]);
        } else {
          window.alert(data["message"]);
        }
        window.location.reload();
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <CashoutRequestWrapper>
      <Container>
        <CashoutRequest__Wrapper>
          <h2>{title}</h2>
          <CashoutRequest__WrapperCards>
            {loading
              ? "Loading..."
              : CashoutRequestConfig.map(({ label, figure, id }) => (
                  <Card label={label} figure={figure} key={id} />
                ))}
          </CashoutRequest__WrapperCards>
        </CashoutRequest__Wrapper>
        <CashoutRequest__Users>
          <h2>All request from users</h2>
          {loading ? (
            "Loading..."
          ) : error ? (
            error.message
          ) : cashoutRequest["pending"].total <= 0 ? (
            <NoDataFound />
          ) : (
            <CashoutRequest__UsersTable>
              <Table
                data={cashoutRequest["pending"].data}
                columns={COLUMNS}
                stripped={"#eee"}
              />
            </CashoutRequest__UsersTable>
          )}
        </CashoutRequest__Users>
      </Container>
    </CashoutRequestWrapper>
  );
};

export default Cashout;
