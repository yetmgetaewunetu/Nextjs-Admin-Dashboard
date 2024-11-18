import React from "react";
import { FaRegUser, FaUser } from "react-icons/fa";

export default function Transactions() {
  const date = new Date().toISOString().slice(0, 10);

  return (
    <div className="-bg--bgSoft p-5 rounded-md">
      <h1 className=" -text--textSoft text-2xl  my-3">Latest Transactions</h1>
      <table className="w-full">
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="flex py-3 gap-2 items-center">
              <FaUser />
              akila kelila{" "}
            </td>
            <td className="py-3">
              <span
                style={{
                  background: "#afd6ee75",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              >
                done
              </span>
            </td>
            <td className="py-3">{date}</td>
            <td className="py-3">$4.2</td>
          </tr>
          <tr>
            <td className="flex py-3 gap-2 items-center">
              <FaUser />
              Yetm kal{" "}
            </td>
            <td className="py-3">
              <span
                style={{
                  background: "#f7cb7375",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              >
                pending
              </span>
            </td>
            <td className="py-3">{date}</td>
            <td className="py-3">$4.2</td>
          </tr>
          <tr>
            <td className="flex py-3 gap-2 items-center">
              <FaUser />
              Yetm kal{" "}
            </td>
            <td className="py-3">
              <span
                style={{
                  background: "#f7737375",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              >
                canceled
              </span>
            </td>
            <td className="py-3">{date}</td>
            <td className="py-3">$4.2</td>
          </tr>
          <tr>
            <td className="flex py-3 gap-2 items-center">
              <FaUser />
              Yetm kal{" "}
            </td>
            <td className="py-3">
              <span
                style={{
                  background: "#f7cb7375",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              >
                pending
              </span>
            </td>
            <td className="py-3">{date}</td>
            <td className="py-3">$4.2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
