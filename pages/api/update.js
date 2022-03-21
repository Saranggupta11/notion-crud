// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_API_KEY,
});

export default async function handler(req, res) {
  const data = req.body;
  const response = await notion.pages.update(JSON.parse(data));
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(500).json({ success: false });
  }
}
