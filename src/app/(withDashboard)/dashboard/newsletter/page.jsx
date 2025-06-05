"use client";

import { formatDateToYMD } from "@/utils/formateData";
import axios from "axios";
import React, { useEffect, useState } from "react";

const newsletterData = [
  {
    _id: 1,
    email: "jhon@doe.com",
    date: "2023-10-01",
  },
  {
    _id: 2,
    email: "test@gmail.com",
    date: "2023-10-02",
  },
];

const NewsletterPage = () => {
  const [newsletter, setNewsletter] = useState([]);

  useEffect(() => {
    const getNewsletterData = async () => {
      try {
        const response = await axios.get(
          "https://jakaria-finance-backend.vercel.app/api/v1/newsletter"
        );

        if (response.data?.success) {
          setNewsletter(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching newsletter:", error.message);
        console.log(error);
      }
    };

    getNewsletterData();
  }, []);

  console.log(newsletter);

  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-medium">
        Newsletter Subscribers
      </h1>
      <div className="mt-5">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-6 py-2 text-left text-sm font-semibold uppercase">
                  Email
                </th>
                <th className="px-6 py-2 text-left text-sm font-semibold uppercase">
                  Subscription Date
                </th>
              </tr>
            </thead>
            <tbody>
              {newsletter.map((subscriber) => (
                <tr
                  key={subscriber._id}
                  className="border-t border-gray-200 hover:bg-gray-50 transition duration-200"
                >
                  <td className="px-6 py-2 text-sm font-medium text-gray-900">
                    {subscriber.email}
                  </td>
                  <td className="px-6 py-2 text-sm text-gray-700">
                    {formatDateToYMD(subscriber.createdAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPage;
