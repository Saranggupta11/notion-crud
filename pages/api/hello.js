// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export default async function handler(req, res) {
  const response = await notion.pages.create({
    parent: {
      database_id: process.env.NOTION_DB,
    },
    properties: {
      title: {
        title: [
          {
            text: {
              content: "next js check",
            },
          },
        ],
      },
      Description: {
        rich_text: [
          {
            text: {
              content: "next js desc",
            },
          },
        ],
      },
      Project: {
        checkbox: true,
      },
      Votes: {
        number: 69,
      },
    },
  });
  console.log(response);
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(500).json({ success: false });
  }
}
